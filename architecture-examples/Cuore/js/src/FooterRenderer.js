FooterRenderer = CUORE.Class(CUORE.Renderer, {

	init : function(){
		FooterRenderer.parent.init.call(this);
	},

	updateWhenDrawn: function(component) {
		this.panel.innerHTML="";

		var service = document.page.getService('TASK');

		var visible = ((service.active() != 0 ) || (service.completed() != 0));
		// should return here, right?
		this.panel.style.display= (visible?'block':'none');

		var span = CUORE.Dom.createElement('span', {'id':'todo-count'}, this.panel);
		var strong = CUORE.Dom.createElement('strong', {}, span);
		var itemsLeft = service.active();
		strong.innerHTML = itemsLeft;
		span.innerHTML += ' item' + (itemsLeft != 1 ? 's':'' )+ ' left';

		var filterList = CUORE.Dom.createElement('ul', {'id':'filters'}, this.panel);

		var liAll = CUORE.Dom.createElement('li', {}, filterList);
		var hrefAll = CUORE.Dom.createElement('a', {'href':'#/'}, liAll);
		hrefAll.innerHTML = "All";
		if (document.page.getFilter() === '')
			CUORE.Dom.addClass(hrefAll,'selected');

		var liActive = CUORE.Dom.createElement('li', {}, filterList);
		var hrefActive = CUORE.Dom.createElement('a', {'href':'#/active'}, liActive);
		hrefActive.innerHTML = "Active";
		if (document.page.getFilter() === 'active')
			CUORE.Dom.addClass(hrefActive,'selected');

		var liCompleted = CUORE.Dom.createElement('li', {}, filterList);
		var hrefCompleted = CUORE.Dom.createElement('a', {'href':'#/completed'}, liCompleted);
		hrefCompleted.innerHTML = "Completed";
		if (document.page.getFilter() === 'completed')
			CUORE.Dom.addClass(hrefCompleted,'selected');

		var button = CUORE.Dom.createElement('botton', {'id':'clear-completed'}, this.panel);
		button.innerHTML="Clear Completed (" + service.completed() + ")";
		if (service.completed() == 0) button.style.display = 'none';

		button.addEventListener('click', function(){
            service.execute('deleteCompletedTasks');
		});

		hrefAll.addEventListener('click', function(){
			CUORE.Dom.addClass(hrefAll,'selected');
			CUORE.Dom.removeClass(hrefActive,'selected');
			CUORE.Dom.removeClass(hrefCompleted,'selected');
		});

		hrefActive.addEventListener('click', function(){
			CUORE.Dom.addClass(hrefActive,'selected');
			CUORE.Dom.removeClass(hrefCompleted,'selected');
			CUORE.Dom.removeClass(hrefAll,'selected');            
		});

		hrefCompleted.addEventListener('click', function(){
			CUORE.Dom.addClass(hrefCompleted,'selected');
			CUORE.Dom.removeClass(hrefActive,'selected');
			CUORE.Dom.removeClass(hrefAll,'selected');
		});
	}
});
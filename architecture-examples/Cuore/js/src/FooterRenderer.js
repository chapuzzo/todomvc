FooterRenderer = CUORE.Class(CUORE.Renderer, {

	init : function(){
		FooterRenderer.parent.init.call(this);
	},

	updateWhenDrawn: function(component) {
		this.panel.innerHTML="";

		var span = CUORE.Dom.createElement('span', {'id':'todo-count'}, this.panel);
		var strong = CUORE.Dom.createElement('strong', {}, span);
		strong.innerHTML = 'X';
		span.innerHTML += ' items left';

		var ul = CUORE.Dom.createElement('ul', {'id':'filters'}, this.panel);

		var li1 = CUORE.Dom.createElement('li', {}, ul);
		var a1 = CUORE.Dom.createElement('a', {'href':'#/'}, li1);
		a1.innerHTML = "All";
		CUORE.Dom.addClass(a1,'selected');

		var li2 = CUORE.Dom.createElement('li', {}, ul);
		var a2 = CUORE.Dom.createElement('a', {'href':'#/active'}, li2);
		a2.innerHTML = "Active";


		var li3 = CUORE.Dom.createElement('li', {}, ul);
		var a3 = CUORE.Dom.createElement('a', {'href':'#/completed'}, li3);
		a3.innerHTML = "Completed";

		var button = CUORE.Dom.createElement('botton', {'id':'clear-completed'}, this.panel);
		button.innerHTML="Clear Completed (x)";

		button.addEventListener('click', function(){
            var service = document.page.getService('TASK');
            service.execute('deleteCompletedTasks');
		});

		a1.addEventListener('click', function(){
			CUORE.Dom.addClass(a1,'selected');
			CUORE.Dom.removeClass(a2,'selected');
			CUORE.Dom.removeClass(a3,'selected');
            var service = document.page.getService('TASK');
            service.execute('changedFilters');
		});

		a2.addEventListener('click', function(){
			CUORE.Dom.addClass(a2,'selected');
			CUORE.Dom.removeClass(a3,'selected');
			CUORE.Dom.removeClass(a1,'selected');
            var service = document.page.getService('TASK');
            service.execute('changedFilters');
		});

		a3.addEventListener('click', function(){
			CUORE.Dom.addClass(a3,'selected');
			CUORE.Dom.removeClass(a2,'selected');
			CUORE.Dom.removeClass(a1,'selected');
            var service = document.page.getService('TASK');
            service.execute('changedFilters');
		});





	}
});
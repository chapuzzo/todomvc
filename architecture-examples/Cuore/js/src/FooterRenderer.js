FooterRenderer = CUORE.Class(CUORE.Renderer, {

	init: function() {
		FooterRenderer.parent.init.call(this);
	},

	updateWhenDrawn: function(component) {
		var service = document.page.getService('TASK');
		this.cleanHTML();

		if (!component.IsThereSomethingToShow()) {
			this.panel.style.display = 'none';
			return;
		}
		this.panel.style.display = 'block';
		this.renderTODOCount(component);
		var filterList = this.createFilterList();
		this.renderAllFilter(filterList);
		this.renderActiveFilter(filterList);
		this.renderCompletedFilter(filterList);
		this.renderClearButton(component, filterList);
	},

	cleanHTML: function() {
		this.panel.innerHTML = "";
	},

	renderTODOCount: function(component) {
		var span = CUORE.Dom.createElement('span', {
			'id': 'todo-count'
		}, this.panel);
		var strong = CUORE.Dom.createElement('strong', {}, span);
		var itemsLeft = component.activeTODONumber();
		strong.innerHTML = itemsLeft;
		itemsText = "items";
		if (itemsLeft == 1) {
			itemsText = "item"
		};
		span.innerHTML += ' ' + itemsText + ' left';
	},

	createFilterList: function(component){
		var filterList=CUORE.Dom.createElement('ul', {
			'id': 'filters'
		}, this.panel);

		return filterList;
	},

	renderAllFilter: function(filterList){
		var liAll = CUORE.Dom.createElement('li', {}, filterList);
		var hrefAll = CUORE.Dom.createElement('a', {
			'href': '#/'
		}, liAll);
		hrefAll.innerHTML = "All";
		if (document.page.getFilter() === '') CUORE.Dom.addClass(hrefAll, 'selected');

		hrefAll.addEventListener('click', function() {
			CUORE.Dom.addClass(hrefAll, 'selected');
			CUORE.Dom.removeClass(hrefActive, 'selected');
			CUORE.Dom.removeClass(hrefCompleted, 'selected');
		});
	},

	renderActiveFilter: function(filterList){
		var liActive = CUORE.Dom.createElement('li', {}, filterList);
		var hrefActive = CUORE.Dom.createElement('a', {
			'href': '#/active'
		}, liActive);
		hrefActive.innerHTML = "Active";
		if (document.page.getFilter() === 'active') CUORE.Dom.addClass(hrefActive, 'selected');

		hrefActive.addEventListener('click', function() {
			CUORE.Dom.addClass(hrefActive, 'selected');
			CUORE.Dom.removeClass(hrefCompleted, 'selected');
			CUORE.Dom.removeClass(hrefAll, 'selected');
		});
	},

	renderCompletedFilter: function(filterList){
		var liCompleted = CUORE.Dom.createElement('li', {}, filterList);
		var hrefCompleted = CUORE.Dom.createElement('a', {
			'href': '#/completed'
		}, liCompleted);
		hrefCompleted.innerHTML = "Completed";
		if (document.page.getFilter() === 'completed') CUORE.Dom.addClass(hrefCompleted, 'selected');

		hrefCompleted.addEventListener('click', function() {
			CUORE.Dom.addClass(hrefCompleted, 'selected');
			CUORE.Dom.removeClass(hrefActive, 'selected');
			CUORE.Dom.removeClass(hrefAll, 'selected');
		});
	},

	renderClearButton: function(component,filterList){
		var button = CUORE.Dom.createElement('button', {
			'id': 'clear-completed'
		}, this.panel);
		button.innerHTML = "Clear Completed (" + component.completedTODONumber() + ")";
		if (component.completedTODONumber() == 0) button.style.display = 'none';

		button.addEventListener('click', function() {
			service.execute('deleteCompletedTasks');
		});
	}
});
FooterRenderer = CUORE.Class(CUORE.Renderer, {


	init: function() {
		FooterRenderer.parent.init.call(this);
	},
	
	filters : {
		all : {href : "", title : "All"},
		active : {href : "active", title : "Active" },
		completed : {href : "completed", title : "Completed"}
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
		for (var filterItem in this.filters){
			this.renderFilter(filterList, this.filters[filterItem]);
		}

		this.renderClearButton(component);
	},

	cleanHTML: function() {
		this.panel.innerHTML = "";
	},

	pluralize : function(text, number) {
		if (number == 1) return text;
		return (text + "s");
	},

	renderTODOCount: function(component) {
		var span = CUORE.Dom.createElement('span', {
			'id': 'todo-count'
		}, this.panel);
		var strong = CUORE.Dom.createElement('strong', {}, span);
		var itemsLeft = component.activeTODONumber();
		strong.innerHTML = itemsLeft;
		span.innerHTML += ' ' + this.pluralize("item", itemsLeft) + ' left';
	},

	createFilterList: function(component){
		var filterList = CUORE.Dom.createElement('ul', {
			'id': 'filters'
		}, this.panel);

		return filterList;
	},

	renderFilter: function(filterList, filterName){
		var aFilterLi = CUORE.Dom.createElement('li', {}, filterList);
		var aFilterHref = CUORE.Dom.createElement('a', {
			'href': "#/" + filterName.href
		}, aFilterLi);
		aFilterHref.innerHTML = filterName.title;
		if (document.page.getFilter() === filterName.href) 
			CUORE.Dom.addClass(aFilterHref, 'selected');
	},

	renderClearButton: function(component){
		var button = CUORE.Dom.createElement('button', {
			'id': 'clear-completed'
		}, this.panel);
		button.innerHTML = "Clear Completed (" + component.completedTODONumber() + ")";
		if (component.completedTODONumber() == 0) {
			button.style.display = 'none';
			return;
		}
		button.addEventListener('click', function() {
			CUORE.Bus.emit('deleteCompleted');
		});
	}
});
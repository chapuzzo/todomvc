TL.Renderers.Footer = CUORE.Class(CUORE.Renderer, {

	init: function() {
		TL.Renderers.Footer.parent.init.call(this);
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
		
		var filtersElement = this.createFilterList();
		for (var i in TL.filters){
			this.renderFilter(filtersElement, TL.filters[i]);
		}

		this.renderClearButton(component);
	},

	cleanHTML: function() {
		this.panel.innerHTML = "";
	},

	_pluralize : function(text, number) {
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
		span.innerHTML += ' ' + this._pluralize("item", itemsLeft) + ' left';
	},

	createFilterList: function(component){
		var filtersElement = CUORE.Dom.createElement('ul', {
			'id': 'filters'
		}, this.panel);

		return filtersElement;
	},

	renderFilter: function(filtersElement, filterItem){
		console.log("fi");
			console.log(filterItem);
		var aFilterLi = CUORE.Dom.createElement('li', {}, filtersElement);
		var aFilterHref = CUORE.Dom.createElement('a', {
			'href': "#/" + filterItem.href
		}, aFilterLi);
		aFilterHref.innerHTML = filterItem.title;
		if (TL.getFilter().href === filterItem.href) 
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
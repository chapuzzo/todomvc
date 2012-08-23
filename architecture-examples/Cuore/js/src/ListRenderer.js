ListRenderer = CUORE.Class(CUORE.Renderers.List, {
	init : function(){
		ListRenderer.parent.init.call(this);
	},

	updateWhenDrawn: function(component) {
		this.panel.innerHTML="";
        for (var i = 0, len = component.size(); i < len; i++) {
            this._addItem(component.item(i), i);
        }
    },

    _addItem: function(todo) {
        var item = CUORE.Dom.createElement('li', null, this.panel);

        var div = CUORE.Dom.createElement('div', {}, item);
        CUORE.Dom.addClass(div,"view");

        var checkbox = CUORE.Dom.createElement('input', {'type' : 'checkbox', 'checked':false}, div);
        CUORE.Dom.addClass(checkbox,"toggle");
        
        var label = CUORE.Dom.createElement('label', {}, div);
        label.innerHTML = todo;

        var button = CUORE.Dom.createElement('button', {}, div);	
        CUORE.Dom.addClass(button,"destroy");

		var input = CUORE.Dom.createElement('input', {'value': todo}, item);
        CUORE.Dom.addClass(input,"edit");
    }

});
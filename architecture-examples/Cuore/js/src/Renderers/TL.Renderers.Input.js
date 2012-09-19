TL.Renderers.Input = CUORE.Class(CUORE.Renderer, {

	paint: function(component){
		TL.Renderers.Input.parent.paint.call(this,component);
		this._addEventListeners(component);
	},
	
	sendInputValue: function(component){
		component.sendTodoText(this.panel.value.trim());
		this._clearPanel();
	},

	_clearPanel: function(){
		this.panel.value = "";	
	},

	_addEventListeners: function(component){
		var self = this;
		this.panel.addEventListener('blur', function() {
				self.sendInputValue(component);
        });

	    this.panel.addEventListener('keydown', function(event) {
	    	var KEY_ENTER = 13;
        	if (event.keyCode == KEY_ENTER){
        		this.blur();
        	}			
        });
	}
});
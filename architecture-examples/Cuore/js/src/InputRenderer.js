InputRenderer = CUORE.Class(CUORE.Renderer, {

	paint: function(component){
		InputRenderer.parent.paint.call(this,component);
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
	},

	/*updateWhenDrawn: function(component) {
		this.panel.value = component.getValue();
	},

	getValue: function(){
		return this.panel.value;
	},*/
	
	sendInputValue: function(component){
		component.sendTodoText(this.panel.value.trim());
		this.panel.value = "";	
	}
});
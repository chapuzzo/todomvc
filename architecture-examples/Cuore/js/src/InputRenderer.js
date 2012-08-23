InputRenderer = CUORE.Class(CUORE.Renderer, {
	paint: function(component){
		InputRenderer.parent.paint.call(this,component);
		var self = this;
		this.panel.addEventListener('blur', function() {
				self.sendInputValue(component);
        });

	    this.panel.addEventListener('keydown', function(event) {
        	if (event.keyCode == 13){
        		console.log("enter pressed!");
        		this.blur();
        	}			
        });
	},
	updateWhenDrawn: function(component) {
		this.panel.value = component.getValue();
	},
	getValue: function(){
		return this.panel.value;
	},
	sendInputValue: function(component){
		component.sendTodoText(this.panel.value);
		this.panel.value = "";	
	}
});
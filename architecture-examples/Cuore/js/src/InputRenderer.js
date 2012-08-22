InputRenderer = CUORE.Class(CUORE.Renderer, {
	paint: function(component){
		InputRenderer.parent.paint.call(this,component);
		this.panel.addEventListener('blur', function() {
			component.sendTodoText(this.value);			
        });

        this.panel.addEventListener('keydown', function(event) {
        	if (event.keyCode == 13){
        		console.log("enter pressed!");
        		component.sendTodoText(this.value);				
        	}			
        });
	},

	clear: function(){
		this.panel.value = "";
	}
});
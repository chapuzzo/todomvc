InputRenderer = CUORE.Class(CUORE.Renderer, {
	paint: function(component){
		InputRenderer.parent.paint.call(this,component);
		this.panel.addEventListener('blur', function() {
			component.sendTodoText(this.value);
			this.clear();
        });
	},

	clear: function(){
		this.panel.value = "";

	}
});
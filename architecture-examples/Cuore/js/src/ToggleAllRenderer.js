ToggleAllRenderer = CUORE.Class(CUORE.Renderer, {

	paint: function(component){
		InputRenderer.parent.paint.call(this,component);
		

	    this.panel.addEventListener('change', function() {
            var service = document.page.getService('TASK');
            service.execute('toggleAllTasks', this.checked);
        });

        this.panel.checked = false;
	},

	updateWhenDrawn: function(component) {
		this.panel.checked = component.getValue();
	},

	getValue: function(){
		return this.panel.checked;
	}
});


ToggleAllHandler = CUORE.Class(CUORE.Handler, {

	init: function() {
		ListHandler.parent.init.call(this);
	},

	handle: function(params) {
		/*console.log("tah handle");
		console.log(params);*/
		var filter = document.page.getFilter();
		console.log(filter);
		/*console.log(document.page.getFilter());*/
		if (filter === 'completed') this.owner.renderer.panel.checked = true;
		/*else 
		if (filter === '') {
			var guarda = true;
			for (var i in params){
				if (i.completed != true ) {
					guarda = false;
					break;
				}
			}
			this.owner.renderer.panel.checked = guarda;
		}
		else
		if (filter === 'active') this.owner.renderer.panel.checked = false;*/

		this.owner.updateRender();
	}
});

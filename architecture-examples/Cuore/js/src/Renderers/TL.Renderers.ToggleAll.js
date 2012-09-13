TL.Renderers.ToggleAll = CUORE.Class(CUORE.Renderer, {

	paint: function(component){
		TL.Renderers.ToggleAll.parent.paint.call(this,component);
		
	    this.panel.addEventListener('change', function() {
            var service = document.page.getService('TASK');
            service.execute('toggleAllTasks', this.checked);
        });

        this.panel.checked = false;
	},

	updateWhenDrawn: function(component) {
		var service = document.page.getService('TASK');
		var todoList = service._getTodos();

		if (todoList.length == 0) return this.panel.parentNode.style.display = 'none';		

		this.panel.parentNode.style.display = 'block';
		this.panel.checked = (service.completed() > 0 && service.active() == 0);
	}

});
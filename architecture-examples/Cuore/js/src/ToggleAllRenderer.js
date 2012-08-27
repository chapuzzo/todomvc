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
		var filter = document.page.getFilter();
		var service = document.page.getService('TASK');
		var todoList = service._getTodos();
		if (todoList.length == 0) return this.panel.style.display = 'none';
		else this.panel.style.display = 'block';
		switch (filter){
			case 'completed':
				if (service.completed() > 0)
				this.panel.checked = true;
				break;
			case 'active' : 
				if (service.completed() > 0)
				this.panel.checked = true;
			default: {
				var guarda = true;
				if (todoList.length == 0) guarda = false;
				else
				for (var i=0; i<todoList.length; i++){
						console.log(todoList[i]);
					if (todoList[i].completed !== true ) {
						guarda = false;
						break;
					}
				}
				this.panel.checked = guarda;
			}
		}
	},

	getValue: function(){
		return this.panel.checked;
	}
});
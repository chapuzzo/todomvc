ToggleAllRenderer = CUORE.Class(CUORE.Renderer, {

	paint: function(component){
		InputRenderer.parent.paint.call(this,component);
		
	    this.panel.addEventListener('change', function() {
            var service = document.page.getService('TASK');
            service.execute('toggleAllTasks', this.checked);
        });

        this.panel.checked = false;
	},


	//Some kind of Black-magic.-which-needs-toBe-rewritten done
	updateWhenDrawn: function(component) {
		var filter = document.page.getFilter();
		var service = document.page.getService('TASK');
		var todoList = service._getTodos();

		if (todoList.length == 0) 
			return this.panel.style.display = 'none';
		else
			this.panel.style.display = 'block';

		if (service.completed() > 0 && service.active() == 0)
			this.panel.checked = true;
		else 
			this.panel.checked = false;
	}/*,

	getValue: function(){
		return this.panel.checked;
	}*/
});
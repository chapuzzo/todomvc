TL.Components.Input = CUORE.Class(CUORE.Components.Input, {

	init: function() {
		TL.Components.Input.parent.init.call(this);
        this.setRenderer(new TL.Renderers.Input());
    },

	sendTodoText: function(todoText) {
		var service = document.page.getService('TASK');
		service.execute('newTask', todoText);
	}
});

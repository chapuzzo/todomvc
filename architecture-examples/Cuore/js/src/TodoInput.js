TodoInput = CUORE.Class(CUORE.Components.Input, {

	init: function() {
		TodoInput.parent.init.call(this);
        this.setRenderer(new InputRenderer());
    },

	sendTodoText: function(todoText) {
		var service = document.page.getService('TASK');
		service.execute('newTask', todoText);
	}
});

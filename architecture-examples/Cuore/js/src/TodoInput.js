TodoInput = CUORE.Class(CUORE.Components.Input, {

	init: function() {
		TodoInput.parent.init.call(this);
        this.setRenderer(new InputRenderer());
    },

	sendTodoText: function(todoText) {
		CUORE.Bus.emit('NEWTASK', todoText);
	}
});

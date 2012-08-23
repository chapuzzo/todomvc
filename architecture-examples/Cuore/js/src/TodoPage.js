TodoPage = CUORE.Class(CUORE.Page, {

    initializeComponents: function(){
    	CUORE.Bus.enableDebug();
        var aTodo = new TodoInput();
        this.addComponent(aTodo,'new-todo',CUORE.Behaviours.HIJACK);
        aTodo.addHandler('TASK_newTask_EXECUTED', new AdditionHandler());
    },

	initializeServices: function(){
        this.addService(new TodoTasksService());
    }
});
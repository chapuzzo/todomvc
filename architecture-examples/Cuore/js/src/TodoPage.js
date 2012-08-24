TodoPage = CUORE.Class(CUORE.Page, {

    setUp: function() {
    	TodoPage.parent.setUp.call(this);
    	//just for testing final version shoud not have this
        localStorage.removeItem("todos-Cuore");
    },

    initializeComponents: function(){
    	CUORE.Bus.enableDebug();
        var aTodo = new TodoInput();
        this.addComponent(aTodo,'new-todo', CUORE.Behaviours.HIJACK);
        var aTodoList = new TodoList();
        this.addComponent(aTodoList, 'todo-list', CUORE.Behaviours.HIJACK);
        aTodoList.addHandler('TASK_newTask_EXECUTED', new ListHandler());
        aTodoList.addHandler('TASK_editTask_EXECUTED', new ListHandler());
        aTodoList.addHandler('TASK_toggleTask_EXECUTED', new ListHandler());
        aTodoList.addHandler('TASK_deleteTask_EXECUTED', new ListHandler());
    },

	initializeServices: function(){
        this.addService(new TodoTasksService());
    }
});
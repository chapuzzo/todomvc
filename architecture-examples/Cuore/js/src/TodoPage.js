TodoPage = CUORE.Class(CUORE.Page, {

    setUp: function() {
    	TodoPage.parent.setUp.call(this);
    	//just for testing final version shoud not have this
        //localStorage.removeItem("todos-Cuore");
    },

    initializeComponents: function(){
    	CUORE.Bus.enableDebug();
        var aTodo = new TodoInput();
        this.addComponent(aTodo,'new-todo', CUORE.Behaviours.HIJACK);
        var aTodoList = new TodoList();
        this.addComponent(aTodoList, 'todo-list', CUORE.Behaviours.HIJACK);

        var aFooter = new TodoFooter();
        this.addComponent(aFooter, 'footer', CUORE.Behaviours.HIJACK);

        var aHandler = new ListHandler();
        aTodoList.addHandler('TASK_newTask_EXECUTED', aHandler);
        aTodoList.addHandler('TASK_editTask_EXECUTED', aHandler);
        aTodoList.addHandler('TASK_toggleTask_EXECUTED', aHandler);
        aTodoList.addHandler('TASK_deleteTask_EXECUTED', aHandler);
        aTodoList.addHandler('TASK_deleteCompletedTasks_EXECUTED', aHandler);


    },

	initializeServices: function(){
        this.addService(new TodoTasksService());
    }
});




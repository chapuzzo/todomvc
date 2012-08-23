TodoPage = CUORE.Class(CUORE.Page, {


    setUp: function() {
    	TodoPage.parent.setUp.call(this);
    	localStorage.removeItem("todos-Cuore");
    },

    initializeComponents: function(){
    	CUORE.Bus.enableDebug();
        var aTodo = new TodoInput();
        this.addComponent(aTodo,'new-todo',CUORE.Behaviours.HIJACK);
        var aTodoList = new TodoList();
        this.addComponent(aTodoList, 'todo-list',CUORE.Behaviours.HIJACK);
        aTodoList.addHandler('TASK_newTask_EXECUTED', new ListHandler());
    },

	initializeServices: function(){
        this.addService(new TodoTasksService());
    }
});
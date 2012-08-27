TodoPage = CUORE.Class(CUORE.Page, {

    setUp: function() {
    	TodoPage.parent.setUp.call(this);

        var self = this;
        window.addEventListener('hashchange', function(){
            var aFilter = window.location.hash.replace(/#\//, '');
            self.setFilter(aFilter);
            console.log("onHashChange");
            CUORE.Bus.emit('changedFilter', undefined);
        });

        window.addEventListener('load', function(){
            var aFilter = window.location.hash.replace(/#\//, '');
            self.setFilter(aFilter);
            console.log("onLoad");
            CUORE.Bus.emit('changedFilter', undefined);
        });

        var service = this.getService('TASK');
        service.execute('updateTasksCounters', undefined);
    },

    setFilter : function(filter){
        this.filter = filter ;
    },

    getFilter : function(){
        return (this.filter || '');
    },

    initializeComponents: function(){
    	CUORE.Bus.enableDebug();

        var aTodo = new TodoInput();
        this.addComponent(aTodo,'new-todo', CUORE.Behaviours.HIJACK);

        var aToggleAllButton = new CUORE.Components.Input();
        aToggleAllButton.setRenderer(new ToggleAllRenderer());
        this.addComponent(aToggleAllButton, 'toggle-all', CUORE.Behaviours.HIJACK);
        
        var aTodoList = new TodoList();
        this.addComponent(aTodoList, 'todo-list', CUORE.Behaviours.HIJACK);

        var aFooter = new TodoFooter();
        this.addComponent(aFooter, 'footer', CUORE.Behaviours.HIJACK);

        var aListHandler = new ListHandler();
        aTodoList.addHandler('TASK_newTask_EXECUTED', aListHandler);
        aTodoList.addHandler('TASK_editTask_EXECUTED', aListHandler);
        aTodoList.addHandler('TASK_toggleTask_EXECUTED', aListHandler);
        aTodoList.addHandler('TASK_deleteTask_EXECUTED', aListHandler);
        aTodoList.addHandler('TASK_deleteCompletedTasks_EXECUTED', aListHandler);
        aTodoList.addHandler('TASK_toggleAllTasks_EXECUTED', aListHandler);
        aTodoList.addHandler('TASK_updateTasksCounters_EXECUTED', aListHandler);
        aTodoList.addExecHandler('changedFilter', 'updateRender');  

        
        aToggleAllButton.addExecHandler('TASK_newTask_EXECUTED', 'updateRender');
        aToggleAllButton.addExecHandler('TASK_editTask_EXECUTED', 'updateRender');
        aToggleAllButton.addExecHandler('TASK_toggleTask_EXECUTED', 'updateRender');
        aToggleAllButton.addExecHandler('TASK_deleteTask_EXECUTED', 'updateRender');
        aToggleAllButton.addExecHandler('TASK_deleteCompletedTasks_EXECUTED', 'updateRender');
        aToggleAllButton.addExecHandler('TASK_toggleAllTasks_EXECUTED', 'updateRender');
        aToggleAllButton.addExecHandler('TASK_updateTasksCounters_EXECUTED', 'updateRender');        
        aToggleAllButton.addExecHandler('changedFilter', 'updateRender'); 


        var aFooterHandler = new FooterHandler();
        aFooter.addHandler('TASK_newTask_EXECUTED', aFooterHandler);
        aFooter.addHandler('TASK_editTask_EXECUTED', aFooterHandler);
        aFooter.addHandler('TASK_toggleTask_EXECUTED', aFooterHandler);
        aFooter.addHandler('TASK_deleteTask_EXECUTED', aFooterHandler);
        aFooter.addHandler('TASK_deleteCompletedTasks_EXECUTED', aFooterHandler);
        aFooter.addHandler('TASK_toggleAllTasks_EXECUTED', aFooterHandler);
        aFooter.addHandler('TASK_updateTasksCounters_EXECUTED', aFooterHandler);
        aFooter.addExecHandler('changedFilter', 'updateRender');
    },

	initializeServices: function(){
        this.addService(new TodoTasksService());
    }
});




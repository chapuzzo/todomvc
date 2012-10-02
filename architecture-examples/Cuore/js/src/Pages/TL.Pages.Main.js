TL.Pages.Main = CUORE.Class(CUORE.Page, {

    setUp: function() {
    	TL.Pages.Main.parent.setUp.call(this);

        window.addEventListener('hashchange', function(){
            var aFilter = window.location.hash.replace(/#\//, '');
            TL.filterBy(aFilter);
            CUORE.Bus.emit('changedFilter', aFilter);
        });

        window.addEventListener('load', function(){
            var aFilter = window.location.hash.replace(/#\//, '');
            TL.filterBy(aFilter);
            CUORE.Bus.emit('changedFilter', aFilter);
        });

        var service = this.getService('TASK');
        service.execute('updateTasksCounters', undefined);
    },

    initializeComponents: function(){
    	CUORE.Bus.enableDebug();

        var aTodo = new TL.Components.Input();
        this.addComponent(aTodo,'new-todo', CUORE.Behaviours.HIJACK);

        var aToggleAllButton = new CUORE.Components.Input();
        aToggleAllButton.setRenderer(new TL.Renderers.ToggleAll());
        this.addComponent(aToggleAllButton, 'toggle-all', CUORE.Behaviours.HIJACK);
        aToggleAllButton.addExecHandler('TASK_updateTasksCounters_EXECUTED', 'updateRender'); 
        aToggleAllButton.addExecHandler('changedFilter', 'updateRender'); 


        var aTodoList = new TL.Components.List();
        this.addComponent(aTodoList, 'todo-list', CUORE.Behaviours.HIJACK);
        aTodoList.addExecHandler('TASK_updateTasksCounters_EXECUTED', 'fillList');
 
        var aFooter = new TL.Components.Footer();
        this.addComponent(aFooter, 'footer', CUORE.Behaviours.HIJACK);
        aFooter.addExecHandler('TASK_updateTasksCounters_EXECUTED', 'updateRender');
    },

	initializeServices: function(){
        this.addService(new TL.Services.Tasks());
    }
});




TL.Components.List = CUORE.Class(CUORE.Components.List, {

	init: function() {
        TL.Components.List.parent.init.call(this);
        this.setRenderer(new TL.Renderers.List());
    },

    deleteCompleted: function() {
        var service = document.page.getService('TASK');
        service.execute('deleteCompletedTasks');
    },

    changedFilter: function() {
        var service = document.page.getService('TASK');
        service.execute('updateTasksCounters', undefined);
    }
});	


TodoTasksService = CUORE.Class(CUORE.Service, {
	init: function() {
        TodoTasksService.parent.init.call(this);
        this.name = 'TASK';
    },

    newTask: function(params){
    	//var eventName = this.getEventNameForExecution('newTask');
    },
});


AdditionHandler = CUORE.Class(CUORE.Handler, {
	handle: function(message){
		window.alert(message);
	}
});
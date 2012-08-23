TodoTasksService = CUORE.Class(CUORE.Service, {
	init: function() {
        TodoTasksService.parent.init.call(this);
        this.name = 'TASK';
    },

    newTask: function(params){
    	console.log(params);
    	window.alert(params);
    },
});


AdditionHandler = CUORE.Class(CUORE.Handler, {
	handle: function(message){
		window.alert(message);
	}
});
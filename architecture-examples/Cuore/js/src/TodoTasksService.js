TodoTasksService = CUORE.Class(CUORE.Service, {
	init: function() {
        TodoTasksService.parent.init.call(this);
        this.name = 'TASK';
    },

    newTask: function(params){
        var eventname = this.getEventNameForExecution('newTask');
    	if (params.length > 0) {       
            var todos = localStorage["todos-Cuore"];
            todos && (todos = JSON.parse(todos));
            todos || (todos = []);
            todos.push(params);
            localStorage["todos-Cuore"] = JSON.stringify(todos);
            this.emit(eventname, todos);
        }
        
    },
 
    wrapResponse: function(response){
        return response;
    },
});
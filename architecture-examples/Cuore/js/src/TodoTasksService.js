TodoTasksService = CUORE.Class(CUORE.Service, {

	init: function() {
        TodoTasksService.parent.init.call(this);
        this.name = 'TASK';
    },

    getUID: function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    },

    newTask: function(task){
        var eventname = this.getEventNameForExecution('newTask');
    	if (task.length > 0) {       
            var todos = localStorage["todos-Cuore"];
            todos && (todos = JSON.parse(todos));
            todos || (todos = []);
            todos.push({'id':this.getUID(), 'title':task, 'completed':false});
            localStorage["todos-Cuore"] = JSON.stringify(todos);
            this.emit(eventname, todos);
        }        
    },

    deleteTask: function(params){
        var eventname = this.getEventNameForExecution('editTask');
        var todos = localStorage["todos-Cuore"];
        todos && (todos = JSON.parse(todos));
        todos || (todos = []);

        for (var i=0; i<todos.length; i++)
            if (todos[i].id === params.id) {
                todos.splice(i,1);
                break;
            }

        localStorage["todos-Cuore"] = JSON.stringify(todos);
        this.emit(eventname, todos);
    },

    editTask: function(params){
        var eventname = this.getEventNameForExecution('editTask');
        var todos = localStorage["todos-Cuore"];
        todos && (todos = JSON.parse(todos));
        todos || (todos = []);

        if (params.text.length >0)
            for (var i=0; i<todos.length; i++){
                if (todos[i].id === params.id) todos[i].title = params.text;
            }
        else
            for (var i=0; i<todos.length; i++)
                if (todos[i].id === params.id) {
                    todos.splice(i,1);
                    break;
                }

        localStorage["todos-Cuore"] = JSON.stringify(todos);
        this.emit(eventname, todos);
    },

    toggleTask: function(params){
        var eventname = this.getEventNameForExecution('toggleTask');
        var todos = localStorage["todos-Cuore"];
        todos && (todos = JSON.parse(todos));
        todos || (todos = []);
        for (var i=0; i<todos.length; i++){
            if (todos[i].id === params.id) todos[i].completed = params.value;
        }
        localStorage["todos-Cuore"] = JSON.stringify(todos);
        this.emit(eventname, todos);
    },
 
    wrapResponse: function(response){
        return response;
    }
});
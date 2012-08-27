TodoTasksService = CUORE.Class(CUORE.Service, {

	init: function() {
        TodoTasksService.parent.init.call(this);
        this.name = 'TASK';
    },

    _getUID: function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    },

    _getTodos: function() {
        var todos = (localStorage["todos-Cuore"] || '[]');
        //todos && (
            todos = JSON.parse(todos);
        //    );
        //todos || (todos = []);
        return todos;
    },

    _saveTodos: function(todolist) {
        localStorage["todos-Cuore"] = JSON.stringify(todolist);
    },

    newTask: function(task){
        var eventname = this.getEventNameForExecution('newTask');
    	if (task.length > 0) {       
            var todos = this._getTodos();
            todos.push({'id':this._getUID(), 'title':task, 'completed':false});
            this._saveTodos(todos);
            this.emit(eventname, todos);
        }        
    },

    deleteTask: function(params){
        var eventname = this.getEventNameForExecution('deleteTask');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++)
            if (todos[i].id === params.id) {
                todos.splice(i,1);
                break;
            }
        this._saveTodos(todos);
        this.emit(eventname, todos);
    },

    editTask: function(params){
        var eventname = this.getEventNameForExecution('editTask');
        var todos = this._getTodos();
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

        this._saveTodos(todos);
        this.emit(eventname, todos);
    },

    toggleTask: function(params){
        var eventname = this.getEventNameForExecution('toggleTask');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++){
            if (todos[i].id === params.id) todos[i].completed = params.value;
        }
        this._saveTodos(todos);
        this.emit(eventname, todos);
    },

    deleteCompletedTasks: function(params){
        console.log("helloo!!");
        var eventname = this.getEventNameForExecution('deleteCompletedTasks');
        var todos = this._getTodos();
        var newtodolist = [];
        for (var i=0; i<todos.length; i++){
            if (todos[i].completed === false) newtodolist.push(todos[i]);
        }
        this._saveTodos(newtodolist);
        this.emit(eventname, newtodolist);
        console.log("bye!!");
    },

    changedFilters: function(params){
        
    },
 
    wrapResponse: function(response){
        return response;
    }
});
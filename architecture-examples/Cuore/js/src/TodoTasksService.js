TodoTasksService = CUORE.Class(CUORE.Service, {

	init: function() {
        TodoTasksService.parent.init.call(this);
        this.name = 'TASK';

        this.activeTasks = 0;
        this.completedTasks = 0; 
    },

    active : function(){
        return this.activeTasks;
    },

    completed : function(){
        return this.completedTasks;
    },

    _getUID: function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    },

    _getTodos: function() {
        var todos = (localStorage["todos-Cuore"] || '[]');
        todos = JSON.parse(todos);
        return todos;
    },

    _saveTodos: function(todos) {
        localStorage["todos-Cuore"] = JSON.stringify(todos);
    },

    newTask: function(task){
        var eventname = this.getEventNameForExecution('newTask');
    	if (task.length > 0) {       
            var todos = this._getTodos();
            todos.push({'id':this._getUID(), 'title':task, 'completed':false});
            this._saveTodos(todos);
            this.updateTasksCounters();
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
        this.updateTasksCounters();
        this.emit(eventname, todos);
    },

    editTask: function(params){
        if (params.text.length == 0) return this.deleteTask(params);
        var eventname = this.getEventNameForExecution('editTask');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++){
            if (todos[i].id === params.id) todos[i].title = params.text;
        }
        this._saveTodos(todos);
        this.updateTasksCounters();
        this.emit(eventname, todos);
    },

    toggleTask: function(params){
        var eventname = this.getEventNameForExecution('toggleTask');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++){
            if (todos[i].id === params.id) todos[i].completed = params.value;
        }
        this._saveTodos(todos);
        this.updateTasksCounters();
        this.emit(eventname, todos);
    },

    toggleAllTasks: function(newValue){
        var eventname = this.getEventNameForExecution('toggleAllTasks');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++){
            todos[i].completed = newValue;
        }
        this._saveTodos(todos);
        this.updateTasksCounters();
        this.emit(eventname, todos);
    },

    deleteCompletedTasks: function(params){
        var eventname = this.getEventNameForExecution('deleteCompletedTasks');
        var todos = this._getTodos();
        var newtodolist = [];
        for (var i=0; i<todos.length; i++){
            if (todos[i].completed === false) newtodolist.push(todos[i]);
        }
        this._saveTodos(newtodolist);
        this.updateTasksCounters();
        this.emit(eventname, newtodolist);
    },

    updateTasksCounters: function(){
        var eventname = this.getEventNameForExecution('updateTasksCounters');
        var todos = this._getTodos();
        this.activeTasks = 0;
        this.completedTasks = 0;

        for (var i=0; i<todos.length; i++){
            if (todos[i].completed)
                this.completedTasks++;
            else
                this.activeTasks++;
        }
        this.emit(eventname, todos);
    },
 
    wrapResponse: function(response){
        return response;
    }
});
TL.Services.Tasks = CUORE.Class(CUORE.Service, {

	init: function() {
        TL.Services.Tasks.parent.init.call(this);
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

    _notCompleted: function(todo){
        return ! todo.completed;
    },

    newTask: function(task){
        var eventname = this.getEventNameForExecution('newTask');
    	if (task.length > 0) {       
            var todos = this._getTodos();
            todos.push({'id':this._getUID(), 'title':task, 'completed':false});
            this.publishResults(eventname, todos);
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
        this.publishResults(eventname, todos);
    },

    editTask: function(params){
        if (params.text.length == 0) return this.deleteTask(params);
        var eventname = this.getEventNameForExecution('editTask');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++){
            if (todos[i].id === params.id) todos[i].title = params.text;
        }
        this.publishResults(eventname, todos);
    },

    toggleTask: function(params){
        var eventname = this.getEventNameForExecution('toggleTask');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++){
            if (todos[i].id === params.id) todos[i].completed = params.value;
        }
        this.publishResults(eventname, todos);
    },

    toggleAllTasks: function(newValue){
        var eventname = this.getEventNameForExecution('toggleAllTasks');
        var todos = this._getTodos();
        for (var i=0; i<todos.length; i++){
            todos[i].completed = newValue;
        }
        this.publishResults(eventname, todos);
    },

    deleteCompletedTasks: function(){
        var eventname = this.getEventNameForExecution('deleteCompletedTasks');
        var todos = this._getTodos();
        var newtodolist = [];
        for (var i=0; i<todos.length; i++){
            var theTodo=todos[i];
            if (this._notCompleted(theTodo)) newtodolist.push (theTodo);
        }
        this.publishResults(eventname, newtodolist);
    },

    updateTasksCounters: function(){
        var eventname = this.getEventNameForExecution('updateTasksCounters');
        var todos = this._getTodos();
        this.activeTasks = 0;
        this.completedTasks = 0;

        for (var i=0; i<todos.length; i++){
            if (todos[i].completed)
                this.completedTasks++;
        }
        this.activeTasks = todos.length - this.completedTasks;
        this.emit(eventname, todos);
    },

    publishResults: function(eventName, todoList) {
        this._saveTodos(todoList);
        this.updateTasksCounters();
        //this.emit(eventName, todoList);
    },
 
    wrapResponse: function(response){
        return response;
    }
});
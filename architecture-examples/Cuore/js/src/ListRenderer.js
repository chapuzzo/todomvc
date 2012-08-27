ListRenderer = CUORE.Class(CUORE.Renderers.List, {
    
	init : function(){
		ListRenderer.parent.init.call(this);        
        
	},

    updateWhenDrawn : function(component) {
		this.panel.innerHTML="";
        for (var i = 0, len = component.size(); i < len; i++) {
            this._addItem(component.item(i), i);
        }
    },

    _addItem : function(todo) {

        var aFilter = document.page.getFilter();
        if ( aFilter == '' || 
        ( aFilter == 'active' && todo.completed == false)  ||
        ( aFilter == 'completed' && todo.completed == true) ){

                var item = CUORE.Dom.createElement('li', {'id':todo.id}, this.panel);
                if (todo.completed)
                    CUORE.Dom.addClass(item,"completed");

                var div = CUORE.Dom.createElement('div', {}, item);
                CUORE.Dom.addClass(div,"view");

                var checkedValue = todo.completed || undefined;
                var checkbox = CUORE.Dom.createElement('input', {'type' : 'checkbox', 'checked': checkedValue }, div);
                CUORE.Dom.addClass(checkbox,"toggle");
                
                var label = CUORE.Dom.createElement('label', {}, div);
                label.innerHTML = todo.title;

                var button = CUORE.Dom.createElement('button', {}, div);	
                CUORE.Dom.addClass(button,"destroy");

        		var input = CUORE.Dom.createElement('input', {'taskId':todo.id}, item);
                input.value = todo.title;
                CUORE.Dom.addClass(input,"edit");

                var li = item;
                label.addEventListener('dblclick', function (){
                    CUORE.Dom.addClass(li,"editing");
                    input.focus();
                });

                checkbox.addEventListener('change', function() {
                    var params = {};
                    params.id = this.parentNode.parentNode.id;
                    params.value = this.checked;
                    var service = document.page.getService('TASK');
                    service.execute('toggleTask', params);
                });

                input.addEventListener('blur', function(){
                    var params = {};
                    params.id = todo.id;
                    params.text = input.value;
                    var service = document.page.getService('TASK');
                    service.execute('editTask', params);            
                });

                input.addEventListener('keydown', function(event) {
                    var KEY_ENTER = 13;
                    if (event.keyCode == KEY_ENTER){
                       this.blur();
                    }           
                });

                button.addEventListener('click', function(){
                    var params = {};
                    params.id = todo.id;
                    var service = document.page.getService('TASK');
                    service.execute('deleteTask', params);   
                });
        };
    }
});
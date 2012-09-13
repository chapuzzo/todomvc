TL.Renderers.List = CUORE.Class(CUORE.Renderers.List, {
    
	init : function(){
		TL.Renderers.List.parent.init.call(this);

	},

    updateWhenDrawn : function(component) {
		this.panel.innerHTML="";
        for (var i = 0, len = component.size(); i < len; i++) {
            this._addItem(component.item(i));
        }
    },

    _addItem : function(todo) {

        var aFilter = TL.getFilter();
        if ( aFilter == TL.filters.all || 
        ( aFilter == TL.filters.active && !todo.completed)  ||
        ( aFilter == TL.filters.completed && todo.completed) ){

            var anItem = CUORE.Dom.createElement('li', {'id':todo.id}, this.panel);
            if (todo.completed)
                CUORE.Dom.addClass(anItem,"completed");

            var aDiv = CUORE.Dom.createElement('div', {}, anItem);
            CUORE.Dom.addClass(aDiv,"view");

            var checkedValue = todo.completed || undefined;
            var aCheckbox = CUORE.Dom.createElement('input', {'type' : 'checkbox', 'checked': checkedValue }, aDiv);
            CUORE.Dom.addClass(aCheckbox,"toggle");
            
            var aLabel = CUORE.Dom.createElement('label', {}, aDiv);
            aLabel.innerHTML = todo.title;

            var aButton = CUORE.Dom.createElement('button', {}, aDiv);	
            CUORE.Dom.addClass(aButton,"destroy");

    		var anInput = CUORE.Dom.createElement('input', {'taskId':todo.id}, anItem);
            anInput.value = todo.title;
            CUORE.Dom.addClass(anInput,"edit");

            aLabel.addEventListener('dblclick', function (){
                CUORE.Dom.addClass(anItem,"editing");
                anInput.focus();
            });

            aCheckbox.addEventListener('change', function() {
                var params = {};
                params.id = todo.id;
                params.value = this.checked;
                var service = document.page.getService('TASK');
                service.execute('toggleTask', params);
            });

            anInput.addEventListener('blur', function(){
                var params = {};
                params.id = todo.id;
                params.text = anInput.value;
                var service = document.page.getService('TASK');
                service.execute('editTask', params);            
            });

            anInput.addEventListener('keydown', function(event) {
                var KEY_ENTER = 13;
                if (event.keyCode == KEY_ENTER){
                   this.blur();
                }           
            });

            aButton.addEventListener('click', function(){
                var params = {};
                params.id = todo.id;
                var service = document.page.getService('TASK');
                service.execute('deleteTask', params);   
            });
        };
    }
});
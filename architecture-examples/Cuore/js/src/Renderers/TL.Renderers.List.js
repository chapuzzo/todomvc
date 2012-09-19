TL.Renderers.List = CUORE.Class(CUORE.Renderers.List, {
    
	init : function(){
		TL.Renderers.List.parent.init.call(this);
	},

    _addItem : function(todo) {
        var aFilter = TL.getFilter();
        if ( aFilter == TL.filters.all || 
        ( aFilter == TL.filters.active && !todo.completed)  ||
        ( aFilter == TL.filters.completed && todo.completed) ){
            var theItem = CUORE.Dom.createElement('li', {'id':todo.id}, this.panel);
            this._addClass(todo, theItem);
            this._renderItem(todo, theItem);
        };
    },

    _addClass: function(todo, anItem){
        if (todo.completed)
            CUORE.Dom.addClass(anItem,"completed");
    },

    _renderItem: function(todo, anItem){
        this._addDiv(anItem);
        this._addInput(todo, anItem)
        this._addCheckbox(todo, anItem);
        this._addLabel(todo, anItem);
        this._addDestroyButton(todo, anItem);
    },

    _addDiv: function(anItem){
        var aDiv = CUORE.Dom.createElement('div', {}, anItem);
        CUORE.Dom.addClass(aDiv,"view");
    },

    _addInput: function(todo, anItem){
        var anInput = CUORE.Dom.createElement('input', {'taskId':todo.id}, anItem);
        anInput.value = todo.title;
        CUORE.Dom.addClass(anInput,"edit");
        anInput.addEventListener('keydown', function(event) {
            var KEY_ENTER = 13;
            if (event.keyCode == KEY_ENTER){
               this.blur();
            }           
        });
        anInput.addEventListener('blur', function(){
            var params = {};
            params.id = todo.id;
            params.text = this.value;
            var service = document.page.getService('TASK');
            service.execute('editTask', params);            
        });
    },

    _addCheckbox : function(todo, anItem){
        var aDiv = anItem.firstChild;
        var checkedValue = todo.completed || undefined;
        var aCheckbox = CUORE.Dom.createElement('input', {'type' : 'checkbox', 'checked': checkedValue }, aDiv);
        CUORE.Dom.addClass(aCheckbox,"toggle");
        aCheckbox.addEventListener('change', function() {
            var params = {};
            params.id = todo.id;
            params.value = this.checked;
            var service = document.page.getService('TASK');
            service.execute('toggleTask', params);
        });
    },

    _addLabel: function(todo, anItem){
            var aDiv = anItem.firstChild;
            var anInput = aDiv.nextSibling;
            var aLabel = CUORE.Dom.createElement('label', {}, aDiv);
            aLabel.innerHTML = todo.title;
            aLabel.addEventListener('dblclick', function (){
                CUORE.Dom.addClass(anItem,"editing");
                anInput.focus();
            });
    },

    _addDestroyButton: function(todo, anItem){
        var aDiv = anItem.firstChild;
        var aButton = CUORE.Dom.createElement('button', {}, aDiv);  
        CUORE.Dom.addClass(aButton,"destroy");
        aButton.addEventListener('click', function(){
            var params = {};
            params.id = todo.id;
            var service = document.page.getService('TASK');
            service.execute('deleteTask', params);   
        });
    }
    
});

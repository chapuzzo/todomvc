TodoPage = CUORE.Class(CUORE.Page, {

    initializeComponents: function(){
    	CUORE.Bus.enableDebug();
        var aTodo = new TodoInput();
        this.addComponent(aTodo,'new-todo',CUORE.Behaviours.HIJACK);
    }
});
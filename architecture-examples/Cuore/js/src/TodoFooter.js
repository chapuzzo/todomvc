TodoFooter = CUORE.Class(CUORE.Component, {

	init: function() {
		TodoFooter.parent.init.call(this);
        this.setRenderer(new FooterRenderer());        
    },

    IsThereSomethingToShow : function(){
    	var service= this.services.getService('TASK');
    	var somethingToShow = service.active() || service.completed();
		return somethingToShow;
    },
    
    activeTODONumber : function()
    {
    	return this.services.getService('TASK').active();
    },

    completedTODONumber : function()
    {
        return this.services.getService('TASK').completed();
    }

});
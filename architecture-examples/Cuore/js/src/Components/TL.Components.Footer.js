TL.Components.Footer = CUORE.Class(CUORE.Component, {

	init: function() {
		TL.Components.Footer.parent.init.call(this);
        this.setRenderer(new TL.Renderers.Footer());        

        this.addExecHandler('changedFilter', 'updateRender');
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
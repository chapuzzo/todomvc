TodoFooter = CUORE.Class(CUORE.Component, {

	init: function() {
		TodoFooter.parent.init.call(this);
        this.setRenderer(new FooterRenderer());
    }   
});


FooterHandler = CUORE.Class(CUORE.Handler, {

	init: function() {
		FooterHandler.parent.init.call(this);
	},

	handle: function(params) {
		this.owner.updateRender();
	}
});
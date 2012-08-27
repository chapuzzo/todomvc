TodoFooter = CUORE.Class(CUORE.Component, {

	init: function() {
		TodoFooter.parent.init.call(this);
        this.setRenderer(new FooterRenderer());
    }

});


FooterHandler = CUORE.Class(CUORE.HANDLER, {

	init: function() {
		FooterHandler.parent.init.call(this);
	},

	handle: function(list) {
		this.owner.fillList(list);
	}
});
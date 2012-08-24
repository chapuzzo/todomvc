TodoFooter = CUORE.Class(CUORE.Component, {

	init: function() {
		TodoFooter.parent.init.call(this);
        this.setRenderer(new FooterRenderer());
        //this.draw();
    }

});
TL.Components.Item = CUORE.Class(CUORE.Component, {
	
	init: function(){
		TL.Components.Item.parent.init.call(this);
		this.setRenderer(new TL.Renderers.Item());	
	}
});
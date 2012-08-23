TodoItem = CUORE.Class(CUORE.Component, {
	init: function(){
		TodoItem.parent.init.call(this);
		this.setRenderer(new ItemRenderer());	
	}

});
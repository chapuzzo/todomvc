TodoList = CUORE.Class(CUORE.Components.List, {

	init: function() {
        TodoList.parent.init.call(this);
        this.setRenderer(new ListRenderer());
    },
    aaa: 5,


});	

ListHandler = CUORE.Class(CUORE.Handler, {

	init: function() {
		ListHandler.parent.init.call(this);
	},

	handle: function(list) {
		this.owner.fillList(list);
	}
});
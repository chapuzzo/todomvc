TL.Handlers.List = CUORE.Class(CUORE.Handler, {

	init: function() {
		TL.Handlers.List.parent.init.call(this);
	},

	handle: function(list) {
		this.owner.fillList(list);
	}
});
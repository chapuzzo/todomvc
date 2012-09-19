var TL = TL || {};

TL.VERSION = '0.1';

TL.Pages = TL.Pages || {};
TL.Components = TL.Components || {};
TL.Handlers = TL.Handlers || {};
TL.Services = TL.Services || {};
TL.Renderers = TL.Renderers || {};
TL.Decorations = TL.Decorations || {};


TL.filters = {
	all: "",
	active: "active",
	completed: "completed"
};

TL.currentFilter = TL.filters.all;

TL.getFilter = function(){
	return TL.currentFilter;
}

TL.setFilter = function(newFilter){
	TL.currentFilter = newFilter;
}
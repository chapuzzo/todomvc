var TL = TL || {};

TL.VERSION = '0.1';

TL.Pages = TL.Pages || {};
TL.Components = TL.Components || {};
TL.Handlers = TL.Handlers || {};
TL.Services = TL.Services || {};
TL.Renderers = TL.Renderers || {};
TL.Decorations = TL.Decorations || {};


TL.filters = TL.filters || {
		all : {href : "", title : "All"},
		active : {href : "active", title : "Active" },
		completed : {href : "completed", title : "Completed"}
	};

TL.currentFilter = TL.filters.all;

TL.getFilter = function(){
	return TL.currentFilter;
}

TL.filterBy = function(newFilter){
	newFilter = newFilter || "all";
	TL.currentFilter = TL.filters[newFilter];
}
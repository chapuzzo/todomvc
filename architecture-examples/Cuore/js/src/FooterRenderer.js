FooterRenderer = CUORE.Class(CUORE.Renderer, {

	init : function(){
		FooterRenderer.parent.init.call(this);
	},

	updateWhenDrawn: function(component) {
		this.panel.innerHTML="";

		var span = CUORE.Dom.createElement('span', {'id':'todo-count'}, this.panel);
		var strong = CUORE.Dom.createElement('strong', {}, span);
		strong.innerHTML = 'X';
		span.innerHTML += ' items left';

		var ul = CUORE.Dom.createElement('ul', {'id':'filters'}, this.panel);

		var li1 = CUORE.Dom.createElement('li', {}, ul);
		var a1 = CUORE.Dom.createElement('a', {'href':'#/All'}, li1);
		a1.innerHTML = "All";
		CUORE.Dom.addClass(a1,'selected');

		var li2 = CUORE.Dom.createElement('li', {}, ul);
		var a2 = CUORE.Dom.createElement('a', {'href':'#/active'}, li2);
		a2.innerHTML = "active";


		var li3 = CUORE.Dom.createElement('li', {}, ul);
		var a3 = CUORE.Dom.createElement('a', {'href':'#/completed'}, li3);
		a3.innerHTML = "completed";

		var button = CUORE.Dom.createElement('botton', {'id':'clear-completed'}, this.panel);
		button.innerHTML="Clear Completed (x)"

	}
});
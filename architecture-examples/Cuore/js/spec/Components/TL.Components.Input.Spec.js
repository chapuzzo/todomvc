describe("Input", function() {

    beforeEach(function() {
        this.addMatchers({
           toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
        });
    });

    it("extends Input", function() {
        var input = new TL.Components.Input();
        expect(input).toBeInstanceOf(CUORE.Components.Input);
    });
    
    it("sends a message", function() {
		var anInput = new TL.Components.Input();
		var txt = "thisIsANewToDo";

        anInput.sendTodoText = jasmine.createSpy('sendTodoText');
		anInput.sendTodoText(txt);
        expect(anInput.sendTodoText).toHaveBeenCalledWith(txt);
		
	});

    it("has a renderer associated", function() {
        var aInput = new TL.Components.Input();
        expect(aInput.renderer).toBeInstanceOf(TL.Renderers.Input);
    });    
    
});
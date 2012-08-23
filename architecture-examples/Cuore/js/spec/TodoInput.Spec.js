describe("Input", function() {

    beforeEach(function() {
            this.addMatchers({
               toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
            });
    });

    it("extends Input", function() {
        var input = new TodoInput();
        expect(input).toBeInstanceOf(CUORE.Components.Input);
    });
    
    it("sends a message", function() {
		var anInput = new TodoInput();
		var txt = "132456";

        anInput.sendTodoText = jasmine.createSpy('sendTodoText');
		anInput.sendTodoText(txt);
        expect(anInput.sendTodoText).toHaveBeenCalledWith(txt);
		
	});

    it("has a renderer associated", function() {
        var aInput = new TodoInput();
        expect(aInput.renderer).toBeInstanceOf(InputRenderer);
    });    
    
});
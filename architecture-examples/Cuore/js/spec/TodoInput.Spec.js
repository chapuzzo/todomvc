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
		CUORE.Bus.emit = jasmine.createSpy('emit');
		
		var anInput = new TodoInput();
		var txt = "132456";
		anInput.sendTodoText(txt);
		
		expect(CUORE.Bus.emit).toHaveBeenCalledWith('NEWTASK' ,txt);
	});

    it("has a renderer associated", function() {
        var aInput = new TodoInput();
        expect(aInput.renderer).toBeInstanceOf(InputRenderer);
    });    
    
});
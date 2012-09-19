describe("TL.Renderers.Input", function() {

    beforeEach(function() {
        this.addMatchers({
           toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
        });
    });

    it("extends Cuore.Renderers.Input", function() {
    	var aRenderer = new TL.Renderers.Input();
    	expect(aRenderer).toBeInstanceOf(TL.Renderers.Input);
    });

    it("trims sent text", function() {
    	var notTrimmedText = "   text not trimmed   ";

    	var component = {};
    	component.sendTodoText = jasmine.createSpy('sendTodoText');

    	var aRenderer = new TL.Renderers.Input();
    	aRenderer.panel = {};
    	aRenderer.panel.value = notTrimmedText;

    	aRenderer.sendInputValue(component);

    	expect(component.sendTodoText).toHaveBeenCalledWith(notTrimmedText.trim());
    });
    
});
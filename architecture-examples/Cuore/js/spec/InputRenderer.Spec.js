describe("InputRendered", function() {

    beforeEach(function() {
            this.addMatchers({
               toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
            });
    });

    it("extends Cuore.Renderers.Input", function() {
    	var aRenderer = new InputRenderer();
    	expect(aRenderer).toBeInstanceOf(InputRenderer);
    });

});
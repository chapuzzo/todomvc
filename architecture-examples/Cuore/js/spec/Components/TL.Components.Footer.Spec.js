describe("Footer", function() {

    beforeEach(function() {
        this.addMatchers({
           toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
        });
    });

    it("has a renderer associated", function() {
        var aTodoFooter = new TL.Components.Footer();
        expect(aTodoFooter.renderer).toBeInstanceOf(TL.Renderers.Footer);
    });    
    
});
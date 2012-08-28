describe("Footer", function() {

    beforeEach(function() {
        this.addMatchers({
           toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
        });
    });

    it("has a renderer associated", function() {
        var aTodoFooter = new TodoFooter();
        expect(aTodoFooter.renderer).toBeInstanceOf(FooterRenderer);
    });    
    
});
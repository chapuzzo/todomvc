describe("ItemRenderer",function(){

	beforeEach(function() {
        this.addMatchers({
           toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
        });
    });

	it("inherits from renderer", function(){
		var anItemRenderer = new TL.Renderers.Item();
		expect(anItemRenderer).toBeInstanceOf(CUORE.Renderer);
	});
	
});
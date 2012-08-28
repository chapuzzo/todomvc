describe("ItemRenderer",function(){

	beforeEach(function() {
        this.addMatchers({
           toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
        });
    });

	it("inherits from renderer", function(){
		var anItemRenderer = new ItemRenderer();
		expect(anItemRenderer).toBeInstanceOf(CUORE.Renderer);
	});
	
});
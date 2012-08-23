describe("Page", function() {

	var aPage;
    beforeEach(function() {
            this.addMatchers({
               toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
            });
            aPage = new TodoPage("http://www.anydomain.com");
            
    });

    it("extends page", function() {
        expect(aPage).toBeInstanceOf(TodoPage);
    });
    
    it("contains an input", function() {
		aPage.addComponent = jasmine.createSpy('addComponent');
		aPage.initializeComponents();
		
		var arguments = aPage.addComponent.argsForCall[0];
        expect(arguments[0]).toBeInstanceOf(CUORE.Components.Input);
		expect(arguments[1]).toEqual("new-todo");
	});

    it("contains a TodoList", function() {
        aPage.addComponent = jasmine.createSpy('addComponent');
        aPage.initializeComponents();
        
        var arguments = aPage.addComponent.argsForCall[1];
        expect(arguments[0]).toBeInstanceOf(CUORE.Components.List);
        expect(arguments[1]).toEqual("todo-list");

    });

});
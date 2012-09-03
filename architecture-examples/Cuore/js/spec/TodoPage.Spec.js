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

    it("contains an ToggleAllButton", function() {
        aPage.addComponent = jasmine.createSpy('addComponent');
        aPage.initializeComponents();
        
        var arguments = aPage.addComponent.argsForCall[1];
        expect(arguments[0]).toBeInstanceOf(CUORE.Components.Input);
        expect(arguments[1]).toEqual("toggle-all");
    });

    it("contains a TodoList", function() {
        aPage.addComponent = jasmine.createSpy('addComponent');
        aPage.initializeComponents();
        
        var arguments = aPage.addComponent.argsForCall[2];
        expect(arguments[0]).toBeInstanceOf(CUORE.Components.List);
        expect(arguments[1]).toEqual("todo-list");
    });

    
    it("contains a footer", function() {
        aPage.addComponent = jasmine.createSpy('addComponent');
        aPage.initializeComponents();
        
        var arguments = aPage.addComponent.argsForCall[3];
        expect(arguments[0]).toBeInstanceOf(TodoFooter);
        expect(arguments[1]).toEqual("footer");
    });    

    it("has a TodoTasksService", function(){
        var aTodoTasksService = new TodoTasksService();

        expect(aPage.getService(aTodoTasksService.getName())).toBeInstanceOf(TodoTasksService);
    });

    it("correctly sets and gets filters", function(){
        var aFilter = "allAroundTheWorld"
        aPage.setFilter(aFilter);
        expect(aPage.getFilter()).toBe(aFilter);
    });

    /*
    it("updates tasksCounters on setUp", function(){

        aPage.addService = jasmine.createSpy('addService');
        aPage.initializeServices();

        expect(aPage.addService).toHaveBeenCalledWith()

    });*/

});
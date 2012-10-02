describe("TL.Pages.Main", function() {

	var aPage;
    beforeEach(function() {
        this.addMatchers({
           toBeInstanceOf: CUORE.Matchers.toBeInstanceOf
        });
        aPage = new TL.Pages.Main("http://www.anydomain.com");
            
    });

    it("extends page", function() {
        expect(aPage).toBeInstanceOf(TL.Pages.Main);
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
        expect(arguments[0]).toBeInstanceOf(TL.Components.Footer);
        expect(arguments[1]).toEqual("footer");
    });    

    it("has a TodoTasksService", function(){
        var aTodoTasksService = new TL.Services.Tasks();

        expect(aPage.getService(aTodoTasksService.getName())).toBeInstanceOf(TL.Services.Tasks);
    });

    
    /*
    it("updates tasksCounters on setUp", function(){

        aPage.addService = jasmine.createSpy('addService');
        aPage.initializeServices();

        expect(aPage.addService).toHaveBeenCalledWith()

    });*/

});
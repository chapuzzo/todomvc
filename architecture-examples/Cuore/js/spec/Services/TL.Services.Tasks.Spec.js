describe("TL.Services.Tasks", function(){
	
	it("is named TASK", function(){
		var taskService = new TL.Services.Tasks();
		expect(taskService.name).toBe("TASK");
	});
	
});
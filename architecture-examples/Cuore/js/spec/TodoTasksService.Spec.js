describe("TodoTasksService", function(){
	
	it("is named TASK", function(){
		var taskService = new TodoTasksService();
		expect(taskService.name).toBe("TASK");
	});
	
});
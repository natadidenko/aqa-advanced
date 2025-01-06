class TodoService {
    async fetchTodo() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    }
  }
  
  class UserService {
    async fetchUser() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    }
  }
  
  class RequestHandler {
    constructor(todoService, userService) {
      this.todoService = todoService;
      this.userService = userService;
    }
  
    async fetchAll() {
      try {
        const [todo, user] = await Promise.all([
          this.todoService.fetchTodo(),
          this.userService.fetchUser(),
        ]);
        console.log("Promise.all results:");
        console.log("Todo:", todo);
        console.log("User:", user);
      } catch (error) {
        console.error("Error in Promise.all:", error);
      }
    }
  
    async fetchRace() {
      try {
        const result = await Promise.race([
          this.todoService.fetchTodo(),
          this.userService.fetchUser(),
        ]);
        console.log("Promise.race result:", result);
      } catch (error) {
        console.error("Error in Promise.race:", error);
      }
    }
  }
  
const todoService = new TodoService();
const userService = new UserService();
const requestHandler = new RequestHandler(todoService, userService);
  
requestHandler.fetchAll();
requestHandler.fetchRace();
async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  }
  
  async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  }
  
  async function handleRequests() {
    try {
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log("Promise.all results:");
      console.log("Todo:", todo);
      console.log("User:", user);
  
      const fastestResult = await Promise.race([fetchTodo(), fetchUser()]);
      console.log("Promise.race result:", fastestResult);
    } catch (error) {
      console.error("Error during requests:", error);
    }
  }
  
handleRequests();
  
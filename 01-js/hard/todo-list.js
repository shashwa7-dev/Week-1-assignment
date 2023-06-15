/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(todoID) {
    this.todos = this.todos.filter((todo) => todo.id !== todoID);
  }
  update(todoID, todoBody) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === todoID) {
        return todoBody;
      }
      return todo;
    });
  }
  getTodo(todoID) {
    let todo = this.todos.filter((todo) => todo.id === todoID)[0];
    if (todo) return todo;
    return "no todo found!";
  }
  getAll() {
    return this.todos;
  }
  clear() {
    this.todos = [];
  }
}

module.exports = { Todo };

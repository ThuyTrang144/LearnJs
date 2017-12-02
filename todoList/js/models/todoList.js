var TodoList = function() {
  this.todos = [];
  // delete
  // add
  // filter
  // clearCompleted
  // toggleAllTodos
  // renderTodos
}

TodoList.prototype.deleteTodo = function(id) {
  var indexDeleteTodo = '';
  this.todos.find(function(todo, index) {
     indexDeleteTodo = index
    return todo.id === id
  });
  this.todos.splice(indexDeleteTodo, 1)
}

TodoList.prototype.addTodo = function(todo) {
  this.todos.push(todo);
} 

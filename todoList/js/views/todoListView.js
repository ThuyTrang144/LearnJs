app.views.TodoListView = function() {
  // this.ENTER = 13;
  this.handleEvent('addTodo');
  this.handleEvent('editTodo', this.editTodo);
}

app.views.TodoListView.prototype.getDeleteTodo = function(self) {
  var id = self.attr('data-id'); // attribute
}

app.views.TodoListView.prototype.deleteTodo = function(id) {
  var todoList = getTodoList()
  todoList.deleteTodo(id);

}

app.views.TodoListView.prototype.addTodo = function(newTodo) {
  app.todoList.addTodo(newTodo);
  var labelTodo = '<li class="view" data-id=' + newTodo.id + '>' + 
                    '<input type="checkbox" class="tonggle">' + 
                    '<label class="text-todo">' + newTodo.text + '</label>' +
                    '<input class="todo-editing" value=' + newTodo.text + '>' +
                    '<button class="delete-todo">x</button>' +   
                  '</li> ';
  $('.todo-list').prepend(labelTodo);
  $('.todo-editing').hide();
  $('.delete-todo').show();
  $('.new-todo').val('');
}

app.views.TodoListView.prototype.editTodo = function(currentTodo) {
  var index = null;
  console.log('this.todoList', todoList);
  app.todoList.todos.find(function(todo, i) {
       index = i;
       return todo.id === currentTodo.id;
  });
  app.todoList.todos[index] === currentTodo;
  console.log(todoList);
}

app.views.TodoListView.prototype.handleEvent = function(event, handler) {
  var self = this;
  switch (event) {
    case 'addTodo':
      $('.header').on('keypress', '.new-todo', function(e) {
        if(e.keyCode === app.constant.ENTER) {
          var newTodo = new app.models.Todo($('.new-todo').val());
          self.addTodo(newTodo);  
        }
      })      
      break;
  
    default:
      break;
  }
}

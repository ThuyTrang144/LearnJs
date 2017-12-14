app.views.TodoView = function() {
  var self = this;
 //self.handleEvent('duplicateTodo').self(duplicate)
  // this.editTodo = this.handleEvent('editTodo')
  self.handleEvent('editTodo', self.editTodo)
}

app.views.TodoView.prototype.getCurrentTodo = function(self) {
  // get value from input
  var text = self.children('.text-todo').html();
  var id = self.data('id') ;
  var currentTodo = new app.models.Todo(text, id);
  return currentTodo;
}

app.views.TodoView.prototype.renderTodo = function() {

}

app.views.TodoView.prototype.editTodo= function(self, currentTodo) {
  console.log('self ',self);
  console.log('THIS ',this)
  self.children('.text-todo').hide();
  self.children('.check-todo').hide();
  self.children('.delete-todo').show();
  self.children('.todo-editing').show();
  var currentTodo = app.todoView.getCurrentTodo(self);
  self.children('.todo-editing').val(currentTodo.text);
}

app.views.TodoView.prototype.finishEdit = function(self, id) {
  console.log('self ', self);
  console.log('prev ', self.prev('.text-todo'))
  self.prev('.text-todo').html(self.val()).show();
  self.prev('.check-todo').show();
  self.hide();
 return new app.models.Todo(self.val(), id);
}

app.views.TodoView.prototype.handleEvent = function(event, handler) {
  var self = this;
  switch (event) {
    case 'editTodo':
      var currentTodo = '';
      $('.todo-list').on('dblclick', '.view', function(e) {
          currentTodo = self.getCurrentTodo($(this));
          handler($(this), currentTodo);
      });
      $('.todo-list').on('focusout', '.todo-editing', function(e) {
          var todo = new app.todoView.finishEdit($(this), currentTodo.id);
          app.todoList.addTodo(todo);
          $('.new-todo').val($('.new-todo').val()).focus();
      })
      $('.todo-list').on('keypress', '.todo-editing', function(e) {
        if(e.keyCode === app.constant.ENTER) {
          e.target.blur();
          $('.new-todo').val($('.new-todo').val()).focus();
        }
      });
      break;
      case '':
      $();
    default:
  }
}





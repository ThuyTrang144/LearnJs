var TodoView = function() {
  var self = this;
  self.handleEvent('duplicateTodo').self(duplicate)
  // this.editTodo = this.handleEvent('editTodo')
}

TodoView.prototype.getTodo = function(self) {
  // get value from input
  var text = self.html();
  var id  ;
  self.closet('li').data('id');
  var isCompleted = checked;
  var currentTodo = new TodoView(text, id);
  currentTodo.isCompleted = isCompleted;
  return currentTodo;

  return {id, text};
}

TodoView.prototype.renderTodo = function() {

}
TodoView.prototype.handleEvent = function(event, handler) {
  var self = this;
  switch (event) {
    case 'editTodo':
      $('.todoapp').on('dblclick', '.view', function(event) {
        if($('.view').dblclick()) {
          var text = self.getTodo();
          handler(text);
          self.editTodo(text);
          $('.todo-editing').show();
          $('.delete-todo').show();
          $('.todo-list').append(labelTodo);
         }
      })
      break;
    default:
  }
}

TodoView.prototype.editTodo= function(id, text) {
  var todo = getTodo(id)
  todo.editTodo(text);
}



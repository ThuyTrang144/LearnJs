var TodoListView = function() {
  this.todoList = new TodoList();
  this.ENTER = 13;
  this.handleEvent('addTodo');
  console.log('alo')
}

// TodoListView.prototype.renderTodos = function(todos) {
//   for(todos.length) {
//     // $(ele).append(todo[i])
//     $('.todo-list').append(
//       '<li data-id='+ todo[i].id +'>' +
//         '<input/>' +
//         '<lable>' + todo[i].text + '</label>'
//         '<button>' + 'x' + '</button>'
//       '</li>')
//   }
// }

TodoListView.prototype.getDeleteTodo = function(self) {
  var id = self.attr('data-id'); // attribute
}

TodoListView.prototype.deleteTodo = function(id) {
  var todoList = getTodoList()
  todoList.deleteTodo(id);

}

TodoListView.prototype.addTodo = function(newTodo) {
  this.todoList.addTodo(newTodo);
  var labelTodo = '<li class="view" data-id=' + newTodo.id + '>' + 
                    '<input type="checkbox" class="tonggle">' + 
                    '<label class="text-todo">' + newTodo.text + '</label>' +
                    '<button class="delete-todo">x</button>' +   
                    '<input class="todo-editing" value=' + newTodo.text + '>' +
                  '</li> ';
  $('.todo-list').prepend(labelTodo);
  $('.todo-editing').hide();
  $('.delete-todo').hide();
  $('.new-todo').val('');
}

TodoListView.prototype.handleEvent = function(event, handler) {
  var self = this;
  switch (event) {
    case 'addTodo':
      $('.header').on('keypress', '.new-todo', function(e) {
        if(e.keyCode === self.ENTER) {
          var newTodo = new Todo($('.new-todo').val());
          self.addTodo(newTodo);  
        }
      })      
      break;
  
    default:
      break;
  }
}
// $(document).ready(function () {
//   var todoList = new TodoList();
  
//     var newTodo;
//     var header= $('.header');
//     header.on('keypress', '.new-todo', function(e) {
//          if(e.keyCode == 13) {
//              newTodo = $('.new-todo').val();

//              todoList.push(newTodo);
//              console.log($('.new-todo').val());
//              x = x + '<div><input type="checkbox">' + newTodo + '</div>';
//              $('.display').html(x);
//              $('.new-todo').val("");
//          }
//     })




// })

// TodoListView.prototype.renderTodos = function(todos) {
//   for(todos.length) {
//      $(ele).append(todo[i])
//     $('.todo-list').append(
//       '<li data-id='+ todo[i].id +'>' + '<lable>' + todo[i].text + '</label>'
//         '<button>' + 'x' + '</button>'
//       '</li>')
//   }
// }
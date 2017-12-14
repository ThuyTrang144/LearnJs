// var Todo = function(text) {
//   this.id = new Date().valueOf();
//   this.text = text;
//   this.isCompleted = false;
// }

// Todo.prototype.editTodo = function (text) {
//   this.text = text;
// }

app.models.Todo = function(text) {
  this.is = new Date().valueOf()
  this.text = text;
  this.isCompleted = false;
}

app.models.Todo.prototype.editTodo = function(text) {
  this.text = text;
}


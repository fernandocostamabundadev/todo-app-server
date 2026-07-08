exports.getAllTodos = (req, res, next) =>{
  try {
    const todos = todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};
exports.createTodo = (req, res, next) =>{};
exports.updateTodo = (req, res, next) =>{};
exports.toggleTodo = (req, res, next) =>{};
exports.deleteTodos = (req, res, next) =>{};

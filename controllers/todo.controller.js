const todoService = require ('../services/todo.service')

exports.getAllTodos = (req, res, next) =>{
  try {
    const todos = todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};
exports.createTodo = (req, res, next) =>{
  try {
    const { title } = req.body;
    const todo = todoService.createTodo({ title });
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};
exports.updateTodo = (req, res, next) =>{
  try{
    const {id}= req.params;
    const {title} = req.body;
    const todo = todoService.updateTodo(Number(id), {title});
    res.json(todo);
  }catch(error){
    next(error)
  }
};
exports.toggleTodo = (req, res, next) =>{
  try{
    const {id} = req.params;
    const todo = todoServices.toggleTodo(Number(id));
    res.json(todo)
  }catch(error){
    next(error)
  }
};
exports.deleteTodos = (req, res, next) =>{
  try{
    const {id} = req.params;
    todoService.deleteTodo(Number(id));
    res.status(204).send();
  }catch(error){}
};

exports.getAllTodos = (req, res, next) => {
  try {
    const todos = todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

exports.createTodo = (req, res, next) => {
  try {
    const { title } = req.body;
    const todo = todoService.createTodo({ title });
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const todo = todoService.updateTodo(Number(id), { title });
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

exports.toggleTodo = (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = todoService.toggleTodo(Number(id));
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = (req, res, next) => {
  try {
    const { id } = req.params;
    todoService.deleteTodo(Number(id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

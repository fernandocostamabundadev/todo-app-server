let todos = [
  {
    id:1,
    title:'estudar node.js',
    completed: false,
  },
  {
    id:2,
    title:'estudar react.js',
    completed: false,
  },
  {
    id:4,
    title:'estudar angular.js',
    completed: true,
  }
]

const validateTitle = (title)=>{
  if(!title || typeof title !== 'string' || title.trim() === ''){
    const error = new error (' o titulo da tarefa e obrigatorio');
    error.status(400);
    throw erro;
  }
};

exports.getAllTods = () => todos;

exports.createdTodo = ({title})=>{
  validateTitle(title);

  const newTodo ={
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  todos.push(newTodo);
  return newTodo;
};

exports.updateTodo=(id, {title})=>{
  validateTitle(title);

  const todo = todos.find((item)=>item.id===id);
  if(!todo){
    const error = new error ('tarefa nao encotrada');
    error.status = 404;
    throw error;
  }

  todod.title = title.trim();
  return todo;
}

exports.toggleTodo = (id) => {
  const todo = todos.find((item) => item.id === id);
  if (!todo) {
    const error = new Error('Tarefa não encontrada');
    error.status = 404;
    throw error;
  }

  todo.completed = !todo.completed;
  return todo;
};

exports.deleteTodo = (id) => {
  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) {
    const error = new Error('Tarefa não encontrada');
    error.status = 404;
    throw error;
  }

  todos.splice(index, 1);
};

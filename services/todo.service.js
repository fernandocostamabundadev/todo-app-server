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
}

const express = require('express');
const app = express();
const port = 3000;

//Parse requests using json
app.use(express.json());

//Make a list to store the todos, could use files/databases in the future
let todos = [];
let id = 0;

//Router for viewing tasks. Return JSON data.
app.get('/todo', (req, res) => {
  res.json(todos);
});

//Router for adding tasks, add in a new Todo with properties id, task, and importance
app.post('/todos', (req, res) => {
  const newTodo = {
    id: id++,
    task: req.body.task,
    importance: req.body.importance || "normal"
  };
  todos.push(newTodo);
  //Return status code. Starting with 2=successful, 4=unsuccessful
  res.status(201).json(newTodo);
});

//Delete todos with speficied id
app.delete('/todos/:id', (req, res) => {

  //Parse id from the request
  const id = parseInt(req.params.id, 10);

  //Find the index of the todo
  const index = todos.findIndex(todo => todo, todos.id === id);

  if(index==-1){
    console.log(`Cannot find the todo with id: ${id}`);
    res.status(404).send();
  }

  else{
    //JS can't remove objects from a list directly.
    //Use list.filter() to make a new list and copy data that match the restrictions.
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
  }

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

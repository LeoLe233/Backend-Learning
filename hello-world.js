//Creating an express instance
const express = require('express');
const app = express();
//Listening on port number
const port = 1234;

//Root-router @localhost:1234
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Sub-router @localhost:1234/tasks
app.get('/tasks', (req, res) => {
    res.send('You dont have any tasks!');
  });

  app.get('/request-data', (req, res) => {
    
    res.send('You dont have any tasks!');
  });

//Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const app = express();
const port = 3000;

// Array to store request logs
let requestLogs = [];

// Middleware to log requests
app.use((req, res, next) => {
  const logEntry = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    query: req.query,
    body: req.body,
  };
  requestLogs.push(logEntry);
  next(); //Passes to next middleware or route handler
});

// Route handler to display logged requests
app.get('/request-data', (req, res) => {
  //Responds contents in requestLogs array in JSON
  res.send(`<pre>${JSON.stringify(requestLogs, null, 2)}</pre>`);
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
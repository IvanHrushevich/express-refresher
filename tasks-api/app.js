const express = require('express');

const tasks = require('./routes/tasks');

const app = express();
const port = 3000;

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

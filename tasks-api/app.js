const express = require('express');

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');

require('dotenv').config();

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

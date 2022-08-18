const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('getAllTasks');
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const getTask = (req, res) => {
  res.send('getTask');
};

const updateTask = (req, res) => {
  res.send('updateTask');
};

const deleteTask = (req, res) => {
  res.send('deleteTask');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

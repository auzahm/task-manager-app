const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample Tasks
let tasks = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Review AWS notes', completed: true }
];

// ✅ GET all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// ✅ POST create a new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// ✅ PUT update a task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) return res.status(404).json({ error: 'Task not found' });

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// ✅ DELETE a task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === parseInt(id));
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  const deletedTask = tasks.splice(index, 1);
  res.json(deletedTask[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

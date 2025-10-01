const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple Home Route
app.get('/', (req, res) => {
  res.send('Task Manager API is running...');
});

// Sample Tasks Route
app.get('/tasks', (req, res) => {
  const tasks = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Review AWS notes', completed: true }
  ];
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

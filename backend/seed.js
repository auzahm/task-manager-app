const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Task Schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);

// Sample tasks to insert
const sampleTasks = [
  { title: 'Learn Node.js' },
  { title: 'Finish MongoDB integration' },
  { title: 'Build React frontend' },
  { title: 'Deploy full-stack app to AWS' },
  { title: 'Add authentication' }
];

// Insert tasks
async function seedTasks() {
  try {
    await Task.deleteMany(); // Optional: clear existing tasks
    const result = await Task.insertMany(sampleTasks);
    console.log(`Inserted ${result.length} tasks`);
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
}

seedTasks();

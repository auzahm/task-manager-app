// frontend/api/tasks.js
import dbConnect from "./_db";
import Task from "../models/Tasks";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  }

  if (req.method === "POST") {
    const task = await Task.create(req.body);
    return res.status(201).json(task);
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(task);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    await Task.findByIdAndDelete(id);
    return res.status(204).end();
  }

  return res.status(405).end(); // Method Not Allowed
}

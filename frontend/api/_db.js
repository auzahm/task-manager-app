import mongoose from "mongoose";

let isConnected = false;

export default async function dbConnect() {
  if (isConnected) return;

  const conn = await mongoose.connect(process.env.MONGO_URI);
  isConnected = conn.connections[0].readyState;
}

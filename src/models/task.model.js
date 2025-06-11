import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

export { Task };

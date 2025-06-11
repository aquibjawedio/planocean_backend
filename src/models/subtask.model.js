import mongoose, { Schema } from "mongoose";

const subtaskSchema = new Schema({}, { timestamps: true });

const SubTask = mongoose.model("SubTask", subtaskSchema);

export { SubTask };

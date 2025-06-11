import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);

export { Note };

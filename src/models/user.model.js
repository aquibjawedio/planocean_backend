import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export { User };

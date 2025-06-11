import mongoose, { Schema } from "mongoose";

const projectmemberSchema = new Schema({}, { timestamps: true });

const ProjectMember = mongoose.model("ProjectMember", projectmemberSchema);

export { ProjectMember };

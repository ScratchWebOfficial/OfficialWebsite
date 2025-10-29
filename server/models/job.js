import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  department: String,
  experience: String,
  skills: String,
  date: String,
  description: String,
});

export default mongoose.model("Job", jobSchema);
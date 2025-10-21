import express from "express";
import Job from "/models/Job.js";

const router = express.Router();

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new job (optional – for admin usage)
// router.post("/", async (req, res) => {
//   const job = new Job(req.body);
//   try {
//     const newJob = await job.save();
//     res.status(201).json(newJob);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

export default router;
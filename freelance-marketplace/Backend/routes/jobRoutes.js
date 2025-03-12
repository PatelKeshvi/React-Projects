const express = require("express");
const Job = require("../models/job");
const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Create a job
router.post("/", async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.json({ message: "Job added successfully" });
});

module.exports = router;

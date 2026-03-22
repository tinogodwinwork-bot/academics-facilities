import express from "express";
import Facility from "../models/Facility.js";

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const data = await Facility.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const newItem = new Facility(req.body);
  await newItem.save();
  res.json(newItem);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Facility.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// PUT
router.put("/:id", async (req, res) => {
  const updated = await Facility.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

export default router;
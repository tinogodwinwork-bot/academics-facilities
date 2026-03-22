import express from "express";
import Academics from "../models/Academics.js";

const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  try {
    const data = await Academics.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST (CREATE)
router.post("/", async (req, res) => {
  try {
    const { title, description, image } = req.body;

    console.log("POST DATA:", req.body); // 👈 DEBUG

    const newItem = new Academics({
      title,
      description,
      image // 🔥 MUST be explicitly saved
    });

    await newItem.save();
    res.json(newItem);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT (UPDATE)
router.put("/:id", async (req, res) => {
  try {
    const { title, description, image } = req.body;

    console.log("UPDATE DATA:", req.body); // 👈 DEBUG

    const updated = await Academics.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        image // 🔥 MUST be included
      },
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Academics.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
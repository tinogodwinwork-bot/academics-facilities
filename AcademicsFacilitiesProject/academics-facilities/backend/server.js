import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import academicsRoutes from "./routes/academics.js";
import facilitiesRoutes from "./routes/facilities.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.use(cors());
app.use(express.json());

// ✅ ONLY THIS
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// upload API
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    imageUrl: `http://127.0.0.1:5000/uploads/${req.file.filename}`
  });
});

// routes
app.use("/api/academics", academicsRoutes);
app.use("/api/facilities", facilitiesRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
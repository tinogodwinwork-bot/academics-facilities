import mongoose from "mongoose";

const AcademicsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String // 🔥 THIS WAS MISSING
});

export default mongoose.model("Academics", AcademicsSchema);
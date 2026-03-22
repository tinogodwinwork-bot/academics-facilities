import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  image: String   // ✅ ADD THIS
});

export default mongoose.model("Facility", facilitySchema);
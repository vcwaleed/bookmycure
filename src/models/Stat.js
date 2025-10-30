
import mongoose from "mongoose";

const StatSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Stat || mongoose.model("Stat", StatSchema);

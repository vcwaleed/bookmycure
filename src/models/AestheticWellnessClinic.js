import mongoose from "mongoose";

const AestheticWellnessClinicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

export default mongoose.models.AestheticWellnessClinic || mongoose.model("AestheticWellnessClinic", AestheticWellnessClinicSchema);

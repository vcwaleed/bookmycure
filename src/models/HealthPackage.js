
import mongoose from "mongoose";

const HealthPackageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tests: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
  },
  discount: {
    type: String,
  },
  address: {
    type: String,
  },
});

export default mongoose.models.HealthPackage || mongoose.model("HealthPackage", HealthPackageSchema);

import mongoose from "mongoose";

const ConsultantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    whatsapp: { type: String, required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ConsultantSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
mongoose.models = {};

const Consultant = mongoose.model("Consultant", ConsultantSchema);
export default Consultant;

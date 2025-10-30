import mongoose from "mongoose";

const ConsultantSchema = new mongoose.Schema({
name: {
  type: String,
  required: true,
},
specialization: {
  type: String,
  required: true,
},
location: {
  type: String,
  required: true,
},
});

export default mongoose.models.Consultant || mongoose.model("Consultant", ConsultantSchema);

import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['admin', 'superadmin'],
    default: 'admin',
  },
  password: {
    type: String,
    required: true,
    select: true,
  },
});

delete mongoose.models.Admin;
export default mongoose.model("Admin", AdminSchema);


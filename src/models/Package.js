
import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfTests: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
  },
  discount: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  category: {
    type: String,
  },
  type: {
    type: String,
  },
});

export default mongoose.models.Package || mongoose.model('Package', PackageSchema);

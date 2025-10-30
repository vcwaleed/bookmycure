import mongoose from "mongoose";

const ReasonBannerStatSchema = new mongoose.Schema({
  happyCustomers: {
    type: String,
    required: true,
  },
  googleRating: {
    type: String,
    required: true,
  },
  testsBooked: {
    type: String,
    required: true,
  },
  cities: {
    type: String,
    required: true,
  },
});

export default mongoose.models.ReasonBannerStat || mongoose.model("ReasonBannerStat", ReasonBannerStatSchema);

import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    todayJobMessage: { type: String, required: true },
    tommorrowJobMessage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.models.Report || mongoose.model('Report', reportSchema);
export default Report;
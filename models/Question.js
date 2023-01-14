import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    question: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
export default Question;
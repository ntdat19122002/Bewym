import { redirect } from 'next/dist/server/api-utils';
import Question from '../../../models/Question';
import db from '../../../utils/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { user,question } = req.body;
  if (
    !question || !user
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();

  const newQuestion = new Question({
    user,
    question
  });

  const question_model = await newQuestion.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Created user!',
    _id: question_model._id,
    user: question_model.user,
    question: question_model.question,
    
  });
}

export default handler;
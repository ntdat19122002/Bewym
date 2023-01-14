import { redirect } from 'next/dist/server/api-utils';
import Report from '../../../models/Report';
import db from '../../../utils/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { todayJobMessage, tommorrowJobMessage } = req.body;
  if (
    !todayJobMessage || !tommorrowJobMessage
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();

  const newReport = new Report({
    todayJobMessage,tommorrowJobMessage
  });

  const report = await newReport.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Created user!',
    _id: report._id,
    todayJobMessage: report.todayJobMessage,
    tommorrowJobMessage: report.tommorrowJobMessage,
  });
}

export default handler;
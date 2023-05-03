// pages/api/contact.js

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const uri = process.env.MONGODB_URI; // replace with your MongoDB URI
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('test'); // replace with your database name
    const collection = db.collection('contacts'); // replace with your collection name
    const result = await collection.insertOne({ name, email, message });
    client.close();
    res.status(200).json({ message: 'تم حفظ الرسالة بنجاح' });
  } else {
    res.status(405).json({ message: 'لم يتم الإرسال لسبب ما' });
  }
}

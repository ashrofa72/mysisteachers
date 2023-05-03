import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

export default async function handler(req, res) {
  const client = new MongoClient(uri);

  if (req.method === 'DELETE') {
    const { id } = req.query;

    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('profile_registration');
      const result = await collection.deleteOne({ _id: id });

      if (result.deletedCount === 1) {
        res.status(204).end(); // Success, no content
      } else {
        res.status(404).json({ message: 'Document not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

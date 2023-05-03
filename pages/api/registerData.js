import { MongoClient } from 'mongodb';
async function handler(req, res) {
    // Connect to the database
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db(process.env.DB_NAME)
  
    // Get all documents from the collection
    const collection = db.collection('profile_registration')
    const documents = await collection.find().toArray()
  
    // Close the database connection
    client.close()
  
    // Return the documents as a JSON response
    res.status(200).json(documents)
  }
  
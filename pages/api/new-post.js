import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    });
    const db = client.db();
    const meetupCollection = db.collection("post");
    const result = await meetupCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "meetup inserted" });
  }
}

export default handler;

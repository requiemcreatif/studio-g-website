import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client.db(process.env.MONGO_DB);
}

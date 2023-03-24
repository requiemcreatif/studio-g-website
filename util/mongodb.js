import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB = process.env.MONGO_DB;

let cachedClient = null;

async function connectToMongoClient() {
  if (!cachedClient) {
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      cachedClient = client;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to connect to MongoDB");
    }
  }
  return cachedClient;
}

async function getDb() {
  const client = await connectToMongoClient();
  return client.db(MONGO_DB);
}

export async function connectToDatabase() {
  try {
    const db = await getDb();
    return db;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to connect to MongoDB database");
  }
}

import { connectToDatabase } from "../../util/mongodb";

// get users from database

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const users = await db.collection("users").find({}).toArray();
  res.status(200).json(users);
  //console.log(users);
}

// Path: pages/api/registeredUser.js

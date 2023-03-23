import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid request method" });
    return;
  }

  const {
    name,
    email,
    password,
    firstLastName,
    secondLastName,
    phone,
    dni,
    age,
    height,
    weight,
    address,
    zipCode,
    city,
  } = req.body;

  const db = await connectToDatabase();
  const result = await db.collection("users").insertOne({
    name,
    email,
    password,
    firstLastName,
    secondLastName,
    phone,
    dni,
    age,
    height,
    weight,
    address,
    zipCode,
    city,
  });

  res.status(201).json({ message: "User registered successfully" });
}

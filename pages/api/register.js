import { connectToDatabase } from "../../util/mongodb";

async function validateUser(user) {
  if (!user.name) {
    throw new Error("Name is required");
  }
  if (!user.email) {
    throw new Error("Email is required");
  }
  if (!user.phone) {
    throw new Error("Phone number is required");
  }
  // Add more validation checks here
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).json({ message: "Invalid request method" });
    return;
  }

  const {
    name,
    email,
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

import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("db connected"))
    .catch((err) => console.log("db connect error", err));
}

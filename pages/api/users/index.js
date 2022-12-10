import db from "../../../lib/mongodb";
export default async function handler(req, res) {
  await db.connect();
  res.status(200).json({ name: "Rahul Pradhan" });
}

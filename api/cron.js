import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await prisma.todo.deleteMany();
      console.log("Database cleanup successful.");
      res.status(200).json({ message: "Database cleanup successful" });
    } catch (error) {
      console.error("Error cleaning up database:", error);
      res.status(500).json({ error: "Error cleaning up database" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
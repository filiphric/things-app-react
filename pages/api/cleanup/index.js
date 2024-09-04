import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

  await prisma.todo.deleteMany();
  res.status(200).json({ message: "Database cleanup successful" });

}

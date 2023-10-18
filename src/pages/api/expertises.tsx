import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const expertises = await prisma.expertise.findMany();
      res.json(expertises);
    } catch (error) {
      console.error("Erreur lors de la récupération des expertises:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const paroleHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const paroles = await prisma.parole.findMany();
      res.json(paroles);
    } catch (error) {
      console.error("Erreur lors de la récupération des paroles:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};

export default paroleHandler;

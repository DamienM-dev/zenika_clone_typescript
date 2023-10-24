import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const cyberSecuriteHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === "GET") {
    try {
      const references = await prisma.cybersecurite.findMany();
      res.json(references);
    } catch (error) {
      console.error("Erreur lors de la récupération des cybersecurite:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};
export default cyberSecuriteHandler;

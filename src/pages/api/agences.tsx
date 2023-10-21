import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const agencesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const agences = await prisma.agence.findMany();
      res.json(agences);
    } catch (error) {
      console.error("Erreurs lors du chargement des agences", error);
      res.status(500).json({ error: "Une erreur est survenue" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};

export default agencesHandler;

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const connaissanceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === "GET") {
    try {
      const connaissance = await prisma.connaissance.findMany();
      res.json(connaissance);
    } catch (error) {
      console.error("Erreurs lors du chargement des connaissances", error);
      res.status(500).json({ error: "Une erreur est survenue" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};

export default connaissanceHandler;

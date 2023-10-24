import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const SecuriteProjetsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const SecuriteProjets = await prisma.securite.findMany();
      res.json(SecuriteProjets);
    } catch (error) {
      console.error("Erreur lors de la récupération des SecuriteProjets:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};
export default SecuriteProjetsHandler;

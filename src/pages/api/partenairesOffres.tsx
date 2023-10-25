import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const partenairesOffresHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === "GET") {
    try {
      const partenairesOffres = await prisma.offrePartenaire.findMany();
      res.json(partenairesOffres);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des offres partenaire:",
        error,
      );
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};
export default partenairesOffresHandler;

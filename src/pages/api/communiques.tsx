import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const communiquesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === "GET") {
    try {
      const communiques = await prisma.communiques.findMany();
      res.json(communiques);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors du chargement de communiques: ",
        error,
      );
      res.status(500).json({ error: "Une erreur est survenue" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};

export default communiquesHandler;

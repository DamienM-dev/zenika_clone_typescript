import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const diversityHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const diversity = await prisma.equality.findMany();
      res.json(diversity);
    } catch (error) {
      console.log("Erreur des récupérations des données de diversity", error);
      res.status(500).json({ error: "une erreur est survenue" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};
export default diversityHandler;

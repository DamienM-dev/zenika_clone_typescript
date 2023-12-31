import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const accompagnementHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === "GET") {
    try {
      const accompagnement = await prisma.accompagnement.findMany();
      res.json(accompagnement);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des accompagnement:",
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
export default accompagnementHandler;

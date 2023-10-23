import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const initiativeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const initiative = await prisma.initiative.findMany();
      res.json(initiative);
    } catch (error) {
      console.error(
        "Une erreur est survenue pour le composant initiative",
        error,
      );
      res.status(500).json({ error: "une erreur est survenue" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};
export default initiativeHandler;

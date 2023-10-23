import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const mediaHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const media = await prisma.media.findMany();
      res.json(media);
    } catch (error) {
      console.error("Une erreur est survenue pour le composant media", error);
      res.status(500).json({ error: "une erreur est survenue" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};
export default mediaHandler;

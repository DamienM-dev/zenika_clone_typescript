import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const communautesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === "GET") {
    try {
      const communautes = await prisma.communautes.findMany();
      res.json(communautes);
    } catch (error) {
      console.error(
        "Une erreur est survenue lors du chargement de communautes: ",
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

export default communautesHandler;

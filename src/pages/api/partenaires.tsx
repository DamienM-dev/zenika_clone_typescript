import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const partenaires = await prisma.partenaire.findMany();
      res.json(partenaires);
    } catch (error) {
      console.error("Erreur lors de la récupération des partenaires:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).end();
  }
};

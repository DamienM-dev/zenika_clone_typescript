import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const sociaux = await prisma.social.findMany();
      res.json(sociaux);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des réseaux sociaux:",
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

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type ContactInput = {
  nom: string;
  prenom: string;
  email: string;
  area: string;
};

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    const body = req.body as ContactInput;

    if (
      typeof body.nom === "string" &&
      typeof body.prenom === "string" &&
      typeof body.email === "string" &&
      typeof body.area === "string"
    ) {
      try {
        const contact = await prisma.contact.create({
          data: body,
        });

        res.json(contact);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de l'envois du formulaire",
          error,
        );
        res.status(500).json({ error: "Un probléme est survenu" });
      } finally {
        await prisma.$disconnect();
      }
    } else {
      res.status(400).json({ error: "Données fournies invalides" });
    }
  } else {
    res.status(405).end();
  }
};

export default contactHandler;

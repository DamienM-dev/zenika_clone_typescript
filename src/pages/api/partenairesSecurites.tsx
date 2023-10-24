import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

const partenaireSecurite = async (req:NextApiRequest, res:NextApiResponse) => {
  if(req.method === "GET" ) {
    
    try {
      const partenaireSecuriteHandler = await prisma.partenaireSecurite.findMany()
      res.json(partenaireSecuriteHandler)
   
  } catch(error) {
    console.error("Une erreur est survenue lors du chargement", error);
    res.status(500).json({error:" une erreur est survenue"})
  } finally {
   await prisma.$disconnect()
  }
}
res.status(405).end()
}

export default partenaireSecurite
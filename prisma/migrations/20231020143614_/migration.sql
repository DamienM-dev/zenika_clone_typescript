/*
  Warnings:

  - Added the required column `nom` to the `Expertise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nom` to the `Partenaire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projet` to the `Reference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expertise" ADD COLUMN     "nom" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Partenaire" ADD COLUMN     "nom" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reference" ADD COLUMN     "projet" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "forGood" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,

    CONSTRAINT "forGood_pkey" PRIMARY KEY ("id")
);

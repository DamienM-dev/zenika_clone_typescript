-- AlterTable
ALTER TABLE "Agence" ALTER COLUMN "lien" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Mention" ALTER COLUMN "lien" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reference" ALTER COLUMN "sous_titre" DROP NOT NULL,
ALTER COLUMN "langage" DROP NOT NULL,
ALTER COLUMN "lien_decouvrir" DROP NOT NULL,
ALTER COLUMN "projet" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Social" ALTER COLUMN "lien" DROP NOT NULL;

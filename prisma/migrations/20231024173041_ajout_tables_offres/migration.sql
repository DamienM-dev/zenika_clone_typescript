-- CreateTable
CREATE TABLE "Accompagnement" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,
    "lien" TEXT,

    CONSTRAINT "Accompagnement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OffrePartenaire" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "lien" TEXT NOT NULL,

    CONSTRAINT "OffrePartenaire_pkey" PRIMARY KEY ("id")
);

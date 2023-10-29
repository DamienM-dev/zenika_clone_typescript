-- CreateTable
CREATE TABLE "Communiques" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,
    "lien" TEXT NOT NULL,

    CONSTRAINT "Communiques_pkey" PRIMARY KEY ("id")
);

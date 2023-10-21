-- CreateTable
CREATE TABLE "Communautes" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,

    CONSTRAINT "Communautes_pkey" PRIMARY KEY ("id")
);

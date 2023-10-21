-- CreateTable
CREATE TABLE "Equality" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,
    "lien" TEXT,

    CONSTRAINT "Equality_pkey" PRIMARY KEY ("id")
);

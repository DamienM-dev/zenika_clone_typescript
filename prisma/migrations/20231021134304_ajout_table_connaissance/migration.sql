-- CreateTable
CREATE TABLE "Connaissance" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,

    CONSTRAINT "Connaissance_pkey" PRIMARY KEY ("id")
);

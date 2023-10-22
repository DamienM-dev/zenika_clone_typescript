-- CreateTable
CREATE TABLE "Responsable" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,
    "lien" TEXT,

    CONSTRAINT "Responsable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Initiative" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,

    CONSTRAINT "Initiative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Securite" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,
    "lien" TEXT,

    CONSTRAINT "Securite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartenaireSecurite" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "lien" TEXT NOT NULL,

    CONSTRAINT "PartenaireSecurite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cybersecurite" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,
    "titre" TEXT,
    "langage" TEXT,
    "projet" TEXT,

    CONSTRAINT "Cybersecurite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parole" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "paragraphe" TEXT NOT NULL,
    "lien" TEXT NOT NULL,

    CONSTRAINT "Parole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usage" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT,
    "paragraphe" TEXT NOT NULL,
    "lien" TEXT NOT NULL,

    CONSTRAINT "Usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "lien" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

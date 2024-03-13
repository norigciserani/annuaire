-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chambredispo" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "typechambre" TEXT NOT NULL,
    "prix" INTEGER NOT NULL,
    "occupation" INTEGER NOT NULL,
    "boitier" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "disponibilite" BOOLEAN NOT NULL,

    CONSTRAINT "Chambredispo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

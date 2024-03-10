-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chambredispo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "typechambre" TEXT NOT NULL,
    "prix" INTEGER NOT NULL,
    "occupation" INTEGER NOT NULL,
    "boitier" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "disponibilite" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

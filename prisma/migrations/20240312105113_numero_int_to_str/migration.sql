-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chambredispo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" TEXT NOT NULL,
    "typechambre" TEXT NOT NULL,
    "prix" INTEGER NOT NULL,
    "occupation" INTEGER NOT NULL,
    "boitier" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "disponibilite" BOOLEAN NOT NULL
);
INSERT INTO "new_Chambredispo" ("boitier", "code", "date", "disponibilite", "id", "numero", "occupation", "prix", "typechambre") SELECT "boitier", "code", "date", "disponibilite", "id", "numero", "occupation", "prix", "typechambre" FROM "Chambredispo";
DROP TABLE "Chambredispo";
ALTER TABLE "new_Chambredispo" RENAME TO "Chambredispo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

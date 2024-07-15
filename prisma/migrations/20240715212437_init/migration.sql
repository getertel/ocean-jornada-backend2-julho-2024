-- CreateTable
CREATE TABLE "Pastoral Harmony" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pastoral Harmony_bar_code_key" ON "Pastoral Harmony"("bar_code");

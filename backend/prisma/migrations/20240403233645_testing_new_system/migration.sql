/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_itemId_fkey";

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "Photo";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "password" TEXT NOT NULL,
    "profilePicture" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "concludedAt" TIMESTAMP(3),

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "subtitle" TEXT,
    "itemId" TEXT,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

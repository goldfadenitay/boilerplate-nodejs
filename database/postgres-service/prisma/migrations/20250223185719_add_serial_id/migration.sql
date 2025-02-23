/*
  Warnings:

  - A unique constraint covering the columns `[serialId]` on the table `posts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[serialId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "serialId" BIGSERIAL NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "serialId" BIGSERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "posts_serialId_key" ON "posts"("serialId");

-- CreateIndex
CREATE UNIQUE INDEX "users_serialId_key" ON "users"("serialId");

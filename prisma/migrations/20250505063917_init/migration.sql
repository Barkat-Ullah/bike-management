/*
  Warnings:

  - The primary key for the `bikes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `bikes` table. All the data in the column will be lost.
  - The primary key for the `customers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `customers` table. All the data in the column will be lost.
  - The required column `bikeId` was added to the `bikes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `customerId` was added to the `customers` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_bikeId_fkey";

-- DropForeignKey
ALTER TABLE "bikes" DROP CONSTRAINT "bikes_customerId_fkey";

-- AlterTable
ALTER TABLE "bikes" DROP CONSTRAINT "bikes_pkey",
DROP COLUMN "id",
ADD COLUMN     "bikeId" TEXT NOT NULL,
ADD CONSTRAINT "bikes_pkey" PRIMARY KEY ("bikeId");

-- AlterTable
ALTER TABLE "customers" DROP CONSTRAINT "customers_pkey",
DROP COLUMN "id",
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId");

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE CASCADE ON UPDATE CASCADE;

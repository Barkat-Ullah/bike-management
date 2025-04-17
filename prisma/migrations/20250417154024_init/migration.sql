/*
  Warnings:

  - Changed the type of `brand` on the `bikes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bikes" DROP COLUMN "brand",
ADD COLUMN     "brand" TEXT NOT NULL;

-- DropEnum
DROP TYPE "BikeBrand";

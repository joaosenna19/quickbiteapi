/*
  Warnings:

  - You are about to drop the column `customerId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[reservationCode]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerName` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_tableId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_waiterId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_customerId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "customerId",
ADD COLUMN     "customerName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Customer";

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_reservationCode_key" ON "Reservation"("reservationCode");

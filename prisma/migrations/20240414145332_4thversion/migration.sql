-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_waiterId_fkey";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "waiterId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_waiterId_fkey" FOREIGN KEY ("waiterId") REFERENCES "Waiter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

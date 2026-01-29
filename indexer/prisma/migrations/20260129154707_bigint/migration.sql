/*
  Warnings:

  - Changed the type of `nonce` on the `Burn` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `nonce` on the `Deposit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Burn" DROP COLUMN "nonce",
ADD COLUMN     "nonce" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Deposit" DROP COLUMN "nonce",
ADD COLUMN     "nonce" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "NetworkStatus" ALTER COLUMN "lastProcessedBlock" SET DATA TYPE BIGINT;

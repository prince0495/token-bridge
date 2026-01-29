/*
  Warnings:

  - You are about to alter the column `nonce` on the `Burn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `nonce` on the `Deposit` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `lastProcessedBlock` on the `NetworkStatus` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Burn" ALTER COLUMN "nonce" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Deposit" ALTER COLUMN "nonce" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "NetworkStatus" ALTER COLUMN "lastProcessedBlock" SET DATA TYPE INTEGER;

-- CreateEnum
CREATE TYPE "Network" AS ENUM ('SEPOLIA', 'POLYGON_AMOY_TESTNET');

-- CreateTable
CREATE TABLE "NetworkStatus" (
    "id" TEXT NOT NULL,
    "network" "Network" NOT NULL,
    "lastProcessedBlock" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NetworkStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" TEXT NOT NULL,
    "txHash" TEXT NOT NULL,
    "depositer" TEXT NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "nonce" INTEGER NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "network" "Network" NOT NULL DEFAULT 'SEPOLIA',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Withdraw" (
    "id" TEXT NOT NULL,
    "txHash" TEXT NOT NULL,
    "receiver" TEXT NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "network" "Network" NOT NULL DEFAULT 'POLYGON_AMOY_TESTNET',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Withdraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Burn" (
    "id" TEXT NOT NULL,
    "txHash" TEXT NOT NULL,
    "burner" TEXT NOT NULL,
    "tokenAddress" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "nonce" INTEGER NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "network" "Network" NOT NULL DEFAULT 'POLYGON_AMOY_TESTNET',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Burn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NetworkStatus_id_key" ON "NetworkStatus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "NetworkStatus_network_key" ON "NetworkStatus"("network");

-- CreateIndex
CREATE UNIQUE INDEX "Deposit_id_key" ON "Deposit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Deposit_txHash_key" ON "Deposit"("txHash");

-- CreateIndex
CREATE UNIQUE INDEX "Withdraw_id_key" ON "Withdraw"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Withdraw_txHash_key" ON "Withdraw"("txHash");

-- CreateIndex
CREATE UNIQUE INDEX "Burn_id_key" ON "Burn"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Burn_txHash_key" ON "Burn"("txHash");

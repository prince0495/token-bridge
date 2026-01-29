import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NetworkStatuses
 * const networkStatuses = await prisma.networkStatus.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model NetworkStatus
 *
 */
export type NetworkStatus = Prisma.NetworkStatusModel;
/**
 * Model Deposit
 *
 */
export type Deposit = Prisma.DepositModel;
/**
 * Model Withdraw
 *
 */
export type Withdraw = Prisma.WithdrawModel;
/**
 * Model Burn
 *
 */
export type Burn = Prisma.BurnModel;
//# sourceMappingURL=client.d.ts.map
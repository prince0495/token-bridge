import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly NetworkStatus: "NetworkStatus";
    readonly Deposit: "Deposit";
    readonly Withdraw: "Withdraw";
    readonly Burn: "Burn";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const NetworkStatusScalarFieldEnum: {
    readonly id: "id";
    readonly network: "network";
    readonly lastProcessedBlock: "lastProcessedBlock";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type NetworkStatusScalarFieldEnum = (typeof NetworkStatusScalarFieldEnum)[keyof typeof NetworkStatusScalarFieldEnum];
export declare const DepositScalarFieldEnum: {
    readonly id: "id";
    readonly txHash: "txHash";
    readonly depositer: "depositer";
    readonly tokenAddress: "tokenAddress";
    readonly amount: "amount";
    readonly nonce: "nonce";
    readonly isDone: "isDone";
    readonly network: "network";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum];
export declare const WithdrawScalarFieldEnum: {
    readonly id: "id";
    readonly txHash: "txHash";
    readonly receiver: "receiver";
    readonly tokenAddress: "tokenAddress";
    readonly amount: "amount";
    readonly isDone: "isDone";
    readonly network: "network";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type WithdrawScalarFieldEnum = (typeof WithdrawScalarFieldEnum)[keyof typeof WithdrawScalarFieldEnum];
export declare const BurnScalarFieldEnum: {
    readonly id: "id";
    readonly txHash: "txHash";
    readonly burner: "burner";
    readonly tokenAddress: "tokenAddress";
    readonly amount: "amount";
    readonly nonce: "nonce";
    readonly isDone: "isDone";
    readonly network: "network";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type BurnScalarFieldEnum = (typeof BurnScalarFieldEnum)[keyof typeof BurnScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map
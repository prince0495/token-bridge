export type DepositLog = {
    depositer: string;
    tokenAddress: string;
    amount: string;
    nonce: number;
    txHash: string;
}

export type BurntLog = {
    burner: string;
    tokenAddress: string;
    amount: string;
    nonce: number;
    txHash: string;
}
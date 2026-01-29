import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Burn
 *
 */
export type BurnModel = runtime.Types.Result.DefaultSelection<Prisma.$BurnPayload>;
export type AggregateBurn = {
    _count: BurnCountAggregateOutputType | null;
    _avg: BurnAvgAggregateOutputType | null;
    _sum: BurnSumAggregateOutputType | null;
    _min: BurnMinAggregateOutputType | null;
    _max: BurnMaxAggregateOutputType | null;
};
export type BurnAvgAggregateOutputType = {
    nonce: number | null;
};
export type BurnSumAggregateOutputType = {
    nonce: number | null;
};
export type BurnMinAggregateOutputType = {
    id: string | null;
    txHash: string | null;
    burner: string | null;
    tokenAddress: string | null;
    amount: string | null;
    nonce: number | null;
    isDone: boolean | null;
    network: $Enums.Network | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BurnMaxAggregateOutputType = {
    id: string | null;
    txHash: string | null;
    burner: string | null;
    tokenAddress: string | null;
    amount: string | null;
    nonce: number | null;
    isDone: boolean | null;
    network: $Enums.Network | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BurnCountAggregateOutputType = {
    id: number;
    txHash: number;
    burner: number;
    tokenAddress: number;
    amount: number;
    nonce: number;
    isDone: number;
    network: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type BurnAvgAggregateInputType = {
    nonce?: true;
};
export type BurnSumAggregateInputType = {
    nonce?: true;
};
export type BurnMinAggregateInputType = {
    id?: true;
    txHash?: true;
    burner?: true;
    tokenAddress?: true;
    amount?: true;
    nonce?: true;
    isDone?: true;
    network?: true;
    created_at?: true;
    updated_at?: true;
};
export type BurnMaxAggregateInputType = {
    id?: true;
    txHash?: true;
    burner?: true;
    tokenAddress?: true;
    amount?: true;
    nonce?: true;
    isDone?: true;
    network?: true;
    created_at?: true;
    updated_at?: true;
};
export type BurnCountAggregateInputType = {
    id?: true;
    txHash?: true;
    burner?: true;
    tokenAddress?: true;
    amount?: true;
    nonce?: true;
    isDone?: true;
    network?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type BurnAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Burn to aggregate.
     */
    where?: Prisma.BurnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Burns to fetch.
     */
    orderBy?: Prisma.BurnOrderByWithRelationInput | Prisma.BurnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BurnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Burns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Burns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Burns
    **/
    _count?: true | BurnCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BurnAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BurnSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BurnMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BurnMaxAggregateInputType;
};
export type GetBurnAggregateType<T extends BurnAggregateArgs> = {
    [P in keyof T & keyof AggregateBurn]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBurn[P]> : Prisma.GetScalarType<T[P], AggregateBurn[P]>;
};
export type BurnGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BurnWhereInput;
    orderBy?: Prisma.BurnOrderByWithAggregationInput | Prisma.BurnOrderByWithAggregationInput[];
    by: Prisma.BurnScalarFieldEnum[] | Prisma.BurnScalarFieldEnum;
    having?: Prisma.BurnScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BurnCountAggregateInputType | true;
    _avg?: BurnAvgAggregateInputType;
    _sum?: BurnSumAggregateInputType;
    _min?: BurnMinAggregateInputType;
    _max?: BurnMaxAggregateInputType;
};
export type BurnGroupByOutputType = {
    id: string;
    txHash: string;
    burner: string;
    tokenAddress: string;
    amount: string;
    nonce: number;
    isDone: boolean;
    network: $Enums.Network;
    created_at: Date;
    updated_at: Date;
    _count: BurnCountAggregateOutputType | null;
    _avg: BurnAvgAggregateOutputType | null;
    _sum: BurnSumAggregateOutputType | null;
    _min: BurnMinAggregateOutputType | null;
    _max: BurnMaxAggregateOutputType | null;
};
type GetBurnGroupByPayload<T extends BurnGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BurnGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BurnGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BurnGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BurnGroupByOutputType[P]>;
}>>;
export type BurnWhereInput = {
    AND?: Prisma.BurnWhereInput | Prisma.BurnWhereInput[];
    OR?: Prisma.BurnWhereInput[];
    NOT?: Prisma.BurnWhereInput | Prisma.BurnWhereInput[];
    id?: Prisma.StringFilter<"Burn"> | string;
    txHash?: Prisma.StringFilter<"Burn"> | string;
    burner?: Prisma.StringFilter<"Burn"> | string;
    tokenAddress?: Prisma.StringFilter<"Burn"> | string;
    amount?: Prisma.StringFilter<"Burn"> | string;
    nonce?: Prisma.IntFilter<"Burn"> | number;
    isDone?: Prisma.BoolFilter<"Burn"> | boolean;
    network?: Prisma.EnumNetworkFilter<"Burn"> | $Enums.Network;
    created_at?: Prisma.DateTimeFilter<"Burn"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Burn"> | Date | string;
};
export type BurnOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    txHash?: Prisma.SortOrder;
    burner?: Prisma.SortOrder;
    tokenAddress?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    nonce?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BurnWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    txHash?: string;
    AND?: Prisma.BurnWhereInput | Prisma.BurnWhereInput[];
    OR?: Prisma.BurnWhereInput[];
    NOT?: Prisma.BurnWhereInput | Prisma.BurnWhereInput[];
    burner?: Prisma.StringFilter<"Burn"> | string;
    tokenAddress?: Prisma.StringFilter<"Burn"> | string;
    amount?: Prisma.StringFilter<"Burn"> | string;
    nonce?: Prisma.IntFilter<"Burn"> | number;
    isDone?: Prisma.BoolFilter<"Burn"> | boolean;
    network?: Prisma.EnumNetworkFilter<"Burn"> | $Enums.Network;
    created_at?: Prisma.DateTimeFilter<"Burn"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Burn"> | Date | string;
}, "id" | "id" | "txHash">;
export type BurnOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    txHash?: Prisma.SortOrder;
    burner?: Prisma.SortOrder;
    tokenAddress?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    nonce?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.BurnCountOrderByAggregateInput;
    _avg?: Prisma.BurnAvgOrderByAggregateInput;
    _max?: Prisma.BurnMaxOrderByAggregateInput;
    _min?: Prisma.BurnMinOrderByAggregateInput;
    _sum?: Prisma.BurnSumOrderByAggregateInput;
};
export type BurnScalarWhereWithAggregatesInput = {
    AND?: Prisma.BurnScalarWhereWithAggregatesInput | Prisma.BurnScalarWhereWithAggregatesInput[];
    OR?: Prisma.BurnScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BurnScalarWhereWithAggregatesInput | Prisma.BurnScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Burn"> | string;
    txHash?: Prisma.StringWithAggregatesFilter<"Burn"> | string;
    burner?: Prisma.StringWithAggregatesFilter<"Burn"> | string;
    tokenAddress?: Prisma.StringWithAggregatesFilter<"Burn"> | string;
    amount?: Prisma.StringWithAggregatesFilter<"Burn"> | string;
    nonce?: Prisma.IntWithAggregatesFilter<"Burn"> | number;
    isDone?: Prisma.BoolWithAggregatesFilter<"Burn"> | boolean;
    network?: Prisma.EnumNetworkWithAggregatesFilter<"Burn"> | $Enums.Network;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Burn"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Burn"> | Date | string;
};
export type BurnCreateInput = {
    id?: string;
    txHash: string;
    burner: string;
    tokenAddress: string;
    amount: string;
    nonce: number;
    isDone?: boolean;
    network?: $Enums.Network;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BurnUncheckedCreateInput = {
    id?: string;
    txHash: string;
    burner: string;
    tokenAddress: string;
    amount: string;
    nonce: number;
    isDone?: boolean;
    network?: $Enums.Network;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BurnUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txHash?: Prisma.StringFieldUpdateOperationsInput | string;
    burner?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    nonce?: Prisma.IntFieldUpdateOperationsInput | number;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BurnUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txHash?: Prisma.StringFieldUpdateOperationsInput | string;
    burner?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    nonce?: Prisma.IntFieldUpdateOperationsInput | number;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BurnCreateManyInput = {
    id?: string;
    txHash: string;
    burner: string;
    tokenAddress: string;
    amount: string;
    nonce: number;
    isDone?: boolean;
    network?: $Enums.Network;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type BurnUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txHash?: Prisma.StringFieldUpdateOperationsInput | string;
    burner?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    nonce?: Prisma.IntFieldUpdateOperationsInput | number;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BurnUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    txHash?: Prisma.StringFieldUpdateOperationsInput | string;
    burner?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.StringFieldUpdateOperationsInput | string;
    nonce?: Prisma.IntFieldUpdateOperationsInput | number;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BurnCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    txHash?: Prisma.SortOrder;
    burner?: Prisma.SortOrder;
    tokenAddress?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    nonce?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BurnAvgOrderByAggregateInput = {
    nonce?: Prisma.SortOrder;
};
export type BurnMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    txHash?: Prisma.SortOrder;
    burner?: Prisma.SortOrder;
    tokenAddress?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    nonce?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BurnMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    txHash?: Prisma.SortOrder;
    burner?: Prisma.SortOrder;
    tokenAddress?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    nonce?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type BurnSumOrderByAggregateInput = {
    nonce?: Prisma.SortOrder;
};
export type BurnSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    txHash?: boolean;
    burner?: boolean;
    tokenAddress?: boolean;
    amount?: boolean;
    nonce?: boolean;
    isDone?: boolean;
    network?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["burn"]>;
export type BurnSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    txHash?: boolean;
    burner?: boolean;
    tokenAddress?: boolean;
    amount?: boolean;
    nonce?: boolean;
    isDone?: boolean;
    network?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["burn"]>;
export type BurnSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    txHash?: boolean;
    burner?: boolean;
    tokenAddress?: boolean;
    amount?: boolean;
    nonce?: boolean;
    isDone?: boolean;
    network?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["burn"]>;
export type BurnSelectScalar = {
    id?: boolean;
    txHash?: boolean;
    burner?: boolean;
    tokenAddress?: boolean;
    amount?: boolean;
    nonce?: boolean;
    isDone?: boolean;
    network?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type BurnOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "txHash" | "burner" | "tokenAddress" | "amount" | "nonce" | "isDone" | "network" | "created_at" | "updated_at", ExtArgs["result"]["burn"]>;
export type $BurnPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Burn";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        txHash: string;
        burner: string;
        tokenAddress: string;
        amount: string;
        nonce: number;
        isDone: boolean;
        network: $Enums.Network;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["burn"]>;
    composites: {};
};
export type BurnGetPayload<S extends boolean | null | undefined | BurnDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BurnPayload, S>;
export type BurnCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BurnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BurnCountAggregateInputType | true;
};
export interface BurnDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Burn'];
        meta: {
            name: 'Burn';
        };
    };
    /**
     * Find zero or one Burn that matches the filter.
     * @param {BurnFindUniqueArgs} args - Arguments to find a Burn
     * @example
     * // Get one Burn
     * const burn = await prisma.burn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BurnFindUniqueArgs>(args: Prisma.SelectSubset<T, BurnFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Burn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BurnFindUniqueOrThrowArgs} args - Arguments to find a Burn
     * @example
     * // Get one Burn
     * const burn = await prisma.burn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BurnFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BurnFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Burn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnFindFirstArgs} args - Arguments to find a Burn
     * @example
     * // Get one Burn
     * const burn = await prisma.burn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BurnFindFirstArgs>(args?: Prisma.SelectSubset<T, BurnFindFirstArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Burn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnFindFirstOrThrowArgs} args - Arguments to find a Burn
     * @example
     * // Get one Burn
     * const burn = await prisma.burn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BurnFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BurnFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Burns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Burns
     * const burns = await prisma.burn.findMany()
     *
     * // Get first 10 Burns
     * const burns = await prisma.burn.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const burnWithIdOnly = await prisma.burn.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BurnFindManyArgs>(args?: Prisma.SelectSubset<T, BurnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Burn.
     * @param {BurnCreateArgs} args - Arguments to create a Burn.
     * @example
     * // Create one Burn
     * const Burn = await prisma.burn.create({
     *   data: {
     *     // ... data to create a Burn
     *   }
     * })
     *
     */
    create<T extends BurnCreateArgs>(args: Prisma.SelectSubset<T, BurnCreateArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Burns.
     * @param {BurnCreateManyArgs} args - Arguments to create many Burns.
     * @example
     * // Create many Burns
     * const burn = await prisma.burn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BurnCreateManyArgs>(args?: Prisma.SelectSubset<T, BurnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Burns and returns the data saved in the database.
     * @param {BurnCreateManyAndReturnArgs} args - Arguments to create many Burns.
     * @example
     * // Create many Burns
     * const burn = await prisma.burn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Burns and only return the `id`
     * const burnWithIdOnly = await prisma.burn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BurnCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BurnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Burn.
     * @param {BurnDeleteArgs} args - Arguments to delete one Burn.
     * @example
     * // Delete one Burn
     * const Burn = await prisma.burn.delete({
     *   where: {
     *     // ... filter to delete one Burn
     *   }
     * })
     *
     */
    delete<T extends BurnDeleteArgs>(args: Prisma.SelectSubset<T, BurnDeleteArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Burn.
     * @param {BurnUpdateArgs} args - Arguments to update one Burn.
     * @example
     * // Update one Burn
     * const burn = await prisma.burn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BurnUpdateArgs>(args: Prisma.SelectSubset<T, BurnUpdateArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Burns.
     * @param {BurnDeleteManyArgs} args - Arguments to filter Burns to delete.
     * @example
     * // Delete a few Burns
     * const { count } = await prisma.burn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BurnDeleteManyArgs>(args?: Prisma.SelectSubset<T, BurnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Burns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Burns
     * const burn = await prisma.burn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BurnUpdateManyArgs>(args: Prisma.SelectSubset<T, BurnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Burns and returns the data updated in the database.
     * @param {BurnUpdateManyAndReturnArgs} args - Arguments to update many Burns.
     * @example
     * // Update many Burns
     * const burn = await prisma.burn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Burns and only return the `id`
     * const burnWithIdOnly = await prisma.burn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends BurnUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BurnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Burn.
     * @param {BurnUpsertArgs} args - Arguments to update or create a Burn.
     * @example
     * // Update or create a Burn
     * const burn = await prisma.burn.upsert({
     *   create: {
     *     // ... data to create a Burn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Burn we want to update
     *   }
     * })
     */
    upsert<T extends BurnUpsertArgs>(args: Prisma.SelectSubset<T, BurnUpsertArgs<ExtArgs>>): Prisma.Prisma__BurnClient<runtime.Types.Result.GetResult<Prisma.$BurnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Burns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnCountArgs} args - Arguments to filter Burns to count.
     * @example
     * // Count the number of Burns
     * const count = await prisma.burn.count({
     *   where: {
     *     // ... the filter for the Burns we want to count
     *   }
     * })
    **/
    count<T extends BurnCountArgs>(args?: Prisma.Subset<T, BurnCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BurnCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Burn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BurnAggregateArgs>(args: Prisma.Subset<T, BurnAggregateArgs>): Prisma.PrismaPromise<GetBurnAggregateType<T>>;
    /**
     * Group by Burn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BurnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends BurnGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BurnGroupByArgs['orderBy'];
    } : {
        orderBy?: BurnGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BurnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBurnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Burn model
     */
    readonly fields: BurnFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Burn.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BurnClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Burn model
 */
export interface BurnFieldRefs {
    readonly id: Prisma.FieldRef<"Burn", 'String'>;
    readonly txHash: Prisma.FieldRef<"Burn", 'String'>;
    readonly burner: Prisma.FieldRef<"Burn", 'String'>;
    readonly tokenAddress: Prisma.FieldRef<"Burn", 'String'>;
    readonly amount: Prisma.FieldRef<"Burn", 'String'>;
    readonly nonce: Prisma.FieldRef<"Burn", 'Int'>;
    readonly isDone: Prisma.FieldRef<"Burn", 'Boolean'>;
    readonly network: Prisma.FieldRef<"Burn", 'Network'>;
    readonly created_at: Prisma.FieldRef<"Burn", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Burn", 'DateTime'>;
}
/**
 * Burn findUnique
 */
export type BurnFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * Filter, which Burn to fetch.
     */
    where: Prisma.BurnWhereUniqueInput;
};
/**
 * Burn findUniqueOrThrow
 */
export type BurnFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * Filter, which Burn to fetch.
     */
    where: Prisma.BurnWhereUniqueInput;
};
/**
 * Burn findFirst
 */
export type BurnFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * Filter, which Burn to fetch.
     */
    where?: Prisma.BurnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Burns to fetch.
     */
    orderBy?: Prisma.BurnOrderByWithRelationInput | Prisma.BurnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Burns.
     */
    cursor?: Prisma.BurnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Burns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Burns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Burns.
     */
    distinct?: Prisma.BurnScalarFieldEnum | Prisma.BurnScalarFieldEnum[];
};
/**
 * Burn findFirstOrThrow
 */
export type BurnFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * Filter, which Burn to fetch.
     */
    where?: Prisma.BurnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Burns to fetch.
     */
    orderBy?: Prisma.BurnOrderByWithRelationInput | Prisma.BurnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Burns.
     */
    cursor?: Prisma.BurnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Burns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Burns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Burns.
     */
    distinct?: Prisma.BurnScalarFieldEnum | Prisma.BurnScalarFieldEnum[];
};
/**
 * Burn findMany
 */
export type BurnFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * Filter, which Burns to fetch.
     */
    where?: Prisma.BurnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Burns to fetch.
     */
    orderBy?: Prisma.BurnOrderByWithRelationInput | Prisma.BurnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Burns.
     */
    cursor?: Prisma.BurnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Burns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Burns.
     */
    skip?: number;
    distinct?: Prisma.BurnScalarFieldEnum | Prisma.BurnScalarFieldEnum[];
};
/**
 * Burn create
 */
export type BurnCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * The data needed to create a Burn.
     */
    data: Prisma.XOR<Prisma.BurnCreateInput, Prisma.BurnUncheckedCreateInput>;
};
/**
 * Burn createMany
 */
export type BurnCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Burns.
     */
    data: Prisma.BurnCreateManyInput | Prisma.BurnCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Burn createManyAndReturn
 */
export type BurnCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * The data used to create many Burns.
     */
    data: Prisma.BurnCreateManyInput | Prisma.BurnCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Burn update
 */
export type BurnUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * The data needed to update a Burn.
     */
    data: Prisma.XOR<Prisma.BurnUpdateInput, Prisma.BurnUncheckedUpdateInput>;
    /**
     * Choose, which Burn to update.
     */
    where: Prisma.BurnWhereUniqueInput;
};
/**
 * Burn updateMany
 */
export type BurnUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Burns.
     */
    data: Prisma.XOR<Prisma.BurnUpdateManyMutationInput, Prisma.BurnUncheckedUpdateManyInput>;
    /**
     * Filter which Burns to update
     */
    where?: Prisma.BurnWhereInput;
    /**
     * Limit how many Burns to update.
     */
    limit?: number;
};
/**
 * Burn updateManyAndReturn
 */
export type BurnUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * The data used to update Burns.
     */
    data: Prisma.XOR<Prisma.BurnUpdateManyMutationInput, Prisma.BurnUncheckedUpdateManyInput>;
    /**
     * Filter which Burns to update
     */
    where?: Prisma.BurnWhereInput;
    /**
     * Limit how many Burns to update.
     */
    limit?: number;
};
/**
 * Burn upsert
 */
export type BurnUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * The filter to search for the Burn to update in case it exists.
     */
    where: Prisma.BurnWhereUniqueInput;
    /**
     * In case the Burn found by the `where` argument doesn't exist, create a new Burn with this data.
     */
    create: Prisma.XOR<Prisma.BurnCreateInput, Prisma.BurnUncheckedCreateInput>;
    /**
     * In case the Burn was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BurnUpdateInput, Prisma.BurnUncheckedUpdateInput>;
};
/**
 * Burn delete
 */
export type BurnDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
    /**
     * Filter which Burn to delete.
     */
    where: Prisma.BurnWhereUniqueInput;
};
/**
 * Burn deleteMany
 */
export type BurnDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Burns to delete
     */
    where?: Prisma.BurnWhereInput;
    /**
     * Limit how many Burns to delete.
     */
    limit?: number;
};
/**
 * Burn without action
 */
export type BurnDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Burn
     */
    select?: Prisma.BurnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Burn
     */
    omit?: Prisma.BurnOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Burn.d.ts.map
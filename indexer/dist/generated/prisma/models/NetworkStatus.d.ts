import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model NetworkStatus
 *
 */
export type NetworkStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$NetworkStatusPayload>;
export type AggregateNetworkStatus = {
    _count: NetworkStatusCountAggregateOutputType | null;
    _avg: NetworkStatusAvgAggregateOutputType | null;
    _sum: NetworkStatusSumAggregateOutputType | null;
    _min: NetworkStatusMinAggregateOutputType | null;
    _max: NetworkStatusMaxAggregateOutputType | null;
};
export type NetworkStatusAvgAggregateOutputType = {
    lastProcessedBlock: number | null;
};
export type NetworkStatusSumAggregateOutputType = {
    lastProcessedBlock: number | null;
};
export type NetworkStatusMinAggregateOutputType = {
    id: string | null;
    network: $Enums.Network | null;
    lastProcessedBlock: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type NetworkStatusMaxAggregateOutputType = {
    id: string | null;
    network: $Enums.Network | null;
    lastProcessedBlock: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type NetworkStatusCountAggregateOutputType = {
    id: number;
    network: number;
    lastProcessedBlock: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type NetworkStatusAvgAggregateInputType = {
    lastProcessedBlock?: true;
};
export type NetworkStatusSumAggregateInputType = {
    lastProcessedBlock?: true;
};
export type NetworkStatusMinAggregateInputType = {
    id?: true;
    network?: true;
    lastProcessedBlock?: true;
    created_at?: true;
    updated_at?: true;
};
export type NetworkStatusMaxAggregateInputType = {
    id?: true;
    network?: true;
    lastProcessedBlock?: true;
    created_at?: true;
    updated_at?: true;
};
export type NetworkStatusCountAggregateInputType = {
    id?: true;
    network?: true;
    lastProcessedBlock?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type NetworkStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkStatus to aggregate.
     */
    where?: Prisma.NetworkStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NetworkStatuses to fetch.
     */
    orderBy?: Prisma.NetworkStatusOrderByWithRelationInput | Prisma.NetworkStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.NetworkStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NetworkStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NetworkStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NetworkStatuses
    **/
    _count?: true | NetworkStatusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: NetworkStatusAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: NetworkStatusSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NetworkStatusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NetworkStatusMaxAggregateInputType;
};
export type GetNetworkStatusAggregateType<T extends NetworkStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateNetworkStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNetworkStatus[P]> : Prisma.GetScalarType<T[P], AggregateNetworkStatus[P]>;
};
export type NetworkStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NetworkStatusWhereInput;
    orderBy?: Prisma.NetworkStatusOrderByWithAggregationInput | Prisma.NetworkStatusOrderByWithAggregationInput[];
    by: Prisma.NetworkStatusScalarFieldEnum[] | Prisma.NetworkStatusScalarFieldEnum;
    having?: Prisma.NetworkStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NetworkStatusCountAggregateInputType | true;
    _avg?: NetworkStatusAvgAggregateInputType;
    _sum?: NetworkStatusSumAggregateInputType;
    _min?: NetworkStatusMinAggregateInputType;
    _max?: NetworkStatusMaxAggregateInputType;
};
export type NetworkStatusGroupByOutputType = {
    id: string;
    network: $Enums.Network;
    lastProcessedBlock: number;
    created_at: Date;
    updated_at: Date;
    _count: NetworkStatusCountAggregateOutputType | null;
    _avg: NetworkStatusAvgAggregateOutputType | null;
    _sum: NetworkStatusSumAggregateOutputType | null;
    _min: NetworkStatusMinAggregateOutputType | null;
    _max: NetworkStatusMaxAggregateOutputType | null;
};
type GetNetworkStatusGroupByPayload<T extends NetworkStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NetworkStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NetworkStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NetworkStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NetworkStatusGroupByOutputType[P]>;
}>>;
export type NetworkStatusWhereInput = {
    AND?: Prisma.NetworkStatusWhereInput | Prisma.NetworkStatusWhereInput[];
    OR?: Prisma.NetworkStatusWhereInput[];
    NOT?: Prisma.NetworkStatusWhereInput | Prisma.NetworkStatusWhereInput[];
    id?: Prisma.StringFilter<"NetworkStatus"> | string;
    network?: Prisma.EnumNetworkFilter<"NetworkStatus"> | $Enums.Network;
    lastProcessedBlock?: Prisma.IntFilter<"NetworkStatus"> | number;
    created_at?: Prisma.DateTimeFilter<"NetworkStatus"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"NetworkStatus"> | Date | string;
};
export type NetworkStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    lastProcessedBlock?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type NetworkStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    network?: $Enums.Network;
    AND?: Prisma.NetworkStatusWhereInput | Prisma.NetworkStatusWhereInput[];
    OR?: Prisma.NetworkStatusWhereInput[];
    NOT?: Prisma.NetworkStatusWhereInput | Prisma.NetworkStatusWhereInput[];
    lastProcessedBlock?: Prisma.IntFilter<"NetworkStatus"> | number;
    created_at?: Prisma.DateTimeFilter<"NetworkStatus"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"NetworkStatus"> | Date | string;
}, "id" | "id" | "network">;
export type NetworkStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    lastProcessedBlock?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.NetworkStatusCountOrderByAggregateInput;
    _avg?: Prisma.NetworkStatusAvgOrderByAggregateInput;
    _max?: Prisma.NetworkStatusMaxOrderByAggregateInput;
    _min?: Prisma.NetworkStatusMinOrderByAggregateInput;
    _sum?: Prisma.NetworkStatusSumOrderByAggregateInput;
};
export type NetworkStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.NetworkStatusScalarWhereWithAggregatesInput | Prisma.NetworkStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.NetworkStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NetworkStatusScalarWhereWithAggregatesInput | Prisma.NetworkStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"NetworkStatus"> | string;
    network?: Prisma.EnumNetworkWithAggregatesFilter<"NetworkStatus"> | $Enums.Network;
    lastProcessedBlock?: Prisma.IntWithAggregatesFilter<"NetworkStatus"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"NetworkStatus"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"NetworkStatus"> | Date | string;
};
export type NetworkStatusCreateInput = {
    id?: string;
    network: $Enums.Network;
    lastProcessedBlock: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NetworkStatusUncheckedCreateInput = {
    id?: string;
    network: $Enums.Network;
    lastProcessedBlock: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NetworkStatusUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    lastProcessedBlock?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NetworkStatusUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    lastProcessedBlock?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NetworkStatusCreateManyInput = {
    id?: string;
    network: $Enums.Network;
    lastProcessedBlock: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type NetworkStatusUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    lastProcessedBlock?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NetworkStatusUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    network?: Prisma.EnumNetworkFieldUpdateOperationsInput | $Enums.Network;
    lastProcessedBlock?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NetworkStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    lastProcessedBlock?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type NetworkStatusAvgOrderByAggregateInput = {
    lastProcessedBlock?: Prisma.SortOrder;
};
export type NetworkStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    lastProcessedBlock?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type NetworkStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    network?: Prisma.SortOrder;
    lastProcessedBlock?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type NetworkStatusSumOrderByAggregateInput = {
    lastProcessedBlock?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumNetworkFieldUpdateOperationsInput = {
    set?: $Enums.Network;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NetworkStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    network?: boolean;
    lastProcessedBlock?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["networkStatus"]>;
export type NetworkStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    network?: boolean;
    lastProcessedBlock?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["networkStatus"]>;
export type NetworkStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    network?: boolean;
    lastProcessedBlock?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["networkStatus"]>;
export type NetworkStatusSelectScalar = {
    id?: boolean;
    network?: boolean;
    lastProcessedBlock?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type NetworkStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "network" | "lastProcessedBlock" | "created_at" | "updated_at", ExtArgs["result"]["networkStatus"]>;
export type $NetworkStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NetworkStatus";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        network: $Enums.Network;
        lastProcessedBlock: number;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["networkStatus"]>;
    composites: {};
};
export type NetworkStatusGetPayload<S extends boolean | null | undefined | NetworkStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload, S>;
export type NetworkStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NetworkStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NetworkStatusCountAggregateInputType | true;
};
export interface NetworkStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NetworkStatus'];
        meta: {
            name: 'NetworkStatus';
        };
    };
    /**
     * Find zero or one NetworkStatus that matches the filter.
     * @param {NetworkStatusFindUniqueArgs} args - Arguments to find a NetworkStatus
     * @example
     * // Get one NetworkStatus
     * const networkStatus = await prisma.networkStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, NetworkStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one NetworkStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NetworkStatusFindUniqueOrThrowArgs} args - Arguments to find a NetworkStatus
     * @example
     * // Get one NetworkStatus
     * const networkStatus = await prisma.networkStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NetworkStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first NetworkStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatusFindFirstArgs} args - Arguments to find a NetworkStatus
     * @example
     * // Get one NetworkStatus
     * const networkStatus = await prisma.networkStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, NetworkStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first NetworkStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatusFindFirstOrThrowArgs} args - Arguments to find a NetworkStatus
     * @example
     * // Get one NetworkStatus
     * const networkStatus = await prisma.networkStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NetworkStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more NetworkStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkStatuses
     * const networkStatuses = await prisma.networkStatus.findMany()
     *
     * // Get first 10 NetworkStatuses
     * const networkStatuses = await prisma.networkStatus.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const networkStatusWithIdOnly = await prisma.networkStatus.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NetworkStatusFindManyArgs>(args?: Prisma.SelectSubset<T, NetworkStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a NetworkStatus.
     * @param {NetworkStatusCreateArgs} args - Arguments to create a NetworkStatus.
     * @example
     * // Create one NetworkStatus
     * const NetworkStatus = await prisma.networkStatus.create({
     *   data: {
     *     // ... data to create a NetworkStatus
     *   }
     * })
     *
     */
    create<T extends NetworkStatusCreateArgs>(args: Prisma.SelectSubset<T, NetworkStatusCreateArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many NetworkStatuses.
     * @param {NetworkStatusCreateManyArgs} args - Arguments to create many NetworkStatuses.
     * @example
     * // Create many NetworkStatuses
     * const networkStatus = await prisma.networkStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NetworkStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, NetworkStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many NetworkStatuses and returns the data saved in the database.
     * @param {NetworkStatusCreateManyAndReturnArgs} args - Arguments to create many NetworkStatuses.
     * @example
     * // Create many NetworkStatuses
     * const networkStatus = await prisma.networkStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NetworkStatuses and only return the `id`
     * const networkStatusWithIdOnly = await prisma.networkStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NetworkStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NetworkStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a NetworkStatus.
     * @param {NetworkStatusDeleteArgs} args - Arguments to delete one NetworkStatus.
     * @example
     * // Delete one NetworkStatus
     * const NetworkStatus = await prisma.networkStatus.delete({
     *   where: {
     *     // ... filter to delete one NetworkStatus
     *   }
     * })
     *
     */
    delete<T extends NetworkStatusDeleteArgs>(args: Prisma.SelectSubset<T, NetworkStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one NetworkStatus.
     * @param {NetworkStatusUpdateArgs} args - Arguments to update one NetworkStatus.
     * @example
     * // Update one NetworkStatus
     * const networkStatus = await prisma.networkStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NetworkStatusUpdateArgs>(args: Prisma.SelectSubset<T, NetworkStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more NetworkStatuses.
     * @param {NetworkStatusDeleteManyArgs} args - Arguments to filter NetworkStatuses to delete.
     * @example
     * // Delete a few NetworkStatuses
     * const { count } = await prisma.networkStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NetworkStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, NetworkStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more NetworkStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkStatuses
     * const networkStatus = await prisma.networkStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NetworkStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, NetworkStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more NetworkStatuses and returns the data updated in the database.
     * @param {NetworkStatusUpdateManyAndReturnArgs} args - Arguments to update many NetworkStatuses.
     * @example
     * // Update many NetworkStatuses
     * const networkStatus = await prisma.networkStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NetworkStatuses and only return the `id`
     * const networkStatusWithIdOnly = await prisma.networkStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends NetworkStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NetworkStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one NetworkStatus.
     * @param {NetworkStatusUpsertArgs} args - Arguments to update or create a NetworkStatus.
     * @example
     * // Update or create a NetworkStatus
     * const networkStatus = await prisma.networkStatus.upsert({
     *   create: {
     *     // ... data to create a NetworkStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkStatus we want to update
     *   }
     * })
     */
    upsert<T extends NetworkStatusUpsertArgs>(args: Prisma.SelectSubset<T, NetworkStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__NetworkStatusClient<runtime.Types.Result.GetResult<Prisma.$NetworkStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of NetworkStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatusCountArgs} args - Arguments to filter NetworkStatuses to count.
     * @example
     * // Count the number of NetworkStatuses
     * const count = await prisma.networkStatus.count({
     *   where: {
     *     // ... the filter for the NetworkStatuses we want to count
     *   }
     * })
    **/
    count<T extends NetworkStatusCountArgs>(args?: Prisma.Subset<T, NetworkStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NetworkStatusCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a NetworkStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworkStatusAggregateArgs>(args: Prisma.Subset<T, NetworkStatusAggregateArgs>): Prisma.PrismaPromise<GetNetworkStatusAggregateType<T>>;
    /**
     * Group by NetworkStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkStatusGroupByArgs} args - Group by arguments.
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
    groupBy<T extends NetworkStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NetworkStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: NetworkStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NetworkStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NetworkStatus model
     */
    readonly fields: NetworkStatusFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for NetworkStatus.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__NetworkStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the NetworkStatus model
 */
export interface NetworkStatusFieldRefs {
    readonly id: Prisma.FieldRef<"NetworkStatus", 'String'>;
    readonly network: Prisma.FieldRef<"NetworkStatus", 'Network'>;
    readonly lastProcessedBlock: Prisma.FieldRef<"NetworkStatus", 'Int'>;
    readonly created_at: Prisma.FieldRef<"NetworkStatus", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"NetworkStatus", 'DateTime'>;
}
/**
 * NetworkStatus findUnique
 */
export type NetworkStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * Filter, which NetworkStatus to fetch.
     */
    where: Prisma.NetworkStatusWhereUniqueInput;
};
/**
 * NetworkStatus findUniqueOrThrow
 */
export type NetworkStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * Filter, which NetworkStatus to fetch.
     */
    where: Prisma.NetworkStatusWhereUniqueInput;
};
/**
 * NetworkStatus findFirst
 */
export type NetworkStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * Filter, which NetworkStatus to fetch.
     */
    where?: Prisma.NetworkStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NetworkStatuses to fetch.
     */
    orderBy?: Prisma.NetworkStatusOrderByWithRelationInput | Prisma.NetworkStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NetworkStatuses.
     */
    cursor?: Prisma.NetworkStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NetworkStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NetworkStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NetworkStatuses.
     */
    distinct?: Prisma.NetworkStatusScalarFieldEnum | Prisma.NetworkStatusScalarFieldEnum[];
};
/**
 * NetworkStatus findFirstOrThrow
 */
export type NetworkStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * Filter, which NetworkStatus to fetch.
     */
    where?: Prisma.NetworkStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NetworkStatuses to fetch.
     */
    orderBy?: Prisma.NetworkStatusOrderByWithRelationInput | Prisma.NetworkStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NetworkStatuses.
     */
    cursor?: Prisma.NetworkStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NetworkStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NetworkStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NetworkStatuses.
     */
    distinct?: Prisma.NetworkStatusScalarFieldEnum | Prisma.NetworkStatusScalarFieldEnum[];
};
/**
 * NetworkStatus findMany
 */
export type NetworkStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * Filter, which NetworkStatuses to fetch.
     */
    where?: Prisma.NetworkStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NetworkStatuses to fetch.
     */
    orderBy?: Prisma.NetworkStatusOrderByWithRelationInput | Prisma.NetworkStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NetworkStatuses.
     */
    cursor?: Prisma.NetworkStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NetworkStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NetworkStatuses.
     */
    skip?: number;
    distinct?: Prisma.NetworkStatusScalarFieldEnum | Prisma.NetworkStatusScalarFieldEnum[];
};
/**
 * NetworkStatus create
 */
export type NetworkStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * The data needed to create a NetworkStatus.
     */
    data: Prisma.XOR<Prisma.NetworkStatusCreateInput, Prisma.NetworkStatusUncheckedCreateInput>;
};
/**
 * NetworkStatus createMany
 */
export type NetworkStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkStatuses.
     */
    data: Prisma.NetworkStatusCreateManyInput | Prisma.NetworkStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * NetworkStatus createManyAndReturn
 */
export type NetworkStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * The data used to create many NetworkStatuses.
     */
    data: Prisma.NetworkStatusCreateManyInput | Prisma.NetworkStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * NetworkStatus update
 */
export type NetworkStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * The data needed to update a NetworkStatus.
     */
    data: Prisma.XOR<Prisma.NetworkStatusUpdateInput, Prisma.NetworkStatusUncheckedUpdateInput>;
    /**
     * Choose, which NetworkStatus to update.
     */
    where: Prisma.NetworkStatusWhereUniqueInput;
};
/**
 * NetworkStatus updateMany
 */
export type NetworkStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkStatuses.
     */
    data: Prisma.XOR<Prisma.NetworkStatusUpdateManyMutationInput, Prisma.NetworkStatusUncheckedUpdateManyInput>;
    /**
     * Filter which NetworkStatuses to update
     */
    where?: Prisma.NetworkStatusWhereInput;
    /**
     * Limit how many NetworkStatuses to update.
     */
    limit?: number;
};
/**
 * NetworkStatus updateManyAndReturn
 */
export type NetworkStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * The data used to update NetworkStatuses.
     */
    data: Prisma.XOR<Prisma.NetworkStatusUpdateManyMutationInput, Prisma.NetworkStatusUncheckedUpdateManyInput>;
    /**
     * Filter which NetworkStatuses to update
     */
    where?: Prisma.NetworkStatusWhereInput;
    /**
     * Limit how many NetworkStatuses to update.
     */
    limit?: number;
};
/**
 * NetworkStatus upsert
 */
export type NetworkStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * The filter to search for the NetworkStatus to update in case it exists.
     */
    where: Prisma.NetworkStatusWhereUniqueInput;
    /**
     * In case the NetworkStatus found by the `where` argument doesn't exist, create a new NetworkStatus with this data.
     */
    create: Prisma.XOR<Prisma.NetworkStatusCreateInput, Prisma.NetworkStatusUncheckedCreateInput>;
    /**
     * In case the NetworkStatus was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.NetworkStatusUpdateInput, Prisma.NetworkStatusUncheckedUpdateInput>;
};
/**
 * NetworkStatus delete
 */
export type NetworkStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
    /**
     * Filter which NetworkStatus to delete.
     */
    where: Prisma.NetworkStatusWhereUniqueInput;
};
/**
 * NetworkStatus deleteMany
 */
export type NetworkStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkStatuses to delete
     */
    where?: Prisma.NetworkStatusWhereInput;
    /**
     * Limit how many NetworkStatuses to delete.
     */
    limit?: number;
};
/**
 * NetworkStatus without action
 */
export type NetworkStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkStatus
     */
    select?: Prisma.NetworkStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NetworkStatus
     */
    omit?: Prisma.NetworkStatusOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=NetworkStatus.d.ts.map
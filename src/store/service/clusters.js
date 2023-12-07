import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang, getWorkspaceId } from '@/utils';

export const clustersApi = createApi({
    reducerPath: 'clusters-api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE,
        credentials: 'include',
        prepareHeaders: (headers) => {
            headers.set('Authorization', getAuthToken());
            headers.set('Workspace', getWorkspaceId());
            headers.set('Accept-Language', getLang());
            return headers;
        },
    }),
    tagTypes: ['getClusters', 'setCurrentCluster'],
    endpoints: (builder) => ({
        fetchAnything: builder.query({
            query(path) {
                return path;
            },
        }),
        getClusters: builder.query({
            query: () => 'cluster',
            providesTags: (_) => [{ type: 'getClusters', id: 'getClusters' }],
        }),
        setCurrentCluster: builder.mutation({
            query: (clusterName) => ({
                url: `cluster/${clusterName}`,
                method: 'POST',
            }),
            providesTags: (_) => [{ type: 'setCurrentCluster', id: 'setCurrentCluster' }],
        }),
    }),
});

export const {
    useGetClustersQuery,
    useSetCurrentClusterMutation,
} = clustersApi;

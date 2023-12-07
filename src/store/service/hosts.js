import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang, getWorkspaceId } from '@/utils';

export const hostsApi = createApi({
    reducerPath: 'hosts-api',
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
    tagTypes: ['getHosts', 'getHostByHostName'],
    endpoints: (builder) => ({
        fetchAnything: builder.query({
            query(path) {
                return path;
            },
        }),
        deleteHost: builder.mutation({
            query: (hostName) => ({
                url: `host/${hostName}`,
                method: 'DELETE',
            }),
        }),
        getHosts: builder.query({
            query: (params) => ({
                url: 'host',
                method: 'GET',
                params,
            }),
            providesTags: (_) => [{ type: 'getHosts', id: 'getHosts' }],
            keepUnusedDataFor: 120,
        }),
        getHostByHostName: builder.query({
            query(hostName) {
                return `host/${hostName}`;
            },
            providesTags: (_) => [{ type: 'getHostByHostName', id: 'getHostByHostName' }],
            keepUnusedDataFor: 0, // disable cache
        }),
        refreshHost: builder.query({
            query: (hostName) => ({
                url: `host/${hostName}/refresh`,
                method: 'POST',
            }),
            providesTags: (_) => [{ type: 'refreshHost', id: 'refreshHost' }],
        }),
        fetchHost: builder.mutation({
            query: (hostName) => ({
                url: `host/${hostName}/refresh`,
                method: 'POST',
            }),
            providesTags: (_) => [{ type: 'fetchHost', id: 'fetchHost' }],
        }),
        updateHost: builder.mutation({
            query: ({ host, ...payload }) => ({
                url: `host/${host}`,
                method: 'PUT',
                body: payload,
            }),
            invalidatesTags: ['getHosts', 'getHostByHostName'],
        }),
    }),
});

export const {
    useDeleteHostMutation,
    useGetHostsQuery,
    useGetHostByHostNameQuery,
    useRefreshHostQuery,
    useFetchHostMutation,
    useUpdateHostMutation,
} = hostsApi;

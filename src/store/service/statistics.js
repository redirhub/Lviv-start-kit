import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang, getWorkspaceId } from '@/utils';

export const statisticsApi = createApi({
    reducerPath: 'statistics-api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE,
        credentials: 'include',
        prepareHeaders: headers => {
            headers.set('Authorization', getAuthToken());
            headers.set('Workspace', getWorkspaceId());
            headers.set('Accept-Language', getLang());
            return headers;
        }
    }),
    tagTypes: ['getVisitors', 'getBreakdown', 'getDashboard', 'getTotal', 'getClicks'],
    endpoints: (builder) => ({
        fetchAnything: builder.query({
            query(path)  {
                return path;
            }
        }),
        getVisitors: builder.query({
            query: (params) => {
                return {
                    url: 'statistics/visits',
                    params
                };
            },
            keepUnusedDataFor: 30,
            transformResponse: (response) => response.hits,
            providesTags: (_) => [{ type: 'getVisitors', id: 'getVisitors' }],
        }),
        getBreakdown: builder.query({
            query: (params) => {
                return {
                    url: 'statistics/breakdown',
                    params
                };
            },
            keepUnusedDataFor: 60,
            transformResponse: (response) => response,
            providesTags: (_) => [{ type: 'getBreakdown', id: 'getBreakdown' }],
        }),
        getDashboard: builder.query({
            query: (params) => ({
                url: 'statistics/dashboard',
                params
            }),
            keepUnusedDataFor: 60,
            transformResponse: (response) => response.buckets,
            providesTags: (_) => [{ type: 'getDashboard', id: 'getDashboard' }],
        }),
        getTotal: builder.query({
            query: (params) => ({
                url: 'statistics/total',
                params
            }),
            keepUnusedDataFor: 60,
            providesTags: (_) => [{ type: 'getTotal', id: 'getTotal' }],
        }),
        getClicks: builder.query({
            query: (params) => ({
                url: 'statistics/clicks',
                params
            }),
            keepUnusedDataFor: 60,
            transformResponse: (response) => response.buckets,
            providesTags: (_) => [{ type: 'getClicks', id: 'getClicks' }],
        }),
    }),
});

export const {
    useGetTotalQuery,
    useGetVisitorsQuery,
    useGetBreakdownQuery,
    useGetDashboardQuery,
    useGetClicksQuery,
} = statisticsApi;


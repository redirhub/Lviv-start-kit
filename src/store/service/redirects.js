import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang, getWorkspaceId } from '@/utils';

export const redirectsApi = createApi({
    reducerPath: 'redirects-api',
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
    tagTypes: ['getRedirects', 'getRedirectById', 'updateRedirect', 'getTypes', 'getCount', 'tags', 'getPlugins'],
    endpoints: (builder) => ({
        getTags:  builder.query({
            query: () => 'redirect/tags',
            providesTags: () => [{ type: 'tags', id: 'tags' }]
        }),
        fetchAnything: builder.query({
            query(path) {
                return path;
            }
        }),
        getCount: builder.query({
            query: ( _obj ) => {
                const params = JSON.parse(JSON.stringify( _obj ));
                for( let key in params ) {
                    if ( ! params[key] || ( Array.isArray( params[key] ) && ! params[key]?.length ) ) {
                        delete params[key];
                    }
                }
                return {
                    url: 'redirect/count',
                    params
                };
            },
            providesTags: (_) => [{ type: 'getCount', id: 'getCount' }],
        }),
        getTypes: builder.query({
            query: () => 'shared/types',
            providesTags: (_) => [{ type: 'getTypes', id: 'getTypes' }],
        }),
        getPlugins: builder.query({
            query: () => 'shared/plugins',
            providesTags: (_) => [{ type: 'getPlugins', id: 'getPlugins' }],
        }),
        getRedirects: builder.query({
            query: ( _obj ) => {

                const params = JSON.parse(JSON.stringify( _obj ));

                for( let key in params ) {
                    if ( ! params[key] || ( Array.isArray( params[key] ) && ! params[key]?.length ) ) {
                        delete params[key];
                    }
                }

                return {
                    url: 'redirect',
                    params
                };
            },
            providesTags: (_) => [{ type: 'getRedirects', id: 'getRedirects' }]
        }),
        getRedirectById: builder.query({
            query(id) {
                return `redirect/${id}`;
            },
            providesTags: (_) => [{ type: 'getRedirectById', id: 'getRedirectById' }],
        }),
        getListClicks: builder.mutation({
            query: ({ ...payload }) => ({
                url: 'statistics/files',
                method: 'POST',
                body: payload
            }),
            providesTags: (_) => [{ type: 'getListClicks', id: 'getListClicks' }],
        }),
        updateRedirect: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: `redirect/${id}`,
                method: 'PUT',
                body: payload
            }),
            invalidatesTags: [ 'getRedirects', 'getRedirectById', 'tags' ],
            providesTags: (_) => [{ type: 'updateRedirect', id: 'getRedirects' }],
        }),
        bulkDeleteRedirect: builder.mutation({
            query: (payload) => ({
                url: 'bulk',
                method: 'DELETE',
                body: payload
            }),
            invalidatesTags: [ 'getRedirects', 'getRedirectById', 'getCount', 'tags' ],
        }),
        bulkExport: builder.mutation({
            query: (payload) => ({
                url: 'bulk/export',
                method: 'POST',
                responseHandler: (response) => response.text(),
                body: payload
            }),
        }),
        bulkUpdateRedirect: builder.mutation({
            query: (payload) => ({
                url: 'bulk',
                method: 'PUT',
                body: payload
            }),
            invalidatesTags: [ 'getRedirects', 'getRedirectById', 'getCount', 'tags' ],
        }),
        createRedirect: builder.mutation({
            query(payload) {
                return {
                    url: 'redirect',
                    method: 'POST',
                    body: payload
                };
            },
            invalidatesTags: ['getRedirects', 'getCount'],
        }),
        importPreview: builder.mutation({
            query(payload) {
                return {
                    url: 'bulk/import_preview',
                    method: 'POST',
                    body: payload
                };
            }
        }),
        bulkImport: builder.mutation({
            query(payload) {
                return {
                    url: 'bulk/import',
                    method: 'POST',
                    body: payload
                };
            },
            invalidatesTags: ['getRedirects', 'getCount'],
        }),
        aliasRecommendation: builder.mutation({
            query(payload) {
                return {
                    url: 'recommendation/alias',
                    method: 'POST',
                    body: payload
                };
            },
        }),
    }),
});

export const {
    useGetTagsQuery,
    useGetCountQuery,
    useGetTypesQuery,
    useGetPluginsQuery,
    useAliasRecommendationMutation,
    useBulkDeleteRedirectMutation,
    useGetListClicksMutation,
    useBulkExportMutation,
    useBulkUpdateRedirectMutation,
    useGetRedirectsQuery,
    useGetRedirectByIdQuery,
    useUpdateRedirectMutation,
    useCreateRedirectMutation,
    useImportPreviewMutation,
    useBulkImportMutation,
} = redirectsApi;


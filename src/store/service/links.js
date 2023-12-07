import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang, getWorkspaceId } from '@/utils';

export const linksApi = createApi({
    reducerPath: 'links-api',
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
    tagTypes: ['getLinks', 'getLinkById', 'hosts', 'getCount', 'tags'],
    endpoints: (builder) => ({
        getTags:  builder.query({
            query: () => 'link/tags',
            providesTags: () => [{ type: 'tags', id: 'tags' }]
        }),
        getHostLinks: builder.query({
            query: () => 'host/links',
            providesTags: (_) => [{ type: 'hosts', id: 'hosts' }],
        }),
        getCount: builder.query({
            // query: () => 'link/count',
            query: ( _obj ) => {

                const params = JSON.parse(JSON.stringify( _obj ));

                for( let key in params ) {
                    if ( ! params[key] || ( Array.isArray( params[key] ) && ! params[key]?.length ) ) {
                        delete params[key];
                    }
                }

                return {
                    url: 'link/count',
                    params
                };
            },
            providesTags: (_) => [{ type: 'getCount', id: 'getCount' }],
        }),
        getLinks: builder.query({
            query: ( _obj ) => {

                const params = JSON.parse(JSON.stringify( _obj ));

                for( let key in params ) {
                    if ( ! params[key] || ( Array.isArray( params[key] ) && ! params[key]?.length ) ) {
                        delete params[key];
                    }
                }

                return {
                    url: 'link',
                    params
                };
            },
            providesTags: (_) => [{ type: 'getLinks', id: 'getLinks' }],
        }),
        getLinkById: builder.query({
            query( id) {
                return `link/${ id }`;
            },
            providesTags: (_) => [{ type: 'getLinkById', id: 'getLinkById' }],
        }),
        bulkDeleteLinks: builder.mutation({
            query: ( payload ) => ({
                url: 'bulk',
                method: 'DELETE',
                body: payload
            }),
            invalidatesTags: [ 'getLinks', 'getLinkById', 'getCount', 'tags' ],
        }),
        createLink: builder.mutation({
            query: ( payload ) => ({
                url: 'link',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: (result, error) => error ? [] : ['getLinks', 'getCount', 'tags', 'hosts'],
        }),
        createCustomLink: builder.mutation({
            query: ( payload ) => ({
                url: 'host/links',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: (result, error) => error ? [] : ['hosts'],
        }),
        updateLink: builder.mutation({
            query( { id, ...payload } ) {
                return {
                    url: `link/${id}`,
                    method: 'PUT',
                    body: payload
                };
            },
            invalidatesTags: ['getLinks', 'getLinkById', 'tags'],
        })
    }),
});

export const {
    useGetTagsQuery,
    useGetCountQuery,
    useUpdateLinkMutation,
    useCreateLinkMutation,
    useCreateCustomLinkMutation,
    useGetHostLinksQuery,
    useGetLinksQuery,
    useLazyGetLinkByIdQuery,
    useGetLinkByIdQuery,
    useBulkDeleteLinksMutation,
} = linksApi;

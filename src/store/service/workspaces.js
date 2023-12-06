import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang, getWorkspaceId } from '@/utils';

export const workspacesApi = createApi({
    reducerPath: 'workspaces-api',
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
    tagTypes: ['getWorkspaces', 'getWorkspaceById', 'getMembers', 'getMemberRoles'],
    endpoints: (builder) => ({
        getWorkspaces: builder.query({
            query: () => 'workspace',
            transformResponse: (response) => response.data,
            providesTags: (_) => [{ type: 'getWorkspaces', id: 'getWorkspaces' }],
        }),
        getWorkspaceById: builder.query({
            query: (id) => `workspace/${id}`,
            providesTags: (_) => [{ type: 'getWorkspaceById', id: 'getWorkspaceById' }],
        }),
        updateCurrentWorkspace: builder.mutation({
            query: (payload) => ({
                url: 'account/update/current_workspace',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['getMembers'],
        }),
        updateWorkspace: builder.mutation({
            query: ({ field, ...payload }) => ({
                url: 'workspace/update/' + field,
                method: 'POST',
                body: payload
            }),
        }),
        uploadAvatar: builder.mutation({
            query: (payload) => ({
                url: 'workspace/avatar',
                method: 'POST',
                body: payload
            }),
        }),
        deleteWorkspace: builder.mutation({
            query: () => ({
                url: 'workspace',
                method: 'DELETE',
            }),
            invalidatesTags: ['getWorkspaces', 'getMembers'],
        }),
        getMembers: builder.query({
            query: (id) => 'workspace/member?workspace_id=' + id,
            providesTags: (_) => [{ type: 'getMembers', id: 'getMembers' }],
        }),
        getMemberRoles: builder.query({
            query: () => 'workspace/member/roles',
            providesTags: (_) => [{ type: 'getMemberRoles', id: 'getMemberRoles' }],
        }),
        deleteMember: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: 'workspace/member/' + id,
                method: 'DELETE',
                body: payload
            }),
            invalidatesTags: ['deleteMember'],
        }),
        inviteMember: builder.mutation({
            query: (payload) => ({
                url: 'workspace/member',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['getMembers'],
        }),
        deleteMemberInvite: builder.mutation({
            query: ({ id, ...payload }) => ({
                url: 'workspace/invitation/' + id,
                method: 'DELETE',
                body: payload
            }),
            invalidatesTags: ['getMembers'],
        }),
        leaveWorkspaceForMember: builder.mutation({
            query: () => ({
                url: 'workspace/member/leave',
                method: 'DELETE',
            }),
            invalidatesTags: ['getWorkspaces'],
        }),
        createWorkspace: builder.mutation({
            query: (payload) => ({
                url: 'workspace',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['getWorkspaces'],
        }),
    }),
});

export const {
    useGetWorkspacesQuery,
    useGetWorkspaceByIdQuery,
    useUpdateCurrentWorkspaceMutation,
    useUpdateWorkspaceMutation,
    useUploadAvatarMutation,
    useDeleteWorkspaceMutation,
    useGetMembersQuery,
    useGetMemberRolesQuery,
    useDeleteMemberMutation,
    useInviteMemberMutation,
    useDeleteMemberInviteMutation,
    useLeaveWorkspaceForMemberMutation,
    useCreateWorkspaceMutation,
} = workspacesApi;

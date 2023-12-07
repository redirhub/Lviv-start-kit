import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';

export const authApi = createApi({
    reducerPath: 'auth-api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE,
        credentials: 'include',
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (payload) => ({
                url: '/auth/register',
                method: 'POST',
                body: payload,
            }),
        }),
        login: builder.mutation({
            query: (payload) => ({
                url: '/auth/login',
                method: 'POST',
                body: payload,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),
        resetEmail: builder.mutation({
            query: (payload) => ({
                url: '/password/email',
                method: 'POST',
                body: payload,
            }),
        }),
        resetPassword: builder.mutation({
            query: (payload) => ({
                url: '/password/reset',
                method: 'POST',
                body: payload,
            }),
        }),
        twoFactorChallenge: builder.mutation({
            query: (payload) => ({
                url: '/auth/two-factor-challenge',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useResetEmailMutation,
    useResetPasswordMutation,
    useLogoutMutation,
    useTwoFactorChallengeMutation,
} = authApi;

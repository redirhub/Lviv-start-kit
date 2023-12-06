import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang } from '@/utils';

export const accountsApi = createApi({
    reducerPath: 'accounts-api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE,
        credentials: 'include',
        prepareHeaders: headers => {
            headers.set('Authorization', getAuthToken());
            headers.set('Accept-Language', getLang());
            return headers;
        }
    }),
    tagTypes: [
        'getCurrentAccount',
        'getCountries',
        'getTimezonesByCountry',
        'getPlatforms',
        'getAvailableConnections',
        'getTokens'
    ],
    endpoints: (builder) => ({
        getConfirmedPassword: builder.query({
            query: () => '/account/confirmed-password-status',
            transformResponse: (response) => response.confirmed,
            providesTags: (_) => [{ type: 'getConfirmedPassword', id: 'getConfirmedPassword' }],
            keepUnusedDataFor: 120,
        }),
        confirmPassword: builder.mutation({
            query: (payload) => ({
                url: '/account/confirm-password',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['getConfirmedPassword'],
        }),
        changePassword: builder.mutation({
            query: (payload) => ({
                url: '/account/password',
                method: 'POST',
                body: payload
            }),
        }),
        getCurrentAccount: builder.query({
            query: () => '/account',
            providesTags: (_) => [{ type: 'getCurrentAccount', id: 'getCurrentAccount' }],
        }),
        getCountries: builder.query({
            query: () => '/config/countries',
            providesTags: (_) => [{ type: 'getCountries', id: 'getCountries' }],
        }),
        getPlatforms: builder.query({
            query: () => '/config/platform',
            providesTags: (_) => [{ type: 'getPlatforms', id: 'getPlatforms' }],
        }),
        getTimezonesByCountry: builder.mutation({
            query: (country) => ({
                url: '/config/timezones/' + country,
                method: 'GET',
            }),
            providesTags: (_) => [{ type: 'getTimezonesByCountry', id: 'getTimezonesByCountry' }],
        }),
        getAvailableConnections: builder.query({
            query: () => '/account/connections',
            providesTags: (_) => [{ type: 'getAvailableConnections', id: 'getAvailableConnections' }],
        }),
        getTokens: builder.query({
            query: () => '/account/token',
            providesTags: (_) => [{ type: 'getTokens', id: 'getTokens' }],
        }),
        createToken: builder.mutation({
            query: (payload) => ({
                url: '/account/token',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['getTokens'],
        }),
        deleteToken: builder.mutation({
            query: (id) => ({
                url: 'account/token/' + id,
                method: 'DELETE',
            }),
            invalidatesTags: ['getTokens'],
        }),
        deleteConnection: builder.mutation({
            query: (provider) => ({
                url: 'account/disconnect/' + provider,
                method: 'POST',
            }),
            invalidatesTags: ['getCurrentAccount'],
        }),
        getTwoFACodes: builder.mutation({
            query: () => ({
                url: 'account/two-factor-recovery-codes',
                method: 'POST',
            }),
        }),
        disbaleTwoFA: builder.mutation({
            query: () => ({
                url: 'account/two-factor-authentication',
                method: 'DELETE',
            }),
        }),
        enableTwoFA: builder.query({
            query: () => ({
                url: 'account/two-factor-authentication',
                method: 'GET',
            }),
        }),
        verifyTwoFA: builder.mutation({
            query: (payload) => ({
                url: 'account/two-factor-authentication',
                method: 'POST',
                body: payload
            }),
        }),
        updateProfile: builder.mutation({
            query: ({ field, ...payload }) => ({
                url: 'account/update/' + field,
                method: 'POST',
                body: payload
            }),
        }),
        uploadAvatar: builder.mutation({
            query: (payload) => ({
                url: 'account/avatar',
                method: 'POST',
                body: payload
            }),
        }),
        sendMobileVerificationCode: builder.mutation({
            query: (payload) => ({
                url: 'account/mobile/send',
                method: 'POST',
                body: payload
            }),
        }),
        verifyMobileCode: builder.mutation({
            query: (payload) => ({
                url: 'account/mobile/verify',
                method: 'POST',
                body: payload
            }),
        }),
        deleteAccount: builder.mutation({
            query: (payload) => ({
                url: 'account',
                method: 'DELETE',
                body: payload
            }),
        }),
        verifyEmail: builder.mutation({
            query: (payload) => ({
                url: 'account/verify/email',
                method: 'POST',
                body: payload
            }),
        }),
        changeEmail: builder.mutation({
            query: (payload) => ({
                url: 'account/update/email',
                method: 'POST',
                body: payload
            }),
        }),
        requestFeature: builder.mutation({
            query: (payload) => ({
                url: 'config/request_feature',
                method: 'POST',
                body: {
                    content: payload,
                }
            }),
        }),
    }),
});

export const {
    useGetConfirmedPasswordQuery,
    useConfirmPasswordMutation,
    useChangePasswordMutation,
    useCreateTokenMutation,
    useGetCountriesQuery,
    useGetPlatformsQuery,
    useGetTimezonesByCountryMutation,
    useGetCurrentAccountQuery,
    useGetAvailableConnectionsQuery,
    useGetTokensQuery,
    useGetTwoFACodesMutation,
    useDisbaleTwoFAMutation,
    useEnableTwoFAQuery,
    useVerifyTwoFAMutation,
    useDeleteTokenMutation,
    useDeleteConnectionMutation,
    useUpdateProfileMutation,
    useUploadAvatarMutation,
    useSendMobileVerificationCodeMutation,
    useVerifyMobileCodeMutation,
    useDeleteAccountMutation,
    useVerifyEmailMutation,
    useChangeEmailMutation,
    useRequestFeatureMutation,
} = accountsApi;

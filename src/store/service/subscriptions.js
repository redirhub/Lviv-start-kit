import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE } from '@/config/constant';
import { getAuthToken, getLang, getWorkspaceId } from '@/utils';

export const subscriptionsApi = createApi({
    reducerPath: 'subscriptions-api',
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
    tagTypes: ['getInvoice', 'getPaymentCard', 'getPlanList', 'eligibleStatus', 'productSubscriptions', 'getPlanCompare'],
    endpoints: (builder) => ({
        placeOrder: builder.query({
            query: (payload) => {
                return {
                    url: 'order',
                    method: 'POST',
                    body: payload
                };
            },
            providesTags: (_) => [{ type: 'placeOrder', id: 'placeOrder' }]
        }),
        makeOrder: builder.mutation({
            query(payload) {
                return {
                    url: 'order',
                    method: 'POST',
                    body: payload
                };
            },
            invalidatesTags: (result, error) => error ? [] : ['productSubscriptions'],
        }),
        checkoutURL: builder.query({
            query: (payload) => {
                return {
                    url: 'subscription/checkout',
                    method: 'POST',
                    body: payload
                };
            },
            providesTags: (_) => [{ type: 'checkoutURL', id: 'checkoutURL' }]
        }),
        verifyGiftcard: builder.mutation({
            query(payload) {
                return {
                    url: 'order/discount',
                    method: 'POST',
                    body: payload
                };
            },
            invalidatesTags: (result, error) => error ? [] : ['getPaymentCard'],
        }),
        getOrder: builder.query({
            query: (id) => 'order/' + id,
            providesTags: (_) => [{ type: 'getOrder', id: 'getOrder' }]
        }),
        getOrderWechatQR: builder.query({
            query: (id) => 'order/' + id + '/wechat_pay_qr',
            providesTags: (_) => [{ type: 'getOrderWechatQR', id: 'getOrderWechatQR' }]
        }),
        getOrderAlipay: builder.query({
            query: (id) => 'order/' + id + '/alipay_pay',
            providesTags: (_) => [{ type: 'getOrderAlipay', id: 'getOrderAlipay' }]
        }),
        subscribePlan: builder.mutation({
            query(payload) {
                return {
                    url: 'subscription/due',
                    method: 'POST',
                    body: payload
                };
            },
            invalidatesTags: (result, error) => error ? [] : ['productSubscriptions'],
        }),
        getPlanList: builder.query({
            query: (plan) => {
                return 'plan/' + plan;
            },
            transformResponse: (response) => response.data,
            providesTags: (_) => [{ type: 'getPlanList', id: 'getPlanList' }]
        }),
        getPlanCompare: builder.query({
            query: (param) => {
                return 'plan/comparison/' + param;
            },
            providesTags: (_) => [{ type: 'getPlanCompare', id: 'getPlanCompare' }]
        }),
        getEligibleStatus: builder.query({
            query: (product) => 'order/trial_eligible?product=' + product,
            transformResponse: (response) => response.eligible,
            providesTags: (_) => [{ type: 'eligibleStatus', id: 'eligibleStatus' }]
        }),
        getProductSubscriptions: builder.query({
            query: () => 'workspace/product_subscriptions',
            providesTags: (_) => [{ type: 'productSubscriptions', id: 'productSubscriptions' }]
        }),
        getInvoice: builder.query({
            query: () => 'invoice',
            providesTags: (_) => [{ type: 'getInvoice', id: 'getInvoice' }],
        }),
        getPaymentCard: builder.query({
            query: () => 'subscription/card',
            providesTags: (_) => [{ type: 'getPaymentCard', id: 'getPaymentCard' }]
        }),
        addPaymentCard: builder.mutation({
            query(payload) {
                return {
                    url: 'subscription/card',
                    method: 'POST',
                    body: payload
                };
            },
            invalidatesTags: (result, error) => error ? [] : ['getPaymentCard'],
        }),
        cancelPlan: builder.mutation({
            query( id ) {
                return {
                    url: 'subscription/cancel',
                    method: 'POST',
                    body: { product: id }
                };
            },
            invalidatesTags: (result, error) => error ? [] : ['productSubscriptions'],
        }),
        resumePlan: builder.mutation({
            query( id ) {
                return {
                    url: 'subscription/resume',
                    method: 'POST',
                    body: { product: id }
                };
            },
            invalidatesTags: (result, error) => error ? [] : ['productSubscriptions'],
        })
    }),
});

export const {
    usePlaceOrderQuery,
    useMakeOrderMutation,
    useCheckoutURLQuery,
    useVerifyGiftcardMutation,
    useGetOrderQuery,
    useGetOrderWechatQRQuery,
    useGetOrderAlipayQuery,
    useSubscribePlanMutation,
    useAddPaymentCardMutation,
    useGetInvoiceQuery,
    useGetPaymentCardQuery,
    useGetEligibleStatusQuery,
    useGetPlanListQuery,
    useGetProductSubscriptionsQuery,
    useGetPlanCompareQuery,
    useCancelPlanMutation,
    useResumePlanMutation
} = subscriptionsApi;

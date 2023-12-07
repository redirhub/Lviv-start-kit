
export const PRODUCTS = {
    REDIRECT: 'redirect',
    REDIRECTS: 'redirects',
    LINK: 'short-url',
    MONITOR: 'monitor',
};

export const PRODUCT_NAME = {
    [PRODUCTS.REDIRECTS]: 'redirect',
    [PRODUCTS.LINK]: 'short-url',
    [PRODUCTS.MONITOR]: 'monitor',
};

export const subscriptionstabs = [
    {
        name: 'Plans',
        key: 'plans',
        path: '/plan/redirect'
    },
    {
        name: 'Billings',
        key: 'billings',
        path: '/subscriptions'
    },
    {
        name: 'History',
        key: 'history',
        path: '/subscriptions/history'
    }
];

export const subscriptionschdtabs = [
    {
        name: 'redirects',
        key: 'redirect',
        path: '/plan/redirect'
    },
    {
        name: 'short-url',
        key: 'short-url',
        path: '/plan/short-url'
    },
    {
        name: 'monitor',
        key: 'monitor',
        path: '/plan/monitor'
    }
];

export const subscriptionsproducttabs = [
    {
        name: 'Basic',
        key: 'basic',
        path: '/plan/basic'
    },
    {
        name: 'Pro',
        key: 'pro',
        path: '/plan/pro'
    },
    {
        name: 'Business',
        key: 'business',
        path: '/plan/business'
    },
    {
        name: 'Enterprise',
        key: 'enterprise',
        path: '/plan/enterprise'
    }
];

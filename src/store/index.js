import auth from './slices/auth';
import accounts from './slices/accounts';
import clusters from './slices/clusters';
import hosts from './slices/hosts';
import redirects from './slices/redirects';
import statistics from './slices/statistics';
import links from './slices/links';
import options from './slices/options';
import workspaces from './slices/workspaces';
import error from './slices/error';
import { authApi } from './service/auth';
import { accountsApi } from './service/accounts';
import { clustersApi } from './service/clusters';
import { rtkQueryErrorLogger } from './middleware/errorHandle';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { hostsApi } from '@/store/service/hosts';
import { redirectsApi } from '@/store/service/redirects';
import { linksApi } from '@/store/service/links';
import { statisticsApi } from '@/store/service/statistics';
import { workspacesApi } from '@/store/service/workspaces';
import { subscriptionsApi } from '@/store/service/subscriptions';

export default configureStore({
    reducer: {
        auth,
        accounts,
        clusters,
        hosts,
        links,
        options,
        redirects,
        statistics,
        workspaces,
        error,
        [authApi.reducerPath]: authApi.reducer,
        [accountsApi.reducerPath]: accountsApi.reducer,
        [clustersApi.reducerPath]: clustersApi.reducer,
        [hostsApi.reducerPath]: hostsApi.reducer,
        [linksApi.reducerPath]: linksApi.reducer,
        [redirectsApi.reducerPath]: redirectsApi.reducer,
        [statisticsApi.reducerPath]: statisticsApi.reducer,
        [workspacesApi.reducerPath]: workspacesApi.reducer,
        [subscriptionsApi.reducerPath]: subscriptionsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(
                authApi.middleware,
                accountsApi.middleware,
                clustersApi.middleware,
                hostsApi.middleware,
                linksApi.middleware,
                redirectsApi.middleware,
                statisticsApi.middleware,
                workspacesApi.middleware,
                subscriptionsApi.middleware,
            )
            .concat(rtkQueryErrorLogger);
    },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

import { subscriptionsApi } from '../service/subscriptions';

export function clearSubscriptionsApiCache() {
    return async (dispatch) => {
        try {
            dispatch(subscriptionsApi.util.resetApiState());
        } catch (error) {
            console.error('Subscriptions API cache clear Error', error);
        }
    };
}

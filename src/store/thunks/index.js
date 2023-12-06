import { clearClustersApiCache } from './clusters';
import { clearHostApiCache } from './hosts';
import { clearLinksApiCache } from './links';
import { clearRedirectsApiCache } from './redirects';
import { clearStatisticsApiCache } from './statistics';
import { clearSubscriptionsApiCache } from './subscriptions';

export function clearAllApiCache() {
    return async (dispatch) => {
        try {
            dispatch(clearClustersApiCache());
            dispatch(clearHostApiCache());
            dispatch(clearLinksApiCache());
            dispatch(clearRedirectsApiCache());
            dispatch(clearStatisticsApiCache());
            dispatch(clearSubscriptionsApiCache());
        } catch (error) {
            console.error('All API cache clear Error', error);
        }
    };
}

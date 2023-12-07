import { paginationReset } from '@/store/slices/clusters';
import { clustersApi } from '@/store/service/clusters';

export function clearClustersApiCache() {
    return async (dispatch) => {
        try {
            dispatch(clustersApi.util.resetApiState());
            dispatch(paginationReset());
        } catch (error) {
            console.error('Clusters API cache clear Error', error);
        }
    };
}

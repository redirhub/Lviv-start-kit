import { paginationReset } from '@/store/slices/hosts';
import { hostsApi } from '@/store/service/hosts';

export function clearHostApiCache() {
    return async (dispatch) => {
        try {
            dispatch(hostsApi.util.resetApiState());
            dispatch(paginationReset());
        } catch (error) {
            console.error('Host API cache clear Error', error);
        }
    };
}

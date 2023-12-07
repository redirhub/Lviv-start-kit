import { paginationReset } from '@/store/slices/links';
import { linksApi } from '@/store/service/links';

export function clearLinksApiCache() {
    return async (dispatch) => {
        try {
            dispatch(linksApi.util.resetApiState());
            dispatch(paginationReset());
        } catch (error) {
            console.error('Links API cache clear Error', error);
        }
    };
}

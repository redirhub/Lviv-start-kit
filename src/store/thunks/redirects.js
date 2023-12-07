import { paginationReset } from '@/store/slices/redirects';
import { redirectsApi } from '@/store/service/redirects';

export function clearRedirectsApiCache() {
    return async (dispatch) => {
        try {
            dispatch(redirectsApi.util.resetApiState());
            dispatch(paginationReset());
        } catch (error) {
            console.error('Redirects API cache clear Error', error);
        }
    };
}

export function clearLangBasedApiCache() {
    return async () => {
        try {
            // clear getTags cache

        } catch (error) {
            console.error('Redirects API cache clear Error', error);
        }
    };
}

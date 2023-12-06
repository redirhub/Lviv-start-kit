import { resetCurrentAccount } from '@/store/slices/accounts';
import { accountsApi } from '@/store/service/accounts';

export function clearAccountsApiCache() {
    return async (dispatch) => {
        try {
            dispatch(accountsApi.util.resetApiState());
            dispatch(resetCurrentAccount());
        } catch (error) {
            console.error('Accounts API cache clear Error', error);
        }
    };
}

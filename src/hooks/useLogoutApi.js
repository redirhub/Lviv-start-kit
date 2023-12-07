import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/store';
import { useLogoutMutation } from '@/store/service/auth';
import { setLoginUser } from '@/store/slices/auth';
import { useGetCurrentAccountQuery } from '@/store/service/accounts';
import { setWorkspaceId } from '@/utils';
import { clearAllApiCache } from '@/store/thunks';
import { clearAccountsApiCache } from '@/store/thunks/accounts';

export default function useLogoutApi() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [logout, { isSuccess, ...props }] = useLogoutMutation();
    const { refetch } = useGetCurrentAccountQuery();

    useEffect(() => {
        if (isSuccess) {

            dispatch(clearAllApiCache());
            dispatch(clearAccountsApiCache());
            dispatch(setLoginUser({}));
            setWorkspaceId(null);
            refetch().then(() => {
                router.push('/login');
            });
        }
    }, [isSuccess]);

    return [logout, { isSuccess, ...props }];
}

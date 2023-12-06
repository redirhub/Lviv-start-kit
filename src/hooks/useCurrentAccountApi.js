import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useGetCurrentAccountQuery } from '@/store/service/accounts';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function useCurrentAccountApi() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const workspace = window.sessionStorage.getItem('workspace');
    const { data: currentAccount, ...props } = useGetCurrentAccountQuery(undefined, {
        skip: Boolean(workspace) && user?.id
    });

    if (workspace && !user?.current_workspace) {
        dispatch(setCurrentAccount({ current_workspace: workspace }));
    }

    useEffect(() => {
        if (currentAccount) {
            window.sessionStorage.setItem('workspace', currentAccount.current_workspace);
            dispatch(setCurrentAccount(currentAccount));
        }
    }, [currentAccount]);

    return { data: currentAccount, ...props };
}

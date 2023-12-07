import { useEffect } from 'react';

import { useAppDispatch } from '@/store';
import { useUpdateCurrentWorkspaceMutation } from '@/store/service/workspaces';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function useUpdateCurrentWorkspaceApi() {
    const dispatch = useAppDispatch();
    const [updateCurrentWorkspace, { data: response, ...props }] = useUpdateCurrentWorkspaceMutation();

    useEffect(() => {
        if (response) {
            dispatch(setCurrentAccount(response));
        }
    }, [response]);

    return [updateCurrentWorkspace, props];
}

import { useMemo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/store';
import { useCreateWorkspaceMutation } from '@/store/service/workspaces';
import { setCurrentAccount } from '@/store/slices/accounts';
import { setWorkspaceId } from '@/utils';

export default function useCreateWorkspaceApi() {
    const dispatch = useDispatch();
    const user = useAppSelector(state => state.accounts.currentAccount);
    const [createWorkspace, response] = useCreateWorkspaceMutation();

    const updatedUser = useMemo(() => {
        if (response?.data) {
            return { ...user, current_workspace: response?.data?.id };
        }
        return user;
    }, [response?.data]);

    useEffect(() => {
        if (updatedUser && response?.data) {
            setWorkspaceId(response?.data?.id);
            dispatch(setCurrentAccount(updatedUser));
        }
    }, [response?.data]);

    return [createWorkspace, response];
}

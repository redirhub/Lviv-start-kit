import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useGetWorkspaceByIdQuery } from '@/store/service/workspaces';
import { setCurrentWorkspace } from '@/store/slices/workspaces';

export default function useGetWorkspaceByIdApi() {
    const dispatch = useAppDispatch();
    const { current_workspace } = useAppSelector((state) => state.accounts.currentAccount);
    const { data: currentWorkspace, ...props } = useGetWorkspaceByIdQuery(current_workspace);

    useEffect(() => {
        if (currentWorkspace) {
            dispatch(setCurrentWorkspace(currentWorkspace));
        }
    }, [currentWorkspace]);

    return { data: currentWorkspace, ...props };
}

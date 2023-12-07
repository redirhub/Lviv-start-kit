import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useUpdateWorkspaceMutation } from '@/store/service/workspaces';
import { setCurrentWorkspace } from '@/store/slices/workspaces';

export default function useUpdateWorkspaceApi() {
    const dispatch = useAppDispatch();
    const workspace = useAppSelector((state) => state.workspaces.currentWorkspace);
    const [updateWorkspace, { data: response, ...props }] = useUpdateWorkspaceMutation();

    const updatedWorkspace = useMemo(() => {
        if (response) {
            return { ...workspace, ...response };
        }
        return workspace;
    }, [response]);

    useEffect(() => {
        if (updatedWorkspace && response) {
            dispatch(setCurrentWorkspace(updatedWorkspace));
        }
    }, [response]);

    return [updateWorkspace, props];
}

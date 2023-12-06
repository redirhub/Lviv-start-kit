import { useToast } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useUploadAvatarMutation } from '@/store/service/workspaces';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function useUploadWorkspaceLogoApi() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const workspace = useAppSelector((state) => state.workspaces.currentWorkspace);
    const [uploadAvatar, response] = useUploadAvatarMutation();

    const updatedUser = useMemo(() => {
        if (response?.data) {
            return { ...workspace, ...response?.data };
        }
        return workspace;
    }, [response?.data]);

    useEffect(() => {
        if (updatedUser && response?.isSuccess) {
            dispatch(setCurrentAccount(updatedUser));
            toast({
                title: 'Logo updated',
                position: 'bottom-right',
                status: 'success',
            });
        }
    }, [response?.isSuccess]);

    return [uploadAvatar, response];
}

import { useToast } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useUploadAvatarMutation } from '@/store/service/accounts';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function useUploadAvatarApi() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const [uploadAvatar, response] = useUploadAvatarMutation();

    const updatedUser = useMemo(() => {
        if (response?.data) {
            return { ...user, ...response?.data };
        }
        return user;
    }, [response?.data]);

    useEffect(() => {
        if (updatedUser && response?.isSuccess) {
            dispatch(setCurrentAccount(updatedUser));
            toast({
                title: 'Avatar updated',
                position: 'bottom-right',
                status: 'success',
            });
        }
    }, [response?.isSuccess]);

    return [uploadAvatar, response];
}

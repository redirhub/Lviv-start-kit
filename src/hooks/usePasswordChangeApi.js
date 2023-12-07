import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useChangePasswordMutation } from '@/store/service/accounts';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function usePasswordChangeApi() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const [changePassword, response] = useChangePasswordMutation();

    useEffect(() => {
        if (user && response?.data) {
            dispatch(setCurrentAccount(response?.data));
        }
    }, [response?.data]);

    useEffect(() => {
        if (response?.isSuccess) {
            toast({
                title: 'Password changed',
                position: 'bottom-right',
                status: 'success',
            });
        }
    }
    , [response?.isSuccess]);

    return [changePassword, response];
}

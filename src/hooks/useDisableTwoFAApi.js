import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useDisbaleTwoFAMutation } from '@/store/service/accounts';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCurrentAccount } from '@/store/slices/accounts';


export default function useDisableTwoFAApi() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const [disbaleTwoFA, response] = useDisbaleTwoFAMutation();

    useEffect(() => {
        if (response?.isSuccess) {
            dispatch(setCurrentAccount({ ...user, two_factor_enabled: false }));
            toast({
                title: 'Two factor authentication disabled',
                position: 'bottom-right',
                status: 'success',
            });
        }
    }, [response?.isSuccess]);

    return [disbaleTwoFA, response];
}

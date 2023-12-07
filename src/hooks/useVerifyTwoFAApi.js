import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useVerifyTwoFAMutation } from '@/store/service/accounts';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCurrentAccount } from '@/store/slices/accounts';


export default function useVerifyTwoFAApi() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const [verifyTwoFA, response] = useVerifyTwoFAMutation();

    useEffect(() => {
        if (response?.isSuccess) {
            dispatch(setCurrentAccount({ ...user, two_factor_enabled: true }));
            toast({
                title: 'Two factor authentication enabled',
                position: 'bottom-right',
                status: 'success',
            });
        }
    }, [response?.isSuccess]);

    return [verifyTwoFA, response];
}

import { useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useVerifyMobileCodeMutation } from '@/store/service/accounts';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function usePhoneVerificationApi() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const [verifyMobileCode, response] = useVerifyMobileCodeMutation();

    const updatedUser = useMemo(() => {
        if (response?.data) {
            return {
                ...user,
                phone_verified: true,
            };
        }
        return user;
    }, [response?.data]);

    useEffect(() => {
        if (updatedUser && response?.data) {
            dispatch(setCurrentAccount(updatedUser));
        }
    }, [response?.data]);

    return [verifyMobileCode, response];
}

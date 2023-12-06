import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useUpdateProfileMutation } from '@/store/service/accounts';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function useUpdateProfileApi() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const [updateProfile, { data: response, ...props }] = useUpdateProfileMutation();

    const updatedUser = useMemo(() => {
        if (response) {
            return { ...user, ...response };
        }
        return user;
    }, [response]);

    useEffect(() => {
        if (updatedUser && response) {
            dispatch(setCurrentAccount(updatedUser));
        }
    }, [response]);

    return [updateProfile, props];
}

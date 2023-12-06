import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useDeleteConnectionMutation } from '@/store/service/accounts';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function useDeleteConnectionApi() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.accounts.currentAccount);
    const [deleteConnection, response] = useDeleteConnectionMutation();

    const updatedUser = useMemo(() => {
        if (response?.data) {
            return { ...user, ...response?.data };
        }
        return user;
    }, [response?.data]);

    useEffect(() => {
        if (updatedUser && response?.isSuccess) {
            dispatch(setCurrentAccount(updatedUser));
        }
    }, [response?.isSuccess]);

    return [deleteConnection, response];
}

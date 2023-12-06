import { useMemo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import useAppToast from '@/hooks/useAppToast';
import { useAppSelector } from '@/store';
import { setTokens } from '@/store/slices/accounts';
import { useDeleteTokenMutation } from '@/store/service/accounts';


export default function useTokenDeleteApi() {
    const dispatch = useDispatch();
    const { deleteRecord } = useAppToast();
    const tokens = useAppSelector(state => state.accounts.tokens);
    const [deleteToken, response] = useDeleteTokenMutation();

    const updatedTokens = useMemo(() =>
        tokens.filter((token) => token.id !== response?.originalArgs)
    , [response?.data]);

    useEffect(() => {
        if (updatedTokens && response?.isSuccess) {
            dispatch(setTokens(updatedTokens));
        }
    }, [response?.isSuccess]);

    useEffect(() => {
        if (response?.isError || response?.isSuccess) {
            deleteRecord(response);
        }
    }, [response?.isError, response?.isSuccess]);

    return [deleteToken, response];
}

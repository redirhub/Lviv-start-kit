import { useMemo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/store';
import { setTokens } from '@/store/slices/accounts';
import { useCreateTokenMutation } from '@/store/service/accounts';


export default function useCreateTokenApi() {
    const dispatch = useDispatch();
    const tokens = useAppSelector(state => state.accounts.tokens);
    const [createToken, response] = useCreateTokenMutation();
    const token = response?.data?.item;

    const updatedTokens = useMemo(() =>
        token ? [token, ...tokens] : tokens
    , [token]);

    useEffect(() => {
        if (updatedTokens && response?.isSuccess) {
            dispatch(setTokens(updatedTokens));
        }
    }, [response?.isSuccess]);

    return [createToken, response];
}

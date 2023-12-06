import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch } from '@/store';
import { useChangeEmailMutation } from '@/store/service/accounts';
import { setCurrentAccount } from '@/store/slices/accounts';

export default function useChangeEmailApi() {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const [changeEmail, response] = useChangeEmailMutation();

    useEffect(() => {
        if (response?.data) {
            dispatch(setCurrentAccount(response?.data));
        }
    }, [response?.data]);

    return [changeEmail, response];
}

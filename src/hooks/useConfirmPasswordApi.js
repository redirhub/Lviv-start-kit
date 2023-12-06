import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { setIsPasswordConfirmed } from '@/store/slices/accounts';
import { useConfirmPasswordMutation } from '@/store/service/accounts';


export default function useConfirmPasswordApi() {
    const dispatch = useDispatch();
    const toast = useToast();
    const [confirmPassword, response] = useConfirmPasswordMutation();
    const confirmed = response?.data?.confirmed;

    useEffect(() => {
        if (confirmed && response?.isSuccess) {
            dispatch(setIsPasswordConfirmed(true));
        }
    }, [response?.isSuccess]);

    return [confirmPassword, response];
}

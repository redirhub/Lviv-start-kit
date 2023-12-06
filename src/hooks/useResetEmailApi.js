import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useResetEmailMutation } from '@/store/service/auth';

export default function useResetEmailApi() {
    const toast = useToast();
    const [resetEmail, response] = useResetEmailMutation();

    useEffect(() => {
        if (response?.data) {
            toast({
                title: response?.data?.message,
                position: 'bottom-right',
                status: 'success',
            });
        }
    }, [response?.data]);

    return [resetEmail, response];
}

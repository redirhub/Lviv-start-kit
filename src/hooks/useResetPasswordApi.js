import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useResetPasswordMutation } from '@/store/service/auth';

export default function useLoginApi() {
    const router = useRouter();
    const toast = useToast();
    const [resetPassword, response] = useResetPasswordMutation();

    useEffect(() => {
        if (response?.data?.message) {
            toast({
                title: response.data.message,
                position: 'bottom-right',
                status: 'success',
            });
            router.push('/login');
        }
    }, [response?.data]);

    useEffect(() => {
        if (response?.isError) {
            toast({
                title: response?.error?.data?.email,
                position: 'bottom-right',
                status: 'error',
            });
        }
    }, [response?.isError]);

    return [resetPassword, response];
}

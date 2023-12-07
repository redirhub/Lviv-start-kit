import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useRegisterMutation } from '@/store/service/auth';

export default function useRegisterApi() {
    const router = useRouter();
    const toast = useToast();
    const [register, response] = useRegisterMutation();

    useEffect(() => {
        if (response?.data) {
            toast({
                title: 'Register success',
                position: 'bottom-right',
                status: 'success',
            });
            router.push('/');
        }
    }, [response?.data]);


    return [register, response];
}

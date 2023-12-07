import { useToast } from '@chakra-ui/react';
import { useVerifyEmailMutation } from '@/store/service/accounts';

export default function useVerifyEmailApi() {
    const toast = useToast();
    const [verifyEmail, response] = useVerifyEmailMutation();

    return [verifyEmail, response];
}

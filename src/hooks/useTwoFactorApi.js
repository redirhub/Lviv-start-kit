import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useTwoFactorChallengeMutation } from '@/store/service/auth';
import { useGetCurrentAccountQuery } from '@/store/service/accounts';

export default function useTwoFactorApi() {
    const router = useRouter();
    const toast = useToast();
    const { t } = useTranslation();
    const [twoFactorChallenge, { isSuccess, ...props }] = useTwoFactorChallengeMutation();
    const { refetch } = useGetCurrentAccountQuery();

    useEffect(() => {
        if (isSuccess) {
            refetch().then(({ data, isSuccess }) => {
                if (!isSuccess) {
                    toast({
                        title: t('account.login-error', 'We could not log you in. Please contact our support'),
                        status: 'error',
                        position: 'bottom-right',
                    });
                }
                dispatch(setLoginUser(data));
                router.push('/');
            });
        }
    }, [isSuccess]);

    return [twoFactorChallenge, { isSuccess, ...props }];
}

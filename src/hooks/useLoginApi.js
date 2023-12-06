import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/store';
import { useLoginMutation } from '@/store/service/auth';
import { useGetCurrentAccountQuery } from '@/store/service/accounts';

export default function useLoginApi() {
    const router = useRouter();
    const toast = useToast();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [login, { isSuccess, data, ...props }] = useLoginMutation();
    const { refetch } = useGetCurrentAccountQuery();

    useEffect(() => {
        if (isSuccess) {
            if (data?.two_factor) {
                router.push('/login?two_factor=true');
            } else {
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
        }
    }, [isSuccess, data]);

    return [login, { isSuccess, data, ...props }];
}

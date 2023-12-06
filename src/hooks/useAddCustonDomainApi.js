import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useCreateCustomLinkMutation } from '@/store/service/links';
import { DNSUrl } from '@/utils';


export default function useAddCustonDomainApi() {

    const { t } = useTranslation();
    const [create, response] = useCreateCustomLinkMutation();
    const router = useRouter();
    const toast = useToast();

    useEffect(() => {
        if (response?.isSuccess) {
            toast({
                title: t('link.domain-added', 'Custom domain successfully created!'),
                position: 'bottom-right',
                status: 'success',
            });
            console.log(response?.data);
            if (!response?.data?.dns_correct) {
                router.push(DNSUrl(response?.data?.host));
            } else {
                router.push('/short-url/new');
            }
        }
    }, [response?.isSuccess]);

    return [create, response];
}

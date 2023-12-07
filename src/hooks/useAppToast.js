import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function useAppToast() {

    const { t } = useTranslation();
    const toast = useToast();

    return {
        deleteRecord(res) {
            if (!res.error) {
                toast({
                    title: t('shared.delete-success', 'Delete successfully'),
                    position: 'bottom-right',
                    status: 'success',
                });
            }
        },
        copied() {
            toast({
                title: t('shared.copied', 'Copied'),
                position: 'top'
            });
        }
    };
}

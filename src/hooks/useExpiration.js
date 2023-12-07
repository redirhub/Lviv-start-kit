import { useTranslation } from 'react-i18next';

export default function useExpiration() {
    const { t } = useTranslation();

    return [
        { label: t('shared.exp-permanent', 'Permanent'), value: 0 },
        { label: t('shared.exp-1-day', '3 day'), value: 3 },
        { label: t('shared.exp-7-day', '7 day'), value: 7 },
        { label: t('shared.exp-1-month', '1 month'), value: 30 },
        { label: t('shared.exp-3-month', '3 month'), value: 90 },
        { label: t('shared.exp-6-month', '6 month'), value: 180 },
        { label: t('shared.exp-1-year', '1 year'), value: 365 },
    ];
};


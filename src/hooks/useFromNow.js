import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export default function useFromNow() {
    const { t } = useTranslation();
    const fromNow = (date) => {

        // return a string like "a few seconds ago" with i18n
        const diff = dayjs().diff(dayjs(date), 'second');
        if (diff < 60) {
            return t('shared.from-seconds', 'a few seconds ago');
        }
        if (diff < 60 * 60) {
            return t('shared.from-minutes', '{{n}} minutes ago', { n: Math.floor(diff / 60) });
        }
        if (diff < 60 * 60 * 24) {
            return t('shared.from-hours', '{{n}} hours ago', { n: Math.floor(diff / 60 / 60) });
        }
        if (diff < 60 * 60 * 24 * 30) {
            return t('shared.from-days', '{{n}} days ago', { n: Math.floor(diff / 60 / 60 / 24) });
        }
        if (diff < 60 * 60 * 24 * 365) {
            return t('shared.from-months', '{{n}} months ago', { n: Math.floor(diff / 60 / 60 / 24 / 30) });
        }
        return t('shared.from-years', '{{n}} years ago', { n: Math.floor(diff / 60 / 60 / 24 / 365) });
    };
    return { fromNow };
}

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Locize from 'i18next-locize-backend';
import detector from 'i18next-browser-languagedetector';

i18n
    .use(Locize)
    .use(detector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        saveMissing: true,
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: process.env.NEXT_PUBLIC_TRANSLATION_URL,
            addPath: process.env.NEXT_PUBLIC_TRANSLATION_MISSING_URL,
            allowedAddOrUpdateHosts: () => process.env.NEXT_PUBLIC_TRANSLATION_MISSING_URL,
            projectId: 'c129fb28-4614-4731-b76e-c6ca068a4f60',
            apiKey: 'ad0d830f-0c5a-4d85-9e67-14a8f69e51fc',
            // reloadInterval: false,
            // version: 'staging',
            referenceLng: 'en',
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;

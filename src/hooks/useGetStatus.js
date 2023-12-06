import { useTranslation } from 'react-i18next';

export default function useGetStatus(data) {
    const { t } = useTranslation();

    const status = data.status;
    let finalResult = {};

    if (status === 'paused') {
        finalResult = {
            status,
            text: t('shared.paused', 'Paused')
        };
    }

    if (status === 'dns_incorrect') {
        finalResult = {
            status,
            text: t('shared.dns-incorrect', 'DNS Incorrect')
        };
    }

    // for future reference: https://redirhub.atlassian.net/jira/software/projects/DAS/boards/4?selectedIssue=DAS-25
    if (status === 'active') {

        finalResult = {
            status,
            text: t('shared.monitoring', 'Monitoring')
        };

        if (!data.is_notify && !data.is_switch_unbroken_destination) {
            finalResult['text'] = t('shared.not-monitoring', 'Not Monitored');
        }

    }

    if (data.is_notify) {
        finalResult['notify'] = t('shared.notify-enabled', 'You will receive notifications if any destination becomes broken');
    } else {
        finalResult['notify'] = t('shared.notify-disabled', 'You won\'t receive notifications if any destination becomes broken');
    }

    if (data.is_switch_unbroken_destination) {
        finalResult['switch'] = t('shared.switch-enabled', 'Destinations will automatically switch to unbroken ones.');
    } else {
        finalResult['switch'] = t('shared.switch-disabled', 'Destinations won\'t automatically switch to unbroken ones.');
    }

    return finalResult;
};


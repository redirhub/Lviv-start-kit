import { useCallback, useEffect, useState } from 'react';

import { Stack, Flex, Box, useToast, Switch } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Dropdown from '@/components/common/Dropdown';
import { Text20W700 } from '@/components/elements/Text20';
import { useAppSelector } from '@/store';
import useUpdateWorkspaceApi from '@/hooks/useUpdateWorkspaceApi';
import { reportFrequencyOptions } from '@/config/workspace';
import { Text16W600 } from '@/components/elements/Text16';

const SummaryAnalytics = () => {
    const toast = useToast();
    const { meta } = useAppSelector((state) => state.workspaces.currentWorkspace);
    const [updateWorkspace, { isLoading: updating, isSuccess }] = useUpdateWorkspaceApi();
    const [workspace, setWorkspace] = useState({});
    const { t } = useTranslation();

    const handleLanguage = useCallback((e) => {
        setWorkspace({ meta: { ...meta, report_frequency: e.target.value } });
        updateWorkspace({ field: 'report_frequency', value: e.target.value });
    }, [workspace]);

    const handleSendToOwnerToggle = useCallback((e) => {
        setWorkspace({ meta: { ...meta, send_to_manager: e.target.checked } });
        updateWorkspace({ field: 'send_to_manager', value: e.target.checked });
    }, [workspace]);

    useEffect(() => {
        if (meta)
            setWorkspace({ meta });
    }, [meta]);

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: 'Report preferences updated',
                position: 'bottom-right',
                status: 'success',
            });
        }
    }, [isSuccess]);

    return (
        <Box mt={6} p={6} bg='white' borderRadius='lg'>
            <Text20W700 color="gray.700">
                {t('settings.report', 'Summary analytics')}
            </Text20W700>
            <Flex mt={4}>
                <Stack spacing={1.5} w='100%'>
                    <Dropdown
                        label={t('settings.report-frequency', 'Report frequency')}
                        placeholder={t('settings.report-default', 'Default (Weekly)')}
                        selected={workspace?.meta?.report_frequency}
                        onChange={handleLanguage}
                        isLoading={updating}
                        options={reportFrequencyOptions} />
                </Stack>
            </Flex>
            <Flex alignItems="center" mt={4}>
                <Switch isChecked={workspace?.meta?.send_to_manager} onChange={handleSendToOwnerToggle} />
                <Text16W600 color="gray.700" ml={3}>
                    {t('settings.report-manager', 'Send analytics to the team managers at same time')}
                </Text16W600>
            </Flex>
        </Box>
    );
};

export default SummaryAnalytics;

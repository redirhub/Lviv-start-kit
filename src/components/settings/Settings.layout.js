import { Box, Tabs, TabPanels, } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import { Tablist } from '@/components/settings/Tablist';
import useSettingTabs from '@/hooks/useSettingTabs';

export function SettingsLayout({
    index = 0,
    children,
    ...props
}) {
    const { t } = useTranslation();
    const settingstabs = useSettingTabs();

    return (
        <>
            <Box mx={{ base: 0, md: '14', xl: '48' }}>
                <PageTitle title={t('shared.settings', 'Settings')} />
                <Tabs mt={8} index={index}>
                    <Tablist tabs={settingstabs} />
                    <TabPanels>
                        {children}
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    );
}

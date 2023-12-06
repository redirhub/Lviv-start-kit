import { useState } from 'react';
import { Box, Checkbox, Flex, Stack, Tooltip } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SwitchContent } from '@/components/SwitchContent';
import InfoIcon from '@/icons/info';
import { CreateTagsMenu } from '@/components/shared/CreateTagsMenu';
import { useGetPluginsQuery } from '@/store/service/redirects';
import { noop } from '@/utils';

export function RedirectsAdvancedSettings({ tags, setTags, plugins, setPlugins = noop, isNotify, setIsNotify, isSwitchUnbroken, setIsSwitchUnbroken, disableSwitchUnbroken, hideTag = false }) {

    const { t } = useTranslation();
    const [ monitor, setMonitor ] = useState( isNotify || isSwitchUnbroken );
    const [ plugin, setPlugin ] = useState( false );
    const { data: allPlugins } = useGetPluginsQuery();

    // @todo: update plugins

    return (
        <Stack spacing={8} direction="column">
            <Stack spacing={4} direction="column">
                <SwitchContent checked={monitor} onChange={setMonitor} name={t('shared.qm', 'Monitor broken URL')}>
                    <Stack direction="column" spacing={4} pb={4}>
                        <Checkbox
                            isChecked={ isNotify }
                            onChange={ () => setIsNotify( ! isNotify ) }
                        >
                            {t('shared.qm-notify', 'Notify me if there is a destination become broken')}
                        </Checkbox>
                        <Flex alignItems="center">
                            <Checkbox
                                disabled={ disableSwitchUnbroken }
                                isChecked={ isSwitchUnbroken }
                                onChange={ () => setIsSwitchUnbroken( ! isSwitchUnbroken ) }
                            >
                                {t('shared.qm-switch', 'Switch to unbroken destination(s) automatically')}
                            </Checkbox>
                            <Tooltip placement="right" label={t('shared.qm-switch-hint', 'At least 2 destinations required')}>
                                <Box cursor={'pointer'}><InfoIcon ml={2} size="16px" /></Box>
                            </Tooltip>
                        </Flex>
                    </Stack>
                </SwitchContent>
                <SwitchContent checked={plugin} onChange={setPlugin} name={t('shared.plugins', 'Plugins and security')}>
                    <Stack direction="column" spacing={4} pb={4}>
                        {allPlugins?.map?.(p => (
                            <Checkbox
                                key={p.id}
                                isChecked={plugins?.includes?.(p.id)}
                                onChange={() => setPlugins(plugins => plugins?.includes?.(p.id) ? plugins?.filter?.(t => t !== p.id) : [...plugins, p.id])}
                            >
                                {p.label}
                            </Checkbox>
                        ))}
                    </Stack>
                </SwitchContent>
            </Stack>
            {!hideTag&& <CreateTagsMenu tags={ tags } setTags={ setTags } />}
        </Stack>
    );
}

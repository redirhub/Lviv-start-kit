import { Box, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SwitchContent } from '@/components/SwitchContent';
import useAppResponsive from '@/hooks/useAppResponsive';
import { noop } from '@/utils';

export function UTMBuilder({ utm = {}, onChange = noop }) {

    const { t } = useTranslation();
    const [utmSwitch, setUtmSwitch] = useState(!Object.keys(utm).some(k => !!utm[k]));

    const { isDesktop } = useAppResponsive();
    const staticUtm = ['source', 'medium', 'campaign', 'term', 'content'];

    const utmKeys = Object.keys(utm);

    useEffect(() => {
        setUtmSwitch(utm && Object.keys(utm).length > 0);
    }, [utm]);

    return (
        <SwitchContent checked={utmSwitch} onChange={setUtmSwitch} name={t('shared.utm-builder', 'UTM builder')}>
            <Box pb={4}>
                <Stack flexWrap={isDesktop ? 'nowrap' : 'wrap'} mb={4} direction="row">
                    {
                        staticUtm.map(m => (
                            <FormControl key={m}>
                                <FormLabel>utm_{m}</FormLabel>
                                <Input onChange={(event) => {
                                    if (event.target.value) {
                                        onChange({ ...utm, [m]: event.target.value });
                                    } else {
                                        const { [m]: _, ...rest } = utm;
                                        onChange(rest);
                                    }
                                }} placeholder={m} value={utm[m]} />
                            </FormControl>
                        ))
                    }
                </Stack>
                <Text mb={2} fontSize="14px" lineHeight="20px" color="gray.700">
                    {t('shared.utm-description', 'We correctly append the UTM string to your destination on every redirect')}
                </Text>
                {utmKeys.filter(k => utm[k]).length > 0 && <Box borderRadius={8} bg="gray.100" py={2} px={3}>
                    <Text color="gray.500">
                        ?{
                            utmKeys
                                .filter(k => utm[k])
                                .map(k => `utm_${k}=${utm[k]}`)
                                .join('&')
                        }
                    </Text>
                </Box>
                }
            </Box>
        </SwitchContent>
    );
}

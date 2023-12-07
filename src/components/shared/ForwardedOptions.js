import { Box, Checkbox, Flex, FormLabel, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import useAppResponsive from '@/hooks/useAppResponsive';

export function ForwardedOptions({ forwardPath, setForwardPath, forwardQuery, setForwardQuery, props }) {

    const { t } = useTranslation();
    const { isDesktop } = useAppResponsive();

    return (
        <Box {...props}>
            <FormLabel color="gray.700" fontWeight="600" lineHeight="24px" fontSize="16px" mb={2}>
                {t('shared.forwarded-options', 'Forwarded Options')}
            </FormLabel>
            <Text color="gray.500" mb={4}>
                {t('shared.forwarded-options-description', 'Choose which parts of the URL to forward to the destination.')}
            </Text>
            <Flex flexWrap={ isDesktop ? 'none' : 'wrap'}>
                <Box pr="20px" flexBasis={ isDesktop ? '50%' : '100%' } width={ isDesktop ? '50%' : '100%' }>
                    <Checkbox isChecked={ forwardPath } onChange={ () => setForwardPath( ! forwardPath) } fontWeight="500">
                        {t('shared.forwarded-options-path', 'Path forwarding')}
                    </Checkbox>
                    <Text mt="2px" color="gray.500" fontSize="16px" pl={8}>
                        {t('shared.forwarded-options-path-description', 'When enabled, a.com/one/two will redirect to b.com/one/two')}
                    </Text>
                </Box>
                <Box pt={ ! isDesktop ? '20px' : 0 } pl={ isDesktop ? '20px' : 0 } flexBasis={ isDesktop ? '50%' : '100%' } width={ isDesktop ? '50%' : '100%' }>
                    <Checkbox isChecked={ forwardQuery } onChange={ () => setForwardQuery( !forwardQuery ) } fontWeight="500">
                        {t('shared.forwarded-options-query', 'Query forwarding')}
                    </Checkbox>
                    <Text mt="2px" color="gray.500" fontSize="16px" pl={8}>
                        {t('shared.forwarded-options-query-description', 'When enabled, a.com/?one=two will redirect to b.com/?one=two')}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}

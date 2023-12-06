import FeatureRequest from '../common/FeatureRequest';
import { Box, Stack, Flex, Spacer } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Button from '@/components/common/Button';
import { Text20W700 } from '@/components/elements/Text20';
import { Text18W600 } from '@/components/elements/Text18';
import { Text16W600 } from '@/components/elements/Text16';
import { Text14W400, Text14W600 } from '@/components/elements/Text14';
import ArrowRightUpPrimaryIcon from '@/icons/arrow-right-up-primary';
import ZapIcon from '@/icons/zap';
import ActivityIcon from '@/icons/activity';
import MessageCircleIcon from '@/icons/message-circle';

export function SettingsNetwork() {
    const { t } = useTranslation();
    return (
        <>
            <Box mt={6} p={6} bg="white" borderRadius="lg">
                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <Text20W700 color="gray.700">
                            {t('settings.network-private', 'Private networks')}
                        </Text20W700>
                        <Text14W400 color="gray.500" mr={6}>
                            {t('settings.network-private-description', 'Create secure connections for your visitors.')}
                            <Text14W600 color="primary.700" as="span" mx={2}>
                                {t('settings.network-private-learn', 'Learn more about Private networks')}
                            </Text14W600>
                            <ArrowRightUpPrimaryIcon />
                        </Text14W400>
                    </Stack>
                    <Flex borderRadius="lg" bg="gray.50" alignItems="center" h="392px" p={{ base: 2, md: 0 }}>
                        <Stack alignItems="center" spacing={6} textAlign="center" w="100%">
                            <ActivityIcon />
                            <Stack spacing={1}>
                                <Text18W600 color="gray.900">
                                    {t('settings.network-private-title', 'Dedicated IP private networks')}
                                </Text18W600>
                                <Text14W400 color="gray.500">
                                    {t('settings.network-private-description', 'Create a private network with a dedicated IP address.')}
                                </Text14W400>
                            </Stack>
                        </Stack>
                    </Flex>
                </Stack>
            </Box>
            <Box mt={10} p={6} bg="white" borderRadius="lg">
                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <Text20W700 color="gray.700">
                            {t('settings.ssl', 'Custom SSL certificates')}
                        </Text20W700>
                        <Text14W400 color="gray.500" mr={6}>
                            {t('settings.ssl-description', 'Custom certificates are meant for Business and Enterprise customers who want to use their own SSL certificates.')}
                        </Text14W400>
                    </Stack>
                    <FeatureRequest id={'CustomSSL'} />
                </Stack>
            </Box>
            <Box mt={10} p={6} bg="white" borderRadius="lg">
                <Stack spacing={6}>
                    <Stack spacing={2}>
                        <Text20W700 color="gray.700">SAML SSO</Text20W700>
                        <Text14W400 color="gray.500" mr={6}>
                            {t('settings.sso-description', 'SSO is an authentication strategy that allows users in your organization to access our platform with one set of credentials.')}
                        </Text14W400>
                    </Stack>
                    <Flex
                        alignItems="center"
                        borderWidth={0.5}
                        borderColor="warning.500"
                        borderRadius="lg"
                        p={{ base: 2, md: 4 }}
                        justifyContent={{ base: 'center', sm: 'flex-start' }}
                        flexWrap={{ base: 'wrap', md: 'nowrap' }}
                        gap={{ base: 4, md: 0 }}
                    >
                        <ZapIcon />
                        <Text16W600 color="gray.700" ml={3}>
                            {t('shared.upgrade-enterprise', 'Upgrade to Enterprise plan to use this feature')}
                        </Text16W600>
                        <Spacer />
                        <Button
                            text={t('shared.lets-chat', 'Let\'s chat')}
                            lefticon={<MessageCircleIcon />}
                            size="sm"
                            colorScheme="Warning"
                        />
                    </Flex>
                </Stack>
            </Box>
        </>
    );
}

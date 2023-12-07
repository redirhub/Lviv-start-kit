import EnterprisePropt from '../subscriptions/upgrade/EnterprisePropt';
import { Modal, ModalContent, ModalOverlay, Box, Stack, Flex, Spacer, IconButton } from '@chakra-ui/react';

import { Trans, useTranslation } from 'react-i18next';
import ActivityIcon from '@/icons/activity';
import { Text14W400 } from '@/components/elements/Text14';
import { Text18W600 } from '@/components/elements/Text18';
import { Text20W700 } from '@/components/elements/Text20';
import CloseIcon from '@/icons/close';


export default function RawDialog({
    disclosure
}) {

    const { t } = useTranslation();
    const { isOpen, onClose } = disclosure;

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(8px)'
            />
            <ModalContent overflowY="auto" overflowX="hidden" maxH="calc(100% - 40px)" w="calc(100% - 40px)" maxW="736px">
                <Box p={6} bg="white" borderRadius="lg">
                    <Stack spacing={6}>
                        <Stack spacing={2}>
                            <Flex alignItems="center">
                                <Text20W700 color="gray.700">
                                    {t('statistics.raw-log', 'RAW Traffic Log')}
                                </Text20W700>
                                <Spacer />
                                <IconButton
                                    onClick={onClose}
                                    color="gray.700"
                                    bg="gray.300"
                                    icon={<CloseIcon size="20px" />}
                                    borderRadius="full"
                                    aria-label="close"
                                />
                            </Flex>
                            <Text14W400 color="gray.500" mr={6}>
                                {t('statistics.raw-log-description', 'Raw traffic logs provides a more detailed insight into your links. The data is split from request to request allows you to do further analysis of the performance of your links.')}
                            </Text14W400>
                        </Stack>
                        <EnterprisePropt />
                        <Flex borderRadius="lg" bg="gray.50" alignItems="center" h="392px">
                            <Stack alignItems="center" spacing={6} textAlign="center" w="100%">
                                <ActivityIcon />
                                <Stack spacing={1}>
                                    <Text18W600 color="gray.900">
                                        {t('statistics.raw-log-pipe', 'Raw Log Pipe')}
                                    </Text18W600>
                                    <Text14W400 color="gray.500" sx={{ maxWidth: 350 }}>
                                        <Trans i18nKey={'statistics.raw-log-pipe-description'} t={t}>
                                            Please contact account manager to configure raw log pipes which can be sent via email or API as a standard Apache format file periodically.
                                        </Trans>
                                    </Text14W400>
                                </Stack>
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>
            </ModalContent>
        </Modal>
    );
}

import { Box, Button, Flex, Stack, Text, Tooltip } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import BellIcon from '@/icons/bell';
import BellOffIcon from '@/icons/bell-off';
import LinkIcon from '@/icons/link';
import LinkOffIcon from '@/icons/link-off';
import PlayIcon from '@/icons/play';
import Settings2Icon from '@/icons/Settings2';
import { AppLink } from '@/components/AppLink';
import { DNSUrl } from '@/utils';

export function PreviewStatus({ p: { status, isLoading, updateIsNotify, updateIsUnbroken, data, onResume } }) {

    const { t } = useTranslation();
    let statusColor = {
        '50': 'success.50',
        '500': 'success.500',
        '700': 'success.700',
        '300': 'success.300',
    };

    if (data.status === 'dns_incorrect' || data.status === 'paused') {
        statusColor = {
            '50': 'error.50',
            '500': 'error.500',
            '700': 'error.700',
            '300': 'error.700',
        };
    }

    return (
        <Flex mr="24px" mt={4} pl="10px" pr="4px" borderRadius={16} alignItems="center" py={1} bg={statusColor['50']}>
            <Box mr="6px" borderRadius="50%" h="6px" w="6px" bg={statusColor['500']} />
            <Text
                pr={3}
                fontWeight="600"
                color={statusColor['700']}
            >
                {status.text}
            </Text>
            <Box width="1px" height="18px" bg={statusColor['300']} />
            <Stack alignItems="center" pl="6px" direction="row" spacing="0">

                {
                    status.status === 'paused' && typeof onResume === 'function' && (
                        <Tooltip placement="top" label="Resume link">
                            <Button isDisabled={isLoading} onClick={onResume} py="0" px="6px" minWidth="0" height="auto" variant="link" position="relative">
                                <PlayIcon color={statusColor['700']} size="16px" />
                            </Button>
                        </Tooltip>
                    )
                }

                {
                    status.status === 'dns_incorrect' && (
                        <AppLink display="inline-flex" href={DNSUrl(data.host)}>
                            <Tooltip placement="top" label={t('shared.fix-dns', 'Please check your DNS setup')}>
                                <Button py="0" px="6px" minWidth="0" height="auto" variant="link" position="relative">
                                    <Settings2Icon color={statusColor['700']} size="14px" />
                                </Button>
                            </Tooltip>
                        </AppLink>
                    )
                }

                {
                    status.status !== 'dns_incorrect' && (
                        <>
                            <Tooltip placement="top" label={status.notify}>
                                <Button isDisabled={isLoading} onClick={updateIsNotify} py="0" px="6px" minWidth="0" height="auto" variant="link" position="relative">
                                    {
                                        data.is_notify ? (
                                            <BellIcon color={statusColor['700']} size="16px" />
                                        ) : (
                                            <BellOffIcon color={statusColor['700']} size="16px" />
                                        )
                                    }

                                </Button>
                            </Tooltip>
                            <Tooltip placement="top" label={status.switch}>
                                <Button isDisabled={isLoading} onClick={updateIsUnbroken} py="0" px="6px" minWidth="0" height="auto" variant="link" position="relative">
                                    {
                                        data.is_switch_unbroken_destination ? (
                                            <LinkIcon color={statusColor['700']} size="16px" />
                                        ) : (
                                            <LinkOffIcon color={statusColor['700']} size="16px" />
                                        )
                                    }
                                </Button>
                            </Tooltip>
                        </>
                    )
                }
            </Stack>
        </Flex >
    );
}

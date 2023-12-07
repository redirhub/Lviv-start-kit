

import { QRCodeToImage } from '../QRCode';
import { InlineEditTitle } from '../InlineEditTitle';
import { Text16 } from '../elements/Text16';
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Spacer,
    Stack,
    Text,
    Textarea,
    CircularProgress,
    useBreakpointValue,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Trans, useTranslation } from 'react-i18next';
import { toUnicode } from 'punycode';
import EditIcon from '@/icons/edit';
import QrCodeIcon from '@/icons/qr-code';
import DangerIcon from '@/icons/danger';
import ClicksIcon from '@/icons/clicks';
import CommandIcon from '@/icons/command';
import RotateIcon from '@/icons/rotate';
import CalendarIcon from '@/icons/calendar';
import LinkExternalIcon from '@/icons/link-external';
import MousePointerIcon from '@/icons/mouse-pointer';
import ArrowDownCircleIcon from '@/icons/arrow-down-circle';
import { Favicon } from '@/components/Favicon';
import { whiteBoxShadow } from '@/common-styles';
import { useGetTypesQuery, useUpdateRedirectMutation } from '@/store/service/redirects';
import { DNSUrl, ensureHttp } from '@/utils';
import { CopyButton } from '@/components/shared/CopyButton';
import { SharedListTags } from '@/components/shared/ListTags';
import useRecordMenu from '@/hooks/useRecordMenu';
import { SharedMoreActions } from '@/components/shared/MoreActions';
import useAppResponsive from '@/hooks/useAppResponsive';
import { PreviewStatus } from '@/components/shared/PreviewStatus';
import { useUpdateLinkMutation } from '@/store/service/links';
import { useAppSelector } from '@/store';
import { useGetTotalQuery } from '@/store/service/statistics';
import useGetStatus from '@/hooks/useGetStatus';

function Stats({ totalClicksInfo, loading }) {
    const { t } = useTranslation();
    const direction = useBreakpointValue({ base: 'column', md: 'row' });

    const loadingIcon = <CircularProgress isIndeterminate color='gray.300' size={6} px={0} />;
    return (
        <>
            <Box mx="-24px" my="24px" height="1px" background="gray.200" />
            <Stack spacing={6} direction={direction}>
                <Box flexGrow={1} borderRadius={8} p={4} bg="gray.100">
                    <Flex alignItems="center">
                        <ClicksIcon color="primary.500" size="24px" />
                        <Text16 color="gray.500" ml={2}>
                            {t('shared.total-clicks', 'Total clicks')}
                            {/* {loading && loadingIcon} */}
                        </Text16>
                    </Flex>
                    <Text mt={2} fontSize="36px" fontWeight="600" lineHeight="44px" color="gray.700" textAlign="center">
                        {totalClicksInfo?.clicks ?? 0}
                    </Text>
                </Box>
                <Box flexGrow={1} borderRadius={8} p={4} bg="gray.100">
                    <Flex alignItems="center">
                        <MousePointerIcon color="primary.500" size="24px" />
                        <Text16 color="gray.500" ml={2}>
                            {t('shared.unique-visitors', 'Unique visitors')}
                        </Text16>
                    </Flex>
                    <Text mt={2} fontSize="36px" fontWeight="600" lineHeight="44px" color="gray.700" textAlign="center">
                        {totalClicksInfo?.visitors ?? 0}
                    </Text>
                </Box>
                <Box flexGrow={1} borderRadius={8} p={4} bg="gray.100">
                    <Flex alignItems="center">
                        <QrCodeIcon color="primary.500" size="24px" />
                        <Text16 color="gray.500" ml={2}>
                            {t('shared.qr-scans', 'QR scans')}
                        </Text16>
                    </Flex>
                    <Text mt={2} fontSize="36px" fontWeight="600" lineHeight="44px" color="gray.700" textAlign="center">
                        {totalClicksInfo?.scan ?? 0}
                    </Text>
                </Box>
            </Stack>
        </>
    );
}

function StatsRedirect({ totalClicksInfo, loading }) {
    const { t } = useTranslation();
    const loadingIcon = <CircularProgress isIndeterminate color='gray.300' size={6} px={2} />;
    const { isDesktop } = useAppResponsive();

    return (
        <Flex mt={isDesktop ? 6 : 3}>
            <Flex
                mr={2}
                borderRadius="50%"
                alignItems="center"
                width={isDesktop ? '40px' : '32px'}
                height={isDesktop ? '40px' : '32px'}
                backgroundColor="warning.50"
                color="warning.500"
                justifyContent="center"

            >
                {loading ? loadingIcon :
                    <ArrowDownCircleIcon size={isDesktop ? '24px' : '18px'} />
                }
            </Flex>
            <Flex color="gray.500" alignItems="center">
                <ClicksIcon size={isDesktop ? '24px' : '18px'} />
                <Text
                    fontSize={isDesktop ? '18px' : '14px'}
                    whiteSpace="nowrap"
                    ml={2}
                >
                    <Trans i18nKey="shared.clicks" t={t}>
                        <Text fontWeight="700" color="gray.800" as="strong" mr={2}>
                            {{ n: totalClicksInfo?.clicks ?? 0 }}</Text>
                        Clicks
                    </Trans>
                </Text>
            </Flex>
        </Flex>
    );
}

const RecordInfo = ({ data, path = 'redirects', actionsSlotAfter, boxProps = {} }) => {
    console.log('data: ', data);

    const { t } = useTranslation();
    const { data: hostsData } = useGetTypesQuery();
    const [startDate, _setStartDate] = useState(() => data.expired_at ? dayjs(data.expired_at).toDate() : Date.now());
    const hosts = hostsData?.data || [];
    const type = hosts?.find(host => host.id === data.type)?.short || '';
    const { isDesktop } = useAppResponsive();
    const [updateRedirect, { isLoading: isLoadingRedirect }] = useUpdateRedirectMutation();
    const [updateLink, { isLoading: isLoadingLink }] = useUpdateLinkMutation();
    const [showQRCode, setShowQRCode] = useState(false);
    const isLoading = isLoadingRedirect || isLoadingLink;
    const { currentRange } = useAppSelector( state => state.statistics);
    const { data: totalClicksInfo, isLoading: clickLoading, isFetching: clickFetching } = useGetTotalQuery({
        range: currentRange,
        file: data?.file
    }, {
        pollingInterval: 5000,
    });

    function update(data) {
        if (path === 'redirects') {
            updateRedirect(data);
        } else {
            updateLink(data);
        }
    }
    function updateIsNotify() {
        update({ id: data.id, is_notify: data.is_notify ? 0 : 1 });
    }

    function onResume() {
        update({ id: data.id, status: 'active' });
    }

    function updateIsUnbroken() {
        update({ id: data.id, is_switch_unbroken_destination: data.is_switch_unbroken_destination ? 0 : 1 });
    }

    function onUpdate({ title, content: description }) {
        update({ id: data.id, title, description });
    }

    function setExpired(date) {
        _setStartDate(date);
        const _date = dayjs(date).toISOString();
        update({ id: data.id, 'expired_at': _date });
    }

    const status = useGetStatus(data);

    if (!data) {
        return null;
    }

    const styler_text = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderRadius: '8px',
        px: 3,
        lineHeight: isDesktop ? '32px' : '26px',
        borderWidth: '0.5px',
        color: 'gray.600',
        flexGrow: '1',
        borderColor: 'gray.300',
        fontSize: isDesktop ? '16px' : '14px',
        fontWeight: '600',
    };

    const destination = data.destination || data?.destinations?.[0] || '';
    const destinations = data?.destinations || [];
    const minDate = dayjs(Date.now()).toDate();

    return (
        <Box
            {...whiteBoxShadow}
            {...boxProps}
        >
            <Flex className="clsx" alignItems="center">
                <Box mr="10px">
                    <Favicon h="48px" w="48px" host={destination} https={data.https} />
                </Box>
                <Box minWidth="0">
                    <InlineEditTitle
                        titleProps={{ fontSize: '20px', mb: '2px', lineHeight: '30px' }}
                        title={data.title || ''}
                        content={data.description || ''}
                        onUpdate={onUpdate}
                        applyText={'Save'}
                    />
                </Box>
                <Spacer />
                <ButtonGroup alignItems="center" alignSelf="flex-start" ml={10} spacing={4}>
                    {
                        1 == 2 && data.status === 'dns_incorrect' && (
                            <Box>
                                {
                                    isDesktop ? (
                                        <Link href={DNSUrl(data.host)}>
                                            <Button
                                                borderRadius="48px"
                                                colorScheme="error"
                                                leftIcon={<DangerIcon size="20px" />}
                                                size="sm"
                                            >
                                                <span>
                                                    {t('shared.check-dns', 'Check DNS')}
                                                </span>
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link href={DNSUrl(data.host)}>
                                            <IconButton
                                                minW="36px"
                                                borderRadius="full"
                                                aria-label={t('shared.check-dns', 'Check DNS')}
                                                colorScheme="error"
                                                icon={<DangerIcon size="16px" />}
                                                size="sm"
                                            />
                                        </Link>
                                    )
                                }
                            </Box>
                        )
                    }
                    {
                        isDesktop && (
                            <>
                                <CopyButton text={ensureHttp(data.url, data.https)} />
                                <Link href={ensureHttp(data.url, data.https)} target="_blank">
                                    <IconButton icon={<LinkExternalIcon size="20px" />} aria-label="Open Link" />
                                </Link>
                                <IconButton
                                    icon={<QrCodeIcon size="20px" />}
                                    aria-label="QR Code"
                                    onClick={() => setShowQRCode(!showQRCode)}
                                    isActive={showQRCode}
                                />
                                <Link href={`/${path}?edit=${data.id}`}><IconButton icon={<EditIcon size="20px" />} aria-label="Edit" /></Link>
                            </>
                        )
                    }
                    <SharedMoreActions data={data} path={path} useMenuHook={useRecordMenu} />
                    {actionsSlotAfter}
                </ButtonGroup>
            </Flex>

            <Flex flexWrap="wrap" alignItems="center">
                <PreviewStatus p={{ status, isLoading, updateIsNotify, updateIsUnbroken, onResume, data }} />
                <Stack flexWrap="wrap" mt={4} color="gray.500" direction="row" spacing={isDesktop ? 6 : 4}>

                    {
                        !!type && (
                            <Flex alignItems="center">
                                <CommandIcon size="20px" />
                                <Text whiteSpace="nowrap" ml={2}>{type}</Text>
                            </Flex>
                        )
                    }

                    {
                        data.created_at && (
                            <Flex alignItems="center">
                                <CalendarIcon size="20px" />
                                <Text whiteSpace="nowrap" ml={2}>
                                    <Trans i18nKey="shared.created-at" t={t}>
                                        Created {{ n: dayjs(data.created_at).format('DD.MM.YYYY HH:MM') }}
                                    </Trans>
                                </Text>
                            </Flex>
                        )
                    }
                    {path === 'short-url' && (
                        <Flex mr={6} alignItems="center">
                            <RotateIcon size="20px" mr={2} />
                            {data.expired_at ? (
                                <Text whiteSpace="nowrap">
                                    <Trans i18nKey="shared.expired-at" t={t}>
                                        Expire {{ n: dayjs(data.expired_at).format('DD.MM.YYYY') }}
                                    </Trans>
                                </Text>
                            ) : (
                                <Text whiteSpace="nowrap">
                                    {t('shared.never-expire', 'Never expire')}
                                </Text>
                            )}
                            <DatePicker
                                minDate={minDate}
                                customInput={
                                    <Box role="button" mx={2}><EditIcon size="18px" /></Box>
                                }
                                selected={startDate}
                                onChange={(date) => setExpired(date)}
                            />
                        </Flex>
                    )}
                </Stack>
            </Flex>

            <Flex flexWrap="wrap" minWidth={0}>
                <Box w={isDesktop ? undefined : 'full'} mt={6} minWidth={0} pr={isDesktop ? 8 : 0} flexGrow={1}>
                    <Flex alignItems="center">
                        <Text maxWidth="56px" minWidth="56px">
                            {t('shared.from', 'From')}
                        </Text>
                        <Text {...styler_text}>{toUnicode(data.url)}</Text>
                    </Flex>

                    {path === 'redirects' && (
                        <StatsRedirect totalClicksInfo={totalClicksInfo} loading={clickLoading || clickFetching} />
                    )}
                    {destinations.map((des, index)=> (
                        <Flex key={index} alignItems="center" mt={isDesktop ? 6 : 3}>
                            <Text maxWidth="56px" minWidth="56px">
                                {t('shared.to', 'To')}
                            </Text>
                            {
                                data.type === 'txt' ? (
                                    <Textarea
                                        borderColor="success.700"
                                        w="100%"
                                        readOnly
                                        value={data.destination}
                                    />
                                ) : (
                                    <Text
                                        {...styler_text}
                                        borderColor="success.700"
                                        color="success.700"
                                    >
                                        {destination || 'N/A'}
                                    </Text>
                                )
                            }
                        </Flex>
                    ))}

                    {
                        !!data?.tags?.length && (
                            <Stack mt={6} direction="row" spacing={2}>
                                {<SharedListTags data={data} />}
                            </Stack>
                        )
                    }
                </Box>
                {showQRCode &&
                    <Box mt={6} width="154px"
                        height={'min-content'} bg="gray.100" borderRadius={9} padding="17px">
                        <QRCodeToImage qrCodeUrl={ensureHttp(data.url, data.https)} />
                    </Box>
                }
            </Flex>

            {path === 'short-url' && (
                <Stats totalClicksInfo={totalClicksInfo} loading={clickLoading || clickFetching} />
            )}
        </Box>

    );
};

export default RecordInfo;

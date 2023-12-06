import { CopyButton } from '../shared/CopyButton';
import { useState } from 'react';
import {
    Box,
    Flex,
    Spacer,
    Text,
    Button,
    IconButton,
    Switch,
    Stack,
    TableContainer,
    Table,
    Tbody,
    Th,
    Thead,
    Tr,
    Image,
    Td,
    useDisclosure,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { usePagination } from '@ajna/pagination';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import DownloadIcon from '@/icons/download';
import RotateIcon from '@/icons/refresh-cw';
import useAppResponsive from '@/hooks/useAppResponsive';
import Pagination from '@/components/common/Pagination';
import { TableSkeleton } from '@/components/common/TableSkeleton';
import { Text14W400, Text14W500 } from '@/components/elements/Text14';
import { Text16W500, Text16W600 } from '@/components/elements/Text16';
import { useGetVisitorsQuery } from '@/store/service/statistics';
import { whiteBoxShadow } from '@/common-styles';
import RawDialog from '@/components/statistics/RawDialog';
import { BrowserInfo, DeviceInfo, OsInfo } from '@/components/statistics/constant';
import { useLazyLoad } from '@/hooks/useLazyLoad';
import LinkExternalIcon from '@/icons/link-external';
import useFromNow from '@/hooks/useFromNow';

dayjs.extend(relativeTime);

const Action = ({ row }) => {
    const url = row?._source?.request || '';
    return (
        <Flex alignItems='center' gap={0}>

            <CopyButton text={url} border={0} shadow={0} />
            <Link href={url} target="_blank">
                <IconButton border={0} shadow={0} icon={<LinkExternalIcon size="20px" />} aria-label="Open Link" />
            </Link>
        </Flex>
    );
};

const RecentVisits = ({ file }) => {

    const { isMobile } = useAppResponsive();
    const { t } = useTranslation();
    const { fromNow } = useFromNow();
    const [isAuto, setIsAuto] = useState(false);
    const { inView, ref } = useLazyLoad({ workInProgress: false });
    const { data, isLoading, isFetching, isSuccess, refetch } = useGetVisitorsQuery({ file }, {
        skip: !file || !inView,
        pollingInterval: isAuto ? 10000 : undefined
    });
    const { ...disclosure } = useDisclosure();


    const {
        pages,
        pagesCount,
        currentPage,
        setCurrentPage,
        isDisabled,
    } = usePagination({
        total: data?.length > 0 ? 100 : 0,
        limits: {
            outer: 2,
            inner: 2
        },
        initialState: {
            pageSize: 5,
            isDisabled: false,
            currentPage: 1
        }
    });


    const tableColumn = [
        {
            id: 'request',
            width: 300,
            label: t('statistics.request', 'Request'),
            render: (row) => (<Text14W500 sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: 350 }}>{row?._source?.request}</Text14W500>)
        },
        {
            id: 'date',
            label: t('statistics.date', 'Date'),
            render: (row) => {
                const diff = fromNow(row?._source['@timestamp']);
                return (<Text14W400>{diff}</Text14W400>);
            }
        },
        {
            id: 'location',
            label: t('statistics.location', 'Location'),
            render: (row) => {
                const city = row?._source?.geoip?.city_name;
                const country = row?._source?.geoip?.country_name;
                return (<>
                    <Text14W400>{country}</Text14W400>
                    <Text14W400>{city}</Text14W400>
                </>);
            }
        },
        {
            id: 'referrer',
            label: t('statistics.referrer', 'Referrer'),
            render: (row) => (<Text14W400 sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: 350 }}>{row?._source?.referrer}</Text14W400>)
        },
        {
            id: 'device',
            label: t('statistics.device', 'Device'),
            render: (row) => {
                const browser = row?._source?.browser;
                const os = row?._source?.device;
                const net = row?._source?.net;

                return (
                    <Flex width={90} alignItems='center' gap={2}>
                        <Image src={BrowserInfo[browser?.toLowerCase()] ?? ''} alt={browser} height='21px' mr={2} />
                        <Image src={OsInfo[os?.toLowerCase()] ?? ''} alt={os} height='21px' mr={2} />
                        <Image src={DeviceInfo[net?.toLowerCase()] ?? ''} alt={net} height='21px' />
                    </Flex>);
            }
        },
        {
            id: 'action',
            label: t('shared.action', 'Action'),
            render: (row) => (
                <Action row={row} />)
        },
    ];

    return (
        <>
            <Box {...whiteBoxShadow} ref={ref}>
                <Flex flexWrap="wrap" alignItems="start">
                    <Text color="gray.700" fontWeight="600" fontSize="18px">
                        {t('statistics.recent-visits', 'Recent visits')}
                    </Text>
                    <Spacer />
                    <Stack direction={isMobile ? 'column' : 'row'} alignItems='center' gap={4}>
                        {!isMobile &&
                            <Flex alignItems="center" justifyContent='end' width='100%'>
                                <Switch
                                    checked={isAuto}
                                    onChange={(event) =>
                                        setIsAuto(event?.target?.checked)
                                    }
                                />
                                <Text16W600 color="gray.700" ml={2}>{t('shared.auto-refresh', 'Auto refresh')}</Text16W600>
                            </Flex>
                        }
                        <Flex alignItems='center' gap={2}>
                            <IconButton
                                onClick={() => {
                                    setCurrentPage(1);
                                    refetch();
                                }}
                                isLoading={isLoading || isFetching}
                                icon={<RotateIcon stroke="gray.700" size="20px" />} aria-label="Reload visit table" />
                            {!isMobile && <Button
                                onClick={disclosure.onOpen}
                                size={isMobile ? 'sm' : undefined} leftIcon={<DownloadIcon size="20px" />}><Text>
                                    {t('statistics.download', 'Download RAW')}
                                </Text></Button>
                            }
                        </Flex>
                    </Stack>
                </Flex>
                <TableContainer pt={5} pb={4} sx={{
                    overflow:'auto',
                    '&::-webkit-scrollbar': {
                        width: '12px',
                        height:'8px',
                        borderRadius: '8px',
                        backgroundColor: 'gray.200',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'gray.300',
                    }, }}>
                    <Table>
                        <Thead bg="gray.50">
                            <Tr>
                                {tableColumn
                                    ?.map((item, index) => (
                                        <Th key={index} width={item?.width ?? 'auto'} textTransform="none">{item?.label ?? ''}</Th>
                                    ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {isLoading && !isAuto ?
                                <TableSkeleton
                                    cellCount={6}
                                    rowCount={5} /> :
                                <>
                                    {!!data?.length &&
                                        data?.slice(5 * (currentPage - 1), 5 * (currentPage - 1) + 5)?.map((visitor, index) => (
                                            <Tr key={index} bg="white">
                                                {tableColumn?.map((item, itemIndex) => (
                                                    <Td
                                                        sx={{ whiteSpace: 'nowrap',  border:index=== 4?'none':'auto' }}
                                                        key={itemIndex}
                                                    >
                                                        {item?.render(visitor)}
                                                    </Td>
                                                ))}
                                            </Tr>
                                        ))}
                                </>}
                        </Tbody>
                    </Table>
                </TableContainer>
                {!isLoading && !isAuto && !data?.length ? <Stack sx={{ pt: 2, pb: 12, width: '100%' }}>
                    <Image src='/assets/images/404.svg' alt='Create and manage URL redirects' height='200px' />
                    <Text16W500 textAlign='center'>{'No Visit Info'}</Text16W500>
                </Stack> : null}
                {!!data?.length &&
                    <Pagination pages={pages} pagesCount={pagesCount} currentPage={currentPage} setCurrentPage={setCurrentPage} isDisabled={isDisabled} />
                }
            </Box>
            <RawDialog disclosure={disclosure} />
        </>
    );
};

export default RecentVisits;


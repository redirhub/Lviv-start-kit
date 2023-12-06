import Donut from './Donut';
import { useMemo, useState, useEffect } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Spacer,
    Text,
    Image,
    Stack,
    TableContainer,
    Table,
    Tbody,
    Tr,
    Td
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { GridItemStyle } from '@/common-styles';
import useAppResponsive from '@/hooks/useAppResponsive';
import { Text16W500 } from '@/components/elements/Text16';
import { Text14W400, Text14W500 } from '@/components/elements/Text14';
import { useGetBreakdownQuery } from '@/store/service/statistics';
import { useAppSelector } from '@/store';
import { useLazyLoad } from '@/hooks/useLazyLoad';
import { TableSkeleton } from '@/components/common/TableSkeleton';

const Breakdown = ({
    file,
    files,
    product,
    title = 'Title',
    field = 'country',
    dount = false,
    table = false,
    force = false,
    range,
    tabs,
    ...props
}) => {

    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();
    const { inView, ref } = useLazyLoad({ workInProgress: false });
    const { isDesktop } = useAppResponsive();
    const tabList = useMemo(() => {
        return tabs ?? [
            { label: title, value: field },
        ];
    }, [tabs]);

    useEffect(() => {
        setCurrent(tabList[0].value);
    }, [tabList]);

    const [current, setCurrent] = useState(null);
    const { currentRange } = useAppSelector(state => state.statistics);
    const { data: breakdown, isLoading, isFetching } = useGetBreakdownQuery({
        file,
        files,
        product,
        range: range || currentRange,
        breakdown: current,
    }, {
        skip: !inView || !current && !force,
    });
    const loading = isLoading || isFetching;

    const series = useMemo(() => {
        const result = breakdown?.buckets?.map((item) => {
            const label = current === 'referrer' && item.key.length < 3 ? t('statistics.direct', 'Direct') : item.key;
            return {
                label: label,
                value: item?.doc_count
            };
        });
        // append sum_other_doc_count to the end of the array
        if (breakdown?.sum_other_doc_count > 0) {
            result.push({ label: t('statistics.other', 'Other'), value: breakdown?.sum_other_doc_count });
        }

        return result;
    }, [breakdown, current]);

    const labels = series?.map((item) => (item?.label));


    return (
        <Box {...GridItemStyle} pb={2} width='100%' ref={ref} {...props}>
            <Flex flexWrap="wrap" alignItems="center">
                <Text color="gray.700" fontWeight="600" fontSize="18px">
                    {title}
                </Text>
                <Spacer />
                {tabList.length > 1 &&
                    <ButtonGroup flexWrap={isDesktop ? '' : 'wrap'} isAttached spacing="0">
                        {tabList.map((item) => (
                            <Button
                                onClick={() => setCurrent(item.value)}
                                key={item.value}
                                sx={{
                                    bg: item.value === current ? 'primary.50' : '', color: item.value === current ? 'primary.600' : 'gray.500',
                                }}
                                color="gray.500" size="sm2">{item.label}</Button>
                        ))}
                    </ButtonGroup>
                }
            </Flex>
            {table && <TableList loading={loading} series={series} isMobile={isMobile} />}
            {dount && <Donut labels={labels} series={series} loading={loading} />}

            {!loading && series?.filter((item) => item?.label !== 'Other')?.length === 0 &&
                <Stack sx={{ pt: 2, pb: 12, width: '100%' }}>
                    <Image src='/assets/images/404.svg' alt='Create and manage URL redirects' height='200px' />
                    {1 === 2 && <Text16W500 textAlign='center'>{`No ${tabList?.find((item) => item.value === current).label} Info`}</Text16W500>}
                </Stack>}
        </Box>
    );
};

export default Breakdown;

function TableList({ loading, series, isMobile }) {

    const { t } = useTranslation();
    return <TableContainer sx={{ width: '100%' }} pt={7} pb={4}>
        <Table>
            <Tbody sx={{ width: '100%' }}>
                {loading ?
                    <TableSkeleton
                        cellCount={2}
                        rowCount={5}
                        width={isMobile ? 250 : 350} /> :
                    series?.filter((data) => !(data.label === t('statistics.other', 'Other') && data.value === 0))?.map((item, index) => {
                        const hideBorder=index === series?.filter((data) => !(data.label === 'Other' && data.value === 0))?.length - 1;
                        return (
                            <Tr key={item} bg="white">
                                <Td sx={{ w: 320, border: hideBorder? 'none' : 'auto' }} px={0} py={4}>
                                    <Flex justifyContent='start'>
                                        <Text14W500 sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: isMobile ? 250 : 350 }}>{item?.label}</Text14W500>
                                    </Flex>
                                </Td>
                                <Td sx={{ w: 20, border: hideBorder? 'none' : 'auto'  }} px={0} py={4}>
                                    <Flex justifyContent='end'>
                                        <Text14W400 color='gray.500'>{item?.value}</Text14W400>
                                    </Flex>
                                </Td>
                            </Tr>
                        );
                    })}
            </Tbody>
        </Table>
    </TableContainer>;
}


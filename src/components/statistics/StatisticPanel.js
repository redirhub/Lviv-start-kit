import BarChart from './BarChart';
import { useEffect, useMemo } from 'react';
import {
    Box,
    Flex,
    Spacer,
    Text,
    Stack,
    CircularProgress,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import DateRange from '@/components/statistics/DateRange';
import NoData from '@/icons/nodata';
import useAppResponsive from '@/hooks/useAppResponsive';
import { Text16W500 } from '@/components/elements/Text16';
import { noop } from '@/utils';
import { updateCurrentRange } from '@/store/slices/statistics';
import { useAppDispatch } from '@/store';
import { useAppSelector } from '@/store';
import { useGetClicksQuery } from '@/store/service/statistics';
import { whiteBoxShadow } from '@/common-styles';

const PreviewStatistics = ({ file, files, product, hasStatistics = noop }) => {
    const dispatch= useAppDispatch();
    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();
    const { currentRange: range } = useAppSelector(state => state.statistics);
    const { data: clicks, isLoading, isFetching } = useGetClicksQuery({
        file,
        files,
        product,
        range,
    }, {
        pollingInterval: 1000 * 8,
    });

    const timeline = clicks?.length > 0 ? [...clicks?.map((item) => {
        return dayjs(new Date(item?.key_as_string?.split('.')[0])).subtract(1, 'day').format((range === 'today' || range === 'yesterday') ? (isMobile ? 'HH' : 'HH:mm') : range === 'last_week' ? 'MM/D HH' : 'MM/D');
    }
    )] : [];

    const chartValues= useMemo(()=> {
        let values = [];
        if (clicks?.length) {
            values=[{
                name: t('statistics.visitors', 'Visitors'),
                data: clicks?.map((item) => (item?.ip?.value))
            },
            {
                name: t('statistics.hints', 'Hints'),
                data: clicks?.map((item) => (item?.doc_count))
            }];
        } else {
            values = [{
                name: t('statistics.visitors', 'Visitors'),
                data: []
            },
            {
                name: t('statistics.hints', 'Hints'),
                data: []
            }];
        }
        return values;
    }, [clicks]);

    const handleResetRange = () => dispatch(updateCurrentRange({ range:'today' }));

    useEffect(() => {
        if (clicks?.length) {
            hasStatistics();
        }
    }, [clicks]);

    useEffect(() => {
        return () => handleResetRange();
    }, [file]);


    return (
        <Box {...whiteBoxShadow} pb={2}>
            <Flex flexWrap="wrap" alignItems="center">
                <Flex gap={4} alignItems='center'>
                    <Text color="gray.700" fontWeight="600" fontSize="18px">
                        {t('statistics.statistics', 'Statistics')}
                    </Text>
                    {(isFetching && !isLoading) && <CircularProgress isIndeterminate color='primary.300' size={4} />}
                </Flex>
                <Spacer />
                <DateRange onClick={(value) => dispatch(updateCurrentRange({ range: value }))} range={range} />
            </Flex>
            <Box position="relative" mt={6}>
                <Box opacity={isLoading ? 0.8 : 1} height={420}>
                    {!isLoading && !clicks?.length ? null :
                        <BarChart
                            timeline={timeline}
                            series={chartValues}
                        />
                    }
                </Box>
                {!isLoading && clicks?.length === 0 &&
                    <Box sx={{
                        position: 'absolute',
                        top: '0',
                        pt: 14,
                        width: '100%',
                        alignItems: 'center',
                        display: 'flex',
                        flexGrow: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}>
                        <NoData width='240' height='180'/>
                        <Text16W500 pt={2}>
                            {t('shared.no-data', 'There haven\'t been any clicks yet')}
                        </Text16W500>
                    </Box>}
                {(isLoading) &&
                    <Stack position='absolute' inset={0} justifyContent='center' direction='row' alignItems='center' sx={{ width:'100%' }} pb={20}>
                        <CircularProgress isIndeterminate color='primary.300' size={16}/>
                    </Stack>
                }
            </Box>
        </Box>
    );
};

export default PreviewStatistics;


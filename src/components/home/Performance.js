import DateRange from '../statistics/DateRange';
import LineChart from '../statistics/LineChart';
import React, { useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { Grid, Text, Spacer, GridItem, Stack, Flex, Box, CircularProgress } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import useAppResponsive from '@/hooks/useAppResponsive';
import Breakdown from '@/components/statistics/Breakdown';
import { useAppDispatch, useAppSelector } from '@/store';
import { updateCurrentHomeRange } from '@/store/slices/statistics';
import { useGetDashboardQuery } from '@/store/service/statistics';

const TopHint = () => {
    const { currentHomeRange: range } = useAppSelector(state => state.statistics);
    const { t } = useTranslation();
    return (
        <GridItem bg='white' position="relative" borderRadius={10}>
            <Breakdown title={t('shared.top-hint3', 'Popular links')} file={''} table force field='file' h='100%' range={range} />
        </GridItem>
    );
};

const HomePerformance = () => {
    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();
    const dispatch = useAppDispatch();
    const { currentHomeRange: range } = useAppSelector(state => state.statistics);

    const { data: chartInfo, isLoading, isFetching } = useGetDashboardQuery({ range: range });

    const handleResetRange = () => dispatch(updateCurrentHomeRange({ range: 'today' }));

    const timeline = useMemo(() => {
        return chartInfo?.length > 0 ? [...chartInfo?.map((item) => {
            return dayjs(new Date(item?.key_as_string?.split('.')[0])).subtract(1, 'day').format((range === 'today' || range === 'yesterday') ? (isMobile ? 'HH' : 'HH:mm') : range === 'last_week' ? 'MM/D HH' : 'MM/D');
        }
        )] : ['', '', ''];
    }, [range, chartInfo]);


    const series = useMemo(() => {
        const redirects = chartInfo?.map((item) => (item?.handler?.buckets?.find((item) => item.key !== 'shorturl')?.doc_count || 0));
        const links = chartInfo?.map((item) => (item?.handler?.buckets?.find((item) => item.key === 'shorturl')?.doc_count || 0));
        return [
            {
                name: t('shared.redirection', 'URL Redirection'),
                data: redirects || [],
            },
            {
                name: t('shared.link', 'Short URL'),
                data: links || [],
            }
        ];
    }, [chartInfo]);


    useEffect(() => {
        return () => handleResetRange();
    }, []);


    return (
        <Grid mt={12} gap={8} templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}>
            <GridItem colSpan={{ base: 1, lg: 2 }} bg='white' p={6} display='flex' flexWrap="wrap" borderRadius={10}>
                <Stack width='100%'>
                    <Flex flexWrap="wrap" alignItems="center">
                        <Flex gap={4} alignItems='center'>
                            <Text color="gray.700" fontWeight="600" fontSize="18px">
                                {t('shared.performance', 'Performance')}
                            </Text>
                            {(isLoading || isFetching) && <CircularProgress isIndeterminate color='primary.300' size={7} />}
                        </Flex>
                        <Spacer />
                        <DateRange range={range} onClick={(value) => dispatch(updateCurrentHomeRange({ range: value }))} />
                    </Flex>
                    <Box pt={2} px={0} m={isMobile ? -3 : 0}>
                        <LineChart timeline={timeline} series={series} />
                    </Box>
                </Stack>
            </GridItem>
            <TopHint/>
        </Grid>
    );
};

export default HomePerformance;

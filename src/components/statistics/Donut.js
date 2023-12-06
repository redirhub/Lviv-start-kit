
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import {
    Box,
    Flex,
    Stack,
    Skeleton,
    Grid,
    GridItem,
    SkeletonCircle
} from '@chakra-ui/react';
import useAppResponsive from '@/hooks/useAppResponsive';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import theme from '@/config/theme';
import { Text12W500 } from '@/components/elements/Text12';

const useChartOptions = (labels) => {

    return {
        chart: {
            background: 'transparent'
        },
        colors: [
            theme.colors.primary[200],
            theme.colors.primary[300],
            theme.colors.primary[500],
            theme.colors.primary[600],
            theme.colors.primary[700],
            theme.colors.primary[800],
            theme.colors.primary[900],
            theme.colors.success[300],
            theme.colors.success[500],
            theme.colors.success[600],
            theme.colors.success[700],
            theme.colors.info[600],
            theme.colors.info[700],
            theme.colors.info[800],
            theme.colors.indigo[600],
            theme.colors.indigo[700],
            theme.colors.indigo[800],
            theme.colors.blue[600],
            theme.colors.blue[700],
            theme.colors.blue[800],
            theme.colors.purple[600],
            theme.colors.purple[700],
            theme.colors.purple[800],
        ],
        dataLabels: {
            enabled: false
        },
        labels,
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            },
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.config.initialColorMode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};

export default function Donut(
    {
        labels,
        loading,
        series
    }
) {
    const { isMobile } = useAppResponsive();

    const isLarge = useMemo(()=> window.innerWidth> 1800 ? true: false, [window]);

    const options = useChartOptions(labels);

    return <Stack direction={isLarge ? 'row' : 'column'} position='relative' pt={8} pb={4} gap={4} width='100%' justifyContent='space-between'>
        {loading ?
            <Stack direction='row' pl={4} pt={4} width='100%' justifyContent='center'>
                <SkeletonCircle width='220px' height='220px' />
            </Stack> :
            series?.length > 1 &&
            <Stack direction='row' width='100%' justifyContent='center'>
                <ApexChart
                    type='donut'
                    height={isMobile ? 200 : 280}
                    width={isMobile ? 200 : 280}
                    options={options}
                    series={series?.map((item) => (item?.value))}
                />
            </Stack>}
        {loading ?
            <Grid templateColumns={isLarge ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'} gap={2}>
                {[...new Array(10).keys()].map((item) => (
                    <GridItem
                        key={item}
                    >
                        <Skeleton
                            height='16px'
                            sx={{ borderRadius: 8, width: isMobile ? '100%' : '150px' }} />
                    </GridItem>
                ))}
            </Grid>
            :
            series?.filter((item) => item.label !== 'Other')?.length > 0 &&
            <Grid templateColumns={isLarge ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'} gap={2} justifyContent='start'>
                {series.map((item, index) => (
                    <GridItem
                        key={index}
                    >
                        <Flex justifyContent='center'>
                            <Flex alignItems='center' gap={2} sx={{ width:isMobile ? '100%' : '150px' }}>
                                <Box sx={{ w: 3, h: 3, flex: 'none', bg: options.colors[index], rounded: 10 }} />
                                <Text12W500>{item.label} ({item.value})</Text12W500>
                            </Flex>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>}
    </Stack>;
}

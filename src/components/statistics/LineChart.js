
import { useChart } from '../home/chartConfig';
import dynamic from 'next/dynamic';
import useAppResponsive from '@/hooks/useAppResponsive';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function LineChart(
    {
        timeline,
        series
    }
) {
    const { isDesktop, isMobile } = useAppResponsive();

    const chartOptions = useChart({
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        xaxis: {
            categories: timeline,
        },
    });

    return (<ApexChart
        type='area'
        height={isMobile ? 300 : 500}
        options={chartOptions}
        series={series}
    />);
}

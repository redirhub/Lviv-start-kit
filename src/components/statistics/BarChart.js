
import dynamic from 'next/dynamic';
import useAppResponsive from '@/hooks/useAppResponsive';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import theme from '@/config/theme';

const useChartOptions = (timeline, range, isMobile) => {
    return {
        chart: {
            background: 'transparent',
            stacked: true,
            toolbar: {
                show: false
            }
        },
        colors: [
            theme.colors.primary[600],
            theme.colors.primary[300]
        ],
        dataLabels: {
            enabled: false
        },
        legend: {
            labels: {
                colors: theme.colors.gray[500],
            },
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                radius: 6,
            },
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: false
            },
            position: 'top',
            horizontalAlign: 'right',
            offsetY: 0,
            offsetX: 0,
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
                columnWidth: isMobile ? ((range === 'today' || range === 'yesterday') ? '10px' : range === 'last-week' ? '12px' : '10px') : '32px',
                dataLabels: {
                    position: 'center',
                }
            }
        },
        theme: {
            mode: theme.config.initialColorMode
        },
        tooltip: {
            custom: ({ series, dataPointIndex }) => {
                return `
                <div>
                    <div class='tooltipCat'>${timeline[dataPointIndex]}</div>
                    <div class='tooltipWrapper'>
                        <div class='tooltipSeries'>
                            <span class='tooltipIcon1'></span>
                            <div class='tooltipLabel'>Hints: ${series[0][dataPointIndex]}</div>
                        </div>
                        <div class='tooltipSeries'>
                            <span class='tooltipIcon2'></span>
                            <div class='tooltipLabel'>Visitors: ${series[1][dataPointIndex]}</div>
                        </div>
                    </div>
                </div>
                `;
            },
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            title: {
                text: 'Timeline',
                style: {
                    color: theme.colors.gray[500],
                }
            },
            categories: timeline,
            labels: {
                style: {
                    colors: theme.colors.gray[500]
                }
            }
        },
        yaxis: {
            title: {
                text: 'Clicks',
                style: {
                    color: theme.colors.gray[500],
                }
            },
            labels: {
                style: {
                    colors: theme.colors.gray[500]
                }
            }
        },
        grid: {
            borderColor: theme.colors.gray[200],
            borderStyle: 'solid',
            row: {
                colors: [theme.colors.gray[200], 'transparent'],
                opacity: 0,
            },
            borderWidth: 2,
            strokeDashArray: 2,
        },
    };
};

export default function BarChart(
    {
        timeline,
        currentRange,
        series
    }
) {
    const { isDesktop, isMobile } = useAppResponsive();

    const options = useChartOptions(timeline, currentRange, isMobile);

    return (<ApexChart
        type='bar'
        height={isMobile ? 300 : 420}
        options={options}
        series={series}
    />);
}

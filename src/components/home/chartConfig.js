import merge from 'lodash/merge';
import theme from '@/config/theme';

export const useChart=(options)=> {

    const LABEL_TOTAL = {
        show: true,
        label: 'Total',
        color: theme.colors.success[500],
        fontSize: 12,
        fontWeight: 505,
        lineHeight: 14,
    };

    const LABEL_VALUE = {
        offsetY: 8,
        color: theme.colors.warning[500],
        fontSize: 12,
        fontWeight: 505,
        lineHeight: 14,
    };

    const baseOptions = {
        // Colors
        colors: [
            theme.colors.warning[500],
            theme.colors.success[500],
            theme.colors.blue[500],
        ],
        // Chart
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            // animations: { enabled: false },
            foreColor: theme.colors.warning[800],
            fontFamily: '',
        },
        // States
        states: {
            hover: {
                filter: {
                    type: 'lighten',
                    value: 0.04,
                },
            },
            active: {
                filter: {
                    type: 'darken',
                    value: 0.88,
                },
            },
        },

        // Fill
        fill: {
            opacity: 1,
            gradient: {
                type: 'vertical',
                shadeIntensity: 0,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 100],
            },
        },

        // Datalabels
        dataLabels: {
            enabled: false,
        },

        // Stroke
        stroke: {
            width: 3,
            curve: 'smooth',
            lineCap: 'round',
        },

        // Grid
        grid: {
            strokeDashArray: 3,
            borderColor: theme.colors.gray[300],
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },

        // Xaxis
        xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
        },

        // Markers
        markers: {
            size: 0,
            strokeColors: 'white',
        },

        // Tooltip
        tooltip: {
            theme: false,
            x: {
                show: true,
            },
        },

        // Legend
        legend: {
            show: true,
            fontSize: 13,
            position: 'top',
            horizontalAlign: 'right',
            markers: {
                radius: 12,
            },
            fontWeight: 500,
            itemMargin: {
                horizontal: 8,
            },
            labels: {
                colors: theme.colors.primary[900],
            },
        },

        // plotOptions
        plotOptions: {
        // Bar
            bar: {
                borderRadius: 4,
                columnWidth: '28%',
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
            },

            // Pie + Donut
            pie: {
                donut: {
                    labels: {
                        show: true,
                        value: LABEL_VALUE,
                        total: LABEL_TOTAL,
                    },
                },
            },

            // Radialbar
            radialBar: {
                track: {
                    strokeWidth: '100%',
                    background: theme.colors.primary[800],
                },
                dataLabels: {
                    value: LABEL_VALUE,
                    total: LABEL_TOTAL,
                },
            },

            // Radar
            radar: {
                polygons: {
                    fill: { colors: ['transparent'] },
                    strokeColors: theme.colors.primary[800],
                    connectorColors: theme.colors.primary[800],
                },
            },

            // polarArea
            polarArea: {
                rings: {
                    strokeColor: theme.colors.primary[800],
                },
                spokes: {
                    connectorColors: theme.colors.primary[800],
                },
            },
        },

        // Responsive
        responsive: [
            {
                // sm
                breakpoint: '',
                options: {
                    plotOptions: { bar: { columnWidth: '40%' } },
                },
            },
            {
                // md
                breakpoint: '',
                options: {
                    plotOptions: { bar: { columnWidth: '32%' } },
                },
            },
        ],
    };

    return merge(baseOptions, options);
};
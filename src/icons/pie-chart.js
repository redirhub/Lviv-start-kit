import { Icon } from '@chakra-ui/react';

export default function PieChartIcon({ width = '24px', height = '24px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <g clipPath="url(#clip0_1141_17224)">
                <path d="M17.6752 13.2415C17.145 14.4952 16.3158 15.6 15.2601 16.4593C14.2043 17.3185 12.9541 17.906 11.6189 18.1705C10.2836 18.435 8.90386 18.3683 7.6003 17.9763C6.29673 17.5844 5.10903 16.8791 4.14102 15.9221C3.17302 14.965 2.45419 13.7855 2.04737 12.4865C1.64055 11.1875 1.55814 9.80858 1.80734 8.47037C2.05653 7.13215 2.62975 5.87536 3.47688 4.80986C4.324 3.74436 5.41924 2.9026 6.66684 2.35817M18.3335 9.99984C18.3335 8.90549 18.118 7.82186 17.6992 6.81081C17.2804 5.79976 16.6666 4.8811 15.8927 4.10728C15.1189 3.33346 14.2002 2.71963 13.1892 2.30084C12.1782 1.88205 11.0945 1.6665 10.0002 1.6665V9.99984H18.3335Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1141_17224">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

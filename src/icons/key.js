import { Icon } from '@chakra-ui/react';

export default function KeyIcon( { width = '20px', height = '19px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon
            width={width}
            height={height}
            viewBox="0 0 20 19"
            fill="none"
            {...props}
        >
            <path
                d="M12.9167 6.25008L15.8333 3.33341M17.5 1.66675L15.8333 3.33341L17.5 1.66675ZM9.49167 9.67508C9.92195 10.0996 10.264 10.6051 10.4981 11.1624C10.7323 11.7197 10.8538 12.3178 10.8559 12.9223C10.8579 13.5267 10.7403 14.1257 10.5099 14.6845C10.2795 15.2433 9.94088 15.7511 9.51345 16.1785C9.08603 16.606 8.57827 16.9446 8.01942 17.175C7.46057 17.4054 6.86167 17.523 6.25719 17.5209C5.65272 17.5189 5.05462 17.3973 4.49733 17.1632C3.94003 16.9291 3.43456 16.587 3.01 16.1567C2.17511 15.2923 1.71313 14.1346 1.72358 12.9328C1.73402 11.7311 2.21604 10.5815 3.06583 9.73175C3.91562 8.88196 5.06518 8.39994 6.26691 8.38949C7.46865 8.37905 8.62641 8.84102 9.49083 9.67592L9.49167 9.67508ZM9.49167 9.67508L12.9167 6.25008L9.49167 9.67508ZM12.9167 6.25008L15.4167 8.75008L18.3333 5.83341L15.8333 3.33341L12.9167 6.25008Z"
                stroke="#667085"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

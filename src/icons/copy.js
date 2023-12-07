import { Icon } from '@chakra-ui/react';

export default function CopyIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <g>
                <path d="M3.33301 10.0007H2.66634C2.31272 10.0007 1.97358 9.86018 1.72353 9.61013C1.47348 9.36008 1.33301 9.02094 1.33301 8.66732V2.66732C1.33301 2.3137 1.47348 1.97456 1.72353 1.72451C1.97358 1.47446 2.31272 1.33398 2.66634 1.33398H8.66634C9.01996 1.33398 9.3591 1.47446 9.60915 1.72451C9.8592 1.97456 9.99967 2.3137 9.99967 2.66732V3.33398M7.33301 6.00065H13.333C14.0694 6.00065 14.6663 6.5976 14.6663 7.33398V13.334C14.6663 14.0704 14.0694 14.6673 13.333 14.6673H7.33301C6.59663 14.6673 5.99967 14.0704 5.99967 13.334V7.33398C5.99967 6.5976 6.59663 6.00065 7.33301 6.00065Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </Icon>
    );
}

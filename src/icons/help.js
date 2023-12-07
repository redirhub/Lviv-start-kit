import { Icon } from '@chakra-ui/react';
export default function HelpIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <g clipPath="url(#clip0_1383_5137)">
                <path d="M6.05967 6.00065C6.21641 5.5551 6.52578 5.17939 6.93298 4.94007C7.34018 4.70076 7.81894 4.61328 8.28446 4.69313C8.74998 4.77297 9.17222 5.015 9.47639 5.37634C9.78057 5.73767 9.94705 6.195 9.94634 6.66732C9.94634 8.00065 7.94634 8.66732 7.94634 8.66732M7.99967 11.334H8.00634M14.6663 8.00065C14.6663 11.6826 11.6816 14.6673 7.99967 14.6673C4.31778 14.6673 1.33301 11.6826 1.33301 8.00065C1.33301 4.31875 4.31778 1.33398 7.99967 1.33398C11.6816 1.33398 14.6663 4.31875 14.6663 8.00065Z" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1383_5137">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </Icon>
    );
}

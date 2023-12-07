import { Icon } from '@chakra-ui/react';

export default function ReconnectIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" {...props}>
            <g clipPath="url(#clip0_1414_7458)">
                <path d="M2.6665 14V9.33333M2.6665 6.66667V2M7.99984 14V8M7.99984 5.33333V2M13.3332 14V10.6667M13.3332 8V2M0.666504 9.33333H4.6665M5.99984 5.33333H9.99984M11.3332 10.6667H15.3332" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1414_7458">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </Icon>
    );
}

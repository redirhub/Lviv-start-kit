import { Icon } from '@chakra-ui/react';

export default function ChromeIcon( { width = '24px', height = '24px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill="none"
            {...props}
        >
            <g clip-path="url(#clip0_818_772)">
                <path
                    d="M6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4ZM6 4H10.585M1.975 3.03L4.27 7M5.44 10.97L7.73 7M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                    stroke="#B42318"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_818_772">
                    <rect width="12" height="12" fill="white" />
                </clipPath>
            </defs>
        </Icon>
    );
}


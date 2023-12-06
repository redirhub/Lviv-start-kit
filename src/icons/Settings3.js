import { Icon } from '@chakra-ui/react';
export default function Settings3Icon({ width = '24px', height = '24px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 16" fill="none" {...props}>
            <g clipPath="url(#clip0_1801_9613xx)">
                <path
                    d="M2.66699 14V9.33333M2.66699 6.66667V2M8.00033 14V8M8.00033 5.33333V2M13.3337 14V10.6667M13.3337 8V2M0.666992 9.33333H4.66699M6.00033 5.33333H10.0003M11.3337 10.6667H15.3337"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </Icon>
    );
}


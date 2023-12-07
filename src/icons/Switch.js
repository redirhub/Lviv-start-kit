import { Icon } from '@chakra-ui/react';
export default function SwitchIcon({ width = '24px', height = '24px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 16" fill="none" {...props}>
            <g clipPath="url(#clip0_1801_9617)">
                <path
                    d="M10.667 3.3335H5.33366C2.75633 3.3335 0.666992 5.42283 0.666992 8.00016C0.666992 10.5775 2.75633 12.6668 5.33366 12.6668H10.667C13.2443 12.6668 15.3337 10.5775 15.3337 8.00016C15.3337 5.42283 13.2443 3.3335 10.667 3.3335Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.33366 10.0002C6.43823 10.0002 7.33366 9.10473 7.33366 8.00016C7.33366 6.89559 6.43823 6.00016 5.33366 6.00016C4.22909 6.00016 3.33366 6.89559 3.33366 8.00016C3.33366 9.10473 4.22909 10.0002 5.33366 10.0002Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </Icon>
    );
}

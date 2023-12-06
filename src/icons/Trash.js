import { Icon } from '@chakra-ui/react';
export default function TrashIcon({ width = '24px', height = '24px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 16" fill="none" {...props}>
            <path
                d="M2 4.00016H3.33333M3.33333 4.00016H14M3.33333 4.00016V13.3335C3.33333 13.6871 3.47381 14.0263 3.72386 14.2763C3.97391 14.5264 4.31304 14.6668 4.66667 14.6668H11.3333C11.687 14.6668 12.0261 14.5264 12.2761 14.2763C12.5262 14.0263 12.6667 13.6871 12.6667 13.3335V4.00016H3.33333ZM5.33333 4.00016V2.66683C5.33333 2.31321 5.47381 1.97407 5.72386 1.72402C5.97391 1.47397 6.31304 1.3335 6.66667 1.3335H9.33333C9.68696 1.3335 10.0261 1.47397 10.2761 1.72402C10.5262 1.97407 10.6667 2.31321 10.6667 2.66683V4.00016M6.66667 7.3335V11.3335M9.33333 7.3335V11.3335"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

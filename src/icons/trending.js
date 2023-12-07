import { Icon } from '@chakra-ui/react';

export default function TrendingIcon({ width = '24px', height = '24px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <g clipPath="url(#clip0_1141_13530)">
                <path
                    d="M19.1668 5L11.2502 12.9167L7.0835 8.75L0.833496 15M19.1668 5H14.1668M19.1668 5V10"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1141_13530">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

import { Icon } from '@chakra-ui/react';

export default function ArrowRightIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <g transform="rotate(180 12 12) translate(0 24) scale(1 -1)">
                <path
                    d="M15.8332 9.99935H4.1665M4.1665 9.99935L9.99984 15.8327M4.1665 9.99935L9.99984 4.16602"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </Icon>
    );
}

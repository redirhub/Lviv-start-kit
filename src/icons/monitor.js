import { Icon } from '@chakra-ui/react';

export default function MonitorIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

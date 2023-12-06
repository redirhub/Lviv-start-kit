import { Icon } from '@chakra-ui/react';
export default function JustifyIcon ({ width = '24px', height = '24px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path
                d="M17.5 8.33333H2.5M17.5 5H2.5M17.5 11.6667H2.5M17.5 15H2.5"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

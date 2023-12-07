import { Icon } from '@chakra-ui/react';

export default function ClicksIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M18.3337 10H15.0003L12.5003 17.5L7.50033 2.5L5.00033 10H1.66699"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

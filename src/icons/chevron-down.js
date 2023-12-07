import {
    Icon
} from '@chakra-ui/react';

export default function ChevronDown( { width = '24px', height = '24px', size, ...props } ) {
    
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 16" fill="none" {...props}>
            <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

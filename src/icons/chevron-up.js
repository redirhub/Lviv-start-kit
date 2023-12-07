import {
    Icon
} from '@chakra-ui/react';

export default function ChevronUp( { width = '32px', height = '32px', size, ...props } ) {
    
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 32 32" fill="none" {...props}>
            <path d="M24 20L16 12L8 20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

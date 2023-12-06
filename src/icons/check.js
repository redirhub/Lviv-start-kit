import { Icon } from '@chakra-ui/react';

export default function CheckIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 12" fill="none" {...props}>
            <path
                d="M14.6663 1L5.49967 10.1667L1.33301 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

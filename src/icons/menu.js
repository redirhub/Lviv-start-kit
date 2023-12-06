import { Icon } from '@chakra-ui/react';

export default function MenuIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 -960 960 960" {...props}>
            <path
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                fill="currentColor"
            />
        </Icon>
    );
}

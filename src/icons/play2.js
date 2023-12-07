import { Icon } from '@chakra-ui/react';

export default function Play2Icon( { width = '24px', height = '24px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M4.1665 2.5L15.8332 10L4.1665 17.5V2.5Z" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
        </Icon>
    );
}

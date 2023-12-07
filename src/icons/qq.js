import { Icon } from '@chakra-ui/react';

export default function QQIcon( { width = '24px', height = '24px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon width={ width } height={ height } viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M6 11C6 11 10 9 10 6V2.5L6 1L2 2.5V6C2 9 6 11 6 11Z" stroke="#C4320A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Icon>
    );
}


import { Icon } from '@chakra-ui/react';

export default function PauseIcon( { width = '24px', height = '24px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon width={ width } height={ height } viewBox="0 0 12 18" fill="none" {...props}>
            <path d="M4.33333 1.33331H1V14.6666H4.33333V1.33331Z" stroke="#1962A4" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 1.33331H7.66667V14.6666H11V1.33331Z" stroke="#1962A4" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
        </Icon>
    );
}

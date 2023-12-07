import { Icon } from '@chakra-ui/react';

export default function BellIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 16" fill="none" {...props}>
            <path
                d="M9.15333 14.0002C9.03613 14.2022 8.8679 14.3699 8.66548 14.4865C8.46307 14.6031 8.23359 14.6645 8 14.6645C7.76641 14.6645 7.53693 14.6031 7.33452 14.4865C7.13211 14.3699 6.96387 14.2022 6.84667 14.0002M12 5.3335C12 4.27263 11.5786 3.25521 10.8284 2.50507C10.0783 1.75492 9.06087 1.3335 8 1.3335C6.93913 1.3335 5.92172 1.75492 5.17157 2.50507C4.42143 3.25521 4 4.27263 4 5.3335C4 10.0002 2 11.3335 2 11.3335H14C14 11.3335 12 10.0002 12 5.3335Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}


import { Icon } from '@chakra-ui/react';

export default function MapIcon( { width = '24px', height = '24px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon width={ width } height={ height } viewBox="0 0 12 12" fill="none" {...props}>
            <g clip-path="url(#clip0_21_777)">
                <path d="M4 9L0.5 11V3L4 1M4 9L8 11M4 9V1M8 11L11.5 9V1L8 3M8 11V3M8 3L4 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_21_777">
                    <rect width="12" height="12" fill="white"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

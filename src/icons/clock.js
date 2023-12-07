import { Icon } from '@chakra-ui/react';

export default function ClockIcon( { width = '24px', height = '24px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <g clip-path="url(#clip0_21_781)">
                <path d="M9.99984 4.99999V9.99999L13.3332 11.6667M18.3332 9.99999C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 9.99999C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666C14.6022 1.66666 18.3332 5.39762 18.3332 9.99999Z" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_21_781">
                    <rect width="20" height="20" fill="black"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

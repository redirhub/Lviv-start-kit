import { Icon } from '@chakra-ui/react';

export default function CalendarIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path
                d="M13.3333 1.6665V4.99984M6.66667 1.6665V4.99984M2.5 8.33317H17.5M4.16667 3.33317H15.8333C16.7538 3.33317 17.5 4.07936 17.5 4.99984V16.6665C17.5 17.587 16.7538 18.3332 15.8333 18.3332H4.16667C3.24619 18.3332 2.5 17.587 2.5 16.6665V4.99984C2.5 4.07936 3.24619 3.33317 4.16667 3.33317Z"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

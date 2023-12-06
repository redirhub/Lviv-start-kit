import { Icon } from '@chakra-ui/react';
export default function SubscriptionsIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M14.175 4.222C14.178 2.994 11.674 2 8.588 2 5.504 2 3.002 2.996 3 4.222m0 0C3 5.45 5.501 6.444 8.588 6.444s5.589-.994 5.589-2.222v8.623M3 4.222v13.334c.001 1.227 2.502 2.222 5.588 2.222 1.497 0 2.848-.237 3.85-.618M3.002 8.667c0 1.228 2.501 2.222 5.588 2.222s5.589-.994 5.589-2.222m-1.672 6.028c-1.008.394-2.391.639-3.918.639-3.086 0-5.587-.995-5.587-2.223m17.526.354a4.98 4.98 0 0 1 0 7.07 5.051 5.051 0 0 1-7.113 0 4.98 4.98 0 0 1 0-7.07 5.051 5.051 0 0 1 7.113 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

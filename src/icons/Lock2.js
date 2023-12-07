import { Icon } from '@chakra-ui/react';

export default function Lock2Icon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 16" fill="none" {...props}>
            <path
                d="M4.66667 7.33203V4.66536C4.66667 3.78131 5.01786 2.93346 5.64298 2.30834C6.2681 1.68322 7.11595 1.33203 8 1.33203C8.88406 1.33203 9.7319 1.68322 10.357 2.30834C10.9821 2.93346 11.3333 3.78131 11.3333 4.66536V7.33203M3.33333 7.33203H12.6667C13.403 7.33203 14 7.92899 14 8.66537V13.332C14 14.0684 13.403 14.6654 12.6667 14.6654H3.33333C2.59695 14.6654 2 14.0684 2 13.332V8.66537C2 7.92899 2.59695 7.33203 3.33333 7.33203Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

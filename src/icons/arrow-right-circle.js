import { Icon } from '@chakra-ui/react';

export default function ArrowRightCircleIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M12.002 16.0015L16.002 12.0015M16.002 12.0015L12.002 8.00147M16.002 12.0015H8.00195M22.002 12.0015C22.002 17.5243 17.5248 22.0015 12.002 22.0015C6.47911 22.0015 2.00195 17.5243 2.00195 12.0015C2.00195 6.47862 6.47911 2.00146 12.002 2.00146C17.5248 2.00146 22.002 6.47862 22.002 12.0015Z"
                stroke="currentColor"
                strokeWidth="2.004"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

import { Icon } from '@chakra-ui/react';
export default function RedirectsIcon({ width = '24px', height = '24px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M16 3h5m0 0v5m0-5L4 20m17-4v5m0 0h-5m5 0-6-6M4 4l5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

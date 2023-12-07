import { Icon } from '@chakra-ui/react';

export default function TagIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M6.24967 6.25016H6.25801M17.5747 11.5918L11.5997 17.5668C11.4449 17.7218 11.2611 17.8447 11.0587 17.9286C10.8564 18.0125 10.6395 18.0556 10.4205 18.0556C10.2015 18.0556 9.9846 18.0125 9.78227 17.9286C9.57994 17.8447 9.39613 17.7218 9.24134 17.5668L2.08301 10.4168V2.0835H10.4163L17.5747 9.24183C17.8851 9.5541 18.0593 9.97652 18.0593 10.4168C18.0593 10.8571 17.8851 11.2796 17.5747 11.5918Z"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

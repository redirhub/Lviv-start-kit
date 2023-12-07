import { Icon } from '@chakra-ui/react';

export default function DoneIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2473 6.15838L8.28066 11.9167L6.69733 10.2251C6.40566 9.95005 5.94733 9.93338 5.614 10.1667C5.289 10.4084 5.19733 10.8334 5.39733 11.1751L7.27233 14.2251C7.45566 14.5084 7.77233 14.6834 8.13066 14.6834C8.47233 14.6834 8.79733 14.5084 8.98066 14.2251C9.28066 13.8334 15.0057 7.00838 15.0057 7.00838C15.7557 6.24172 14.8473 5.56672 14.2473 6.15005V6.15838Z"
                fill="currentColor"
            />
        </Icon>
    );
}

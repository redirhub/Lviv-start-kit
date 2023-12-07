import { Icon } from '@chakra-ui/react';

export default function ClipboardIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <g clipPath="url(#clip0_1192_13941x)">
                <path d="M4.16699 12.4998H3.33366C2.89163 12.4998 2.46771 12.3242 2.15515 12.0117C1.84259 11.6991 1.66699 11.2752 1.66699 10.8332V3.33317C1.66699 2.89114 1.84259 2.46722 2.15515 2.15466C2.46771 1.8421 2.89163 1.6665 3.33366 1.6665H10.8337C11.2757 1.6665 11.6996 1.8421 12.0122 2.15466C12.3247 2.46722 12.5003 2.89114 12.5003 3.33317V4.1665M9.16699 7.49984H16.667C17.5875 7.49984 18.3337 8.24603 18.3337 9.1665V16.6665C18.3337 17.587 17.5875 18.3332 16.667 18.3332H9.16699C8.24652 18.3332 7.50033 17.587 7.50033 16.6665V9.1665C7.50033 8.24603 8.24652 7.49984 9.16699 7.49984Z"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1192_13941x">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

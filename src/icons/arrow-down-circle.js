import { Icon } from '@chakra-ui/react';

export default function ArrowDownCircleIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <g clipPath="url(#clip0_1128_40891)">
                <path
                    d="M6.66602 9.99984L9.99935 13.3332M9.99935 13.3332L13.3327 9.99984M9.99935 13.3332V6.6665M18.3327 9.99984C18.3327 14.6022 14.6017 18.3332 9.99935 18.3332C5.39698 18.3332 1.66602 14.6022 1.66602 9.99984C1.66602 5.39746 5.39698 1.6665 9.99935 1.6665C14.6017 1.6665 18.3327 5.39746 18.3327 9.99984Z"
                    stroke="currentColor"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1128_40891">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

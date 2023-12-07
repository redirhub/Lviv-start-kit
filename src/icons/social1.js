import { Icon } from '@chakra-ui/react';
export default function SocialIcon1 ({ width = '24px', height = '24px', size, ...props }) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <g clip-path="url(#clip0_1_28855)">
                <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9894 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3437 4.92187 17.3437 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9894 24 12Z"
                    fill="#98A2B3"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_28855">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </Icon>
    );
}

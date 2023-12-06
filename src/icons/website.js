import { Icon } from '@chakra-ui/react';
export default function WebsiteIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <g clipPath="url(#clip0_1383_5127)">
                <path d="M14.6663 8.00065C14.6663 11.6826 11.6816 14.6673 7.99967 14.6673M14.6663 8.00065C14.6663 4.31875 11.6816 1.33398 7.99967 1.33398M14.6663 8.00065H1.33301M7.99967 14.6673C4.31778 14.6673 1.33301 11.6826 1.33301 8.00065M7.99967 14.6673C9.66719 12.8417 10.6148 10.4726 10.6663 8.00065C10.6148 5.52867 9.66719 3.15955 7.99967 1.33398M7.99967 14.6673C6.33215 12.8417 5.38451 10.4726 5.33301 8.00065C5.38451 5.52867 6.33215 3.15955 7.99967 1.33398M1.33301 8.00065C1.33301 4.31875 4.31778 1.33398 7.99967 1.33398" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1383_5127">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </Icon>
    );
}

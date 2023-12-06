import { Icon } from '@chakra-ui/react';
export default function ActivityIcon({ width = '56px', height = '56px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 56 56" fill="none" {...props}>
            <rect x="4" y="4" width="48" height="48" rx="24" fill="#BBD3E9"/>
            <path d="M38 28H34L31 37L25 19L22 28H18" stroke="#1C6DB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="4" y="4" width="48" height="48" rx="24" stroke="#D2E2F0" strokeWidth="8"/>
        </Icon>
    );
}

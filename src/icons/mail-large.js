import { Icon } from '@chakra-ui/react';

export default function MailLargeIcon({ width = '56px', height = '56px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 56 56" fill="none" {...props}>
            <rect x="4" y="4" width="48" height="48" rx="24" fill="#BBD3E9" />
            <path d="M38 22C38 20.9 37.1 20 36 20H20C18.9 20 18 20.9 18 22M38 22V34C38 35.1 37.1 36 36 36H20C18.9 36 18 35.1 18 34V22M38 22L28 29L18 22" stroke="#1C6DB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="4" y="4" width="48" height="48" rx="24" stroke="#D2E2F0" strokeWidth="8" />
        </Icon>
    );
}


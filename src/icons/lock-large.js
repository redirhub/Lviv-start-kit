import { Icon } from '@chakra-ui/react';

export default function LockLargeIcon({ width = '56px', height = '56px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 56 56" fill="none" {...props}>
            <rect x="4" y="4" width="48" height="48" rx="24" fill="#BBD3E9" />
            <path d="M23 27V23C23 21.6739 23.5268 20.4021 24.4645 19.4645C25.4021 18.5268 26.6739 18 28 18C29.3261 18 30.5979 18.5268 31.5355 19.4645C32.4732 20.4021 33 21.6739 33 23V27M21 27H35C36.1046 27 37 27.8954 37 29V36C37 37.1046 36.1046 38 35 38H21C19.8954 38 19 37.1046 19 36V29C19 27.8954 19.8954 27 21 27Z" stroke="#1C6DB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="4" y="4" width="48" height="48" rx="24" stroke="#D2E2F0" strokeWidth="8" />
        </Icon>
    );
}

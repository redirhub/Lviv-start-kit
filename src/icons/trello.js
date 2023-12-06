import { Icon } from '@chakra-ui/react';

export default function TrelloIcon({ width = '56px', height = '56px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 56 56" fill="none" {...props}>
            <rect x="4" y="4" width="48" height="48" rx="24" fill="#BBD3E9" />
            <path d="M35 19H21C19.8954 19 19 19.8954 19 21V35C19 36.1046 19.8954 37 21 37H35C36.1046 37 37 36.1046 37 35V21C37 19.8954 36.1046 19 35 19Z" stroke="#1C6DB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26 23H23V32H26V23Z" stroke="#1C6DB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 23H30V28H33V23Z" stroke="#1C6DB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="4" y="4" width="48" height="48" rx="24" stroke="#D2E2F0" strokeWidth="8" />
        </Icon>
    );
}

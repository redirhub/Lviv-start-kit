import { Icon } from '@chakra-ui/react';

export default function MessageIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <path d="M1.33337 4.66667L6.77665 8.47697C7.21743 8.78551 7.43783 8.93979 7.67755 8.99954C7.8893 9.05233 8.11078 9.05233 8.32253 8.99954C8.56226 8.93979 8.78265 8.78551 9.22343 8.47697L14.6667 4.66667M4.53337 13.3333H11.4667C12.5868 13.3333 13.1469 13.3333 13.5747 13.1154C13.951 12.9236 14.257 12.6176 14.4487 12.2413C14.6667 11.8135 14.6667 11.2534 14.6667 10.1333V5.86667C14.6667 4.74657 14.6667 4.18651 14.4487 3.75869C14.257 3.38237 13.951 3.07641 13.5747 2.88466C13.1469 2.66667 12.5868 2.66667 11.4667 2.66667H4.53337C3.41327 2.66667 2.85322 2.66667 2.42539 2.88466C2.04907 3.07641 1.74311 3.38237 1.55136 3.75869C1.33337 4.18651 1.33337 4.74657 1.33337 5.86667V10.1333C1.33337 11.2534 1.33337 11.8135 1.55136 12.2413C1.74311 12.6176 2.04907 12.9236 2.42539 13.1154C2.85322 13.3333 3.41327 13.3333 4.53337 13.3333Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </Icon>
    );
}

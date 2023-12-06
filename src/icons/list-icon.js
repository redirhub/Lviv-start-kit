import { Icon } from '@chakra-ui/react';

export default function ListIcon({ width = '20px', height = '20px', size, ...props }) {
    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 8.33333H2.5M17.5 5H2.5M17.5 11.6667H2.5M17.5 15H2.5" stroke="#1C6DB6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Icon>
    );
}

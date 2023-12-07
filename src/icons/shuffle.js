import { Icon } from '@chakra-ui/react';
export default function ShuffleIcon({ width = '12px', height = '12px', size, strokeWidth = '1.5', ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M8 1.5H10.5M10.5 1.5V4M10.5 1.5L2 10M10.5 8V10.5M10.5 10.5H8M10.5 10.5L7.5 7.5M2 2L4.5 4.5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

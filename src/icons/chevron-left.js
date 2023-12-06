import { Icon } from '@chakra-ui/react';
export default function ChevronLeftIcon({ width = '24px', height = '24px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </Icon>
    );
}

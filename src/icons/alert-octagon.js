import { Icon } from '@chakra-ui/react';

export default function AlertOctagonIcon({ width = '24px', height = '24px', size, ...props }) {
    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z" stroke="#D92D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Icon>
    );
}

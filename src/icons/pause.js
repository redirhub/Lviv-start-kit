import { Icon } from '@chakra-ui/react';

export default function PauseIcon({ width = '24px', height = '24px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M8.33333 3.33334H5V16.6667H8.33333V3.33334Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 3.33334H11.6667V16.6667H15V3.33334Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

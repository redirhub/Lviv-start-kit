import { Icon } from '@chakra-ui/react';

export default function Play2Icon({ width = '24px', height = '24px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 14 18" fill="none" {...props}>
            <path d="M1.1665 1.5L12.8332 9L1.1665 16.5V1.5Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

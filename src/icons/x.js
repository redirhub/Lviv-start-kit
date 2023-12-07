import { Icon } from '@chakra-ui/react';

export default function XIcon({ width = '12px', height = '12px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M9 3L3 9M3 3L9 9" stroke="#337CBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

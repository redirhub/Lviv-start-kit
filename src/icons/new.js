import { Icon } from '@chakra-ui/react';
export default function NewIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <path d="M7.99967 3.33398V12.6673M3.33301 8.00065H12.6663" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

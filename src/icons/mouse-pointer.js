import { Icon } from '@chakra-ui/react';
export default function MousePointerIcon({ width = '56px', height = '56px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M13 13L19 19M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="#337CBD" stroke-width="2.004" stroke-linecap="round" stroke-linejoin="round"/>
        </Icon>
    );
}

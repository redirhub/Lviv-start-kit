import { Icon } from '@chakra-ui/react';
export default function LogoutIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

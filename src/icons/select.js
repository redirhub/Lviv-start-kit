import { Icon } from '@chakra-ui/react';

export default function SelectIcon({
    width = '19px',
    height = '19px',
    color = '#337CBD',
    size,
    ...props
}) {
    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon
            width={width}
            height={height}
            viewBox="0 0 19 19"
            fill="none"
            {...props}
        >
            <path
                d="M11 11L17 17M1 1L8.07 17.97L10.58 10.58L17.97 8.07L1 1Z"
                stroke={color}
                strokeWidth="2.004"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

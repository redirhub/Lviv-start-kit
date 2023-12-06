import { Icon } from '@chakra-ui/react';

export default function ArrowUpIcon({
    width = '12px',
    height = '12px',
    color = '#12B76A',
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
            viewBox="0 0 12 12"
            fill="none"
            {...props}
        >
            <path
                d="M6.00004 10.6667V1.33337M6.00004 1.33337L1.33337 6.00004M6.00004 1.33337L10.6667 6.00004"
                stroke={color}
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

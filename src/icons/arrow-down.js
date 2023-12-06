import { Icon } from '@chakra-ui/react';

export default function ArrowDownIcon({
    width = '12px',
    height = '12px',
    color = '#475467',
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
                d="M6.00004 1.33337V10.6667M6.00004 10.6667L10.6667 6.00004M6.00004 10.6667L1.33337 6.00004"
                stroke={color}
                strokeWidth="1.336"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

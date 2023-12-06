import { Icon } from '@chakra-ui/react';

export default function LightIcon({
    width = '24px',
    height = '26px',
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
            viewBox="0 0 24 26"
            fill="none"
            {...props}
        >
            <path
                d="M13.1667 1.33337L1.5 15.3334H12L10.8333 24.6667L22.5 10.6667H12L13.1667 1.33337Z"
                stroke="#DC6803"
                strokeWidth="2.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

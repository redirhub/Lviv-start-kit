import { Icon } from '@chakra-ui/react';

export default function WarningRoundIcon({
    width = '22px',
    height = '22px',
    size,
    color='warning.500',
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
            viewBox="0 0 22 22"
            fill="none"
            color={color}
            {...props}
        >
            <path
                d="M11 7V11M11 15H11.01M6.86 1H15.14L21 6.86V15.14L15.14 21H6.86L1 15.14V6.86L6.86 1Z"
                stroke="currentColor"
                strokeWidth="2.004"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

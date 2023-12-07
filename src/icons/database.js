import { Icon } from '@chakra-ui/react';

export default function DatabaseIcon({
    width = '20px',
    height = '22px',
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
            viewBox="0 0 20 22"
            fill="none"
            {...props}
        >
            <path
                d="M19 4C19 5.65685 14.9706 7 10 7C5.02944 7 1 5.65685 1 4M19 4C19 2.34315 14.9706 1 10 1C5.02944 1 1 2.34315 1 4M19 4V18C19 19.66 15 21 10 21C5 21 1 19.66 1 18V4M19 11C19 12.66 15 14 10 14C5 14 1 12.66 1 11"
                stroke="#337CBD"
                strokeWidth="2.004"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

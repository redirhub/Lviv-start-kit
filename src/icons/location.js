import { Icon } from '@chakra-ui/react';

export default function LocationIcon({
    width = '18px',
    height = '20px',
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
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M16.5 8.33337C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33337C1.5 6.34425 2.29018 4.4366 3.6967 3.03007C5.10322 1.62355 7.01088 0.833374 9 0.833374C10.9891 0.833374 12.8968 1.62355 14.3033 3.03007C15.7098 4.4366 16.5 6.34425 16.5 8.33337Z"
                stroke="#667085"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 10.8334C10.3807 10.8334 11.5 9.71408 11.5 8.33337C11.5 6.95266 10.3807 5.83337 9 5.83337C7.61929 5.83337 6.5 6.95266 6.5 8.33337C6.5 9.71408 7.61929 10.8334 9 10.8334Z"
                stroke="#667085"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

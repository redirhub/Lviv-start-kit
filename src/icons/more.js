import { Icon } from '@chakra-ui/react';

export default function MoreIcon({ width = '20px', height = '20px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M10.0007 10.8332C10.4609 10.8332 10.834 10.4601 10.834 9.99984C10.834 9.5396 10.4609 9.1665 10.0007 9.1665C9.54041 9.1665 9.16732 9.5396 9.16732 9.99984C9.16732 10.4601 9.54041 10.8332 10.0007 10.8332Z"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M15.834 10.8332C16.2942 10.8332 16.6673 10.4601 16.6673 9.99984C16.6673 9.5396 16.2942 9.1665 15.834 9.1665C15.3737 9.1665 15.0007 9.5396 15.0007 9.99984C15.0007 10.4601 15.3737 10.8332 15.834 10.8332Z"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M4.16732 10.8332C4.62755 10.8332 5.00065 10.4601 5.00065 9.99984C5.00065 9.5396 4.62755 9.1665 4.16732 9.1665C3.70708 9.1665 3.33398 9.5396 3.33398 9.99984C3.33398 10.4601 3.70708 10.8332 4.16732 10.8332Z"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}


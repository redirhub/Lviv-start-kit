import { Icon } from '@chakra-ui/react';

export default function ArrowRightUpPrimaryIcon({ width = '20px', height = '20px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M5.8335 14.1673L14.1668 5.83398M14.1668 5.83398H5.8335M14.1668 5.83398V14.1673" stroke="#1962A4" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

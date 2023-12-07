import { Icon } from '@chakra-ui/react';
export default function UserAddIcon({
    width = '24px',
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
            viewBox="0 0 24 20"
            fill="none"
            {...props}
        >
            <path
                d="M16 19V17C16 15.9391 15.5786 14.9217 14.8284 14.1716C14.0783 13.4214 13.0609 13 12 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M20 6V12M23 9H17M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z"
                stroke="#337CBD"
                strokeWidth="2.004"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

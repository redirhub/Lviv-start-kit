import { Icon } from '@chakra-ui/react';

export default function ViewIcon({
    width = '24px',
    height = '24px',
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
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <g fill="currentColor">
                <path d="M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"></path>
                <circle cx="12" cy="12" r="2"></circle>
            </g>
        </Icon>
    );
}

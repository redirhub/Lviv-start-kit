import { Icon } from '@chakra-ui/react';

export default function EyeIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <path d="M0.666626 7.99935C0.666626 7.99935 3.33329 2.66602 7.99996 2.66602C12.6666 2.66602 15.3333 7.99935 15.3333 7.99935C15.3333 7.99935 12.6666 13.3327 7.99996 13.3327C3.33329 13.3327 0.666626 7.99935 0.666626 7.99935Z" stroke="#98A2B3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99996 9.99935C9.10453 9.99935 9.99996 9.10392 9.99996 7.99935C9.99996 6.89478 9.10453 5.99935 7.99996 5.99935C6.89539 5.99935 5.99996 6.89478 5.99996 7.99935C5.99996 9.10392 6.89539 9.99935 7.99996 9.99935Z" stroke="#98A2B3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}

import { Icon } from '@chakra-ui/react';

export default function CreditCardIcon({ width = '24px', height = '24px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M1 10H23M3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4Z" stroke="#1C6DB6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Icon>
    );
}


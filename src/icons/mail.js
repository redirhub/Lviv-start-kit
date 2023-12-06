import { Icon } from '@chakra-ui/react';

export default function MailIcon({ width = '20px', height = '20px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M18.3332 5.00065C18.3332 4.08398 17.5832 3.33398 16.6665 3.33398H3.33317C2.4165 3.33398 1.6665 4.08398 1.6665 5.00065M18.3332 5.00065V15.0007C18.3332 15.9173 17.5832 16.6673 16.6665 16.6673H3.33317C2.4165 16.6673 1.6665 15.9173 1.6665 15.0007V5.00065M18.3332 5.00065L9.99984 10.834L1.6665 5.00065" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}


import { Icon } from '@chakra-ui/react';

export default function DeleteIcon({ width = '16px', height = '16px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
            <path d="M2 4.00065H3.33333M3.33333 4.00065H14M3.33333 4.00065V13.334C3.33333 13.6876 3.47381 14.0267 3.72386 14.2768C3.97391 14.5268 4.31304 14.6673 4.66667 14.6673H11.3333C11.687 14.6673 12.0261 14.5268 12.2761 14.2768C12.5262 14.0267 12.6667 13.6876 12.6667 13.334V4.00065H3.33333ZM5.33333 4.00065V2.66732C5.33333 2.3137 5.47381 1.97456 5.72386 1.72451C5.97391 1.47446 6.31304 1.33398 6.66667 1.33398H9.33333C9.68696 1.33398 10.0261 1.47446 10.2761 1.72451C10.5262 1.97456 10.6667 2.3137 10.6667 2.66732V4.00065M6.66667 7.33398V11.334M9.33333 7.33398V11.334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
    );
}


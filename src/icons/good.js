import { Icon } from '@chakra-ui/react';

export default function GoodIcon({ width = '24px', height = '24px', size, ...props }) {
    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22 11.08V12C21.9988 14.1565 21.3005 16.2547 20.0093 17.9819C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1954 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.6281 1.87979 13.4881 2.02168 11.3364C2.16356 9.18461 2.99721 7.13637 4.39828 5.49712C5.79935 3.85787 7.69279 2.71543 9.79619 2.24019C11.8996 1.76496 14.1003 1.98238 16.07 2.86005M22 4.00005L12 14.01L9.00001 11.01"
                    stroke="#12B76A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </Icon>
    );
}

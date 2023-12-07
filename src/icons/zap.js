import { Icon } from '@chakra-ui/react';
export default function ZapIcon({ width = '46px', height = '46px', size, ...props }) {

    if (size) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 46 46" fill="none" {...props}>
            <rect x="3" y="3" width="40" height="40" rx="20" fill="#FEF0C7"/>
            <path d="M23.8333 14.666L15.5 24.666H23L22.1667 31.3327L30.5 21.3327H23L23.8333 14.666Z" stroke="#DC6803" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FFFAEB" strokeWidth="6"/>
        </Icon>
    );
}

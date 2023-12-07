import { Icon } from '@chakra-ui/react';
export default function ServerIcon({ width = '20px', height = '20px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <g clipPath="url(#clip0_1512_6146)">
                <path d="M5.0013 4.9974H5.00964M5.0013 14.9974H5.00964M3.33464 1.66406H16.668C17.5884 1.66406 18.3346 2.41025 18.3346 3.33073V6.66406C18.3346 7.58454 17.5884 8.33073 16.668 8.33073H3.33464C2.41416 8.33073 1.66797 7.58454 1.66797 6.66406V3.33073C1.66797 2.41025 2.41416 1.66406 3.33464 1.66406ZM3.33464 11.6641H16.668C17.5884 11.6641 18.3346 12.4103 18.3346 13.3307V16.6641C18.3346 17.5845 17.5884 18.3307 16.668 18.3307H3.33464C2.41416 18.3307 1.66797 17.5845 1.66797 16.6641V13.3307C1.66797 12.4103 2.41416 11.6641 3.33464 11.6641Z" stroke="#667085" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_1512_6146">
                    <rect width="20" height="20" fill="white"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

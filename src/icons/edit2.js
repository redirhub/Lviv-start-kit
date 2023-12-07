import { Icon } from '@chakra-ui/react';

export default function Edit2Icon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 16 16" fill="none" {...props}>
            <g clipPath="url(#clip0_1501_3257)">
                <path
                    d="M11.3335 1.99955C11.5086 1.82445 11.7165 1.68556 11.9452 1.5908C12.174 1.49604 12.4192 1.44727 12.6668 1.44727C12.9145 1.44727 13.1597 1.49604 13.3884 1.5908C13.6172 1.68556 13.8251 1.82445 14.0002 1.99955C14.1753 2.17465 14.3142 2.38252 14.4089 2.61129C14.5037 2.84006 14.5524 3.08526 14.5524 3.33288C14.5524 3.58051 14.5037 3.8257 14.4089 4.05448C14.3142 4.28325 14.1753 4.49112 14.0002 4.66622L5.00016 13.6662L1.3335 14.6662L2.3335 10.9996L11.3335 1.99955Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1501_3257">
                    <rect width="16" height="16" fill="white"/>
                </clipPath>
            </defs>
        </Icon>
    );
}

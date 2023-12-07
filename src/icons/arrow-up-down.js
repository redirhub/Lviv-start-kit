import { Icon } from '@chakra-ui/react';

export default function ArrowUpDownIcon( { width = '16px', height = '28px', size, ...props } ) {

    if ( size ) {
        height = size;
        width = size;
    }

    return (
        <Icon width={width} height={height} viewBox="0 0 16 28" fill="none" {...props} >
            <path stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.333" d="M4 18l4 4 4-4M12 10L8 6l-4 4" />
        </Icon>
    );
}

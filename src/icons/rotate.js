import { Icon } from '@chakra-ui/react';

export default function RotateIcon( { width = '24px', height = '24px', size, ...props } ) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path
                d="M19.1662 3.33367V8.33367M19.1662 8.33367H14.1662M19.1662 8.33367L15.3079 4.70034C14.1584 3.55012 12.6662 2.80466 11.0562 2.57629C9.44618 2.34792 7.80555 2.64902 6.38154 3.4342C4.95752 4.21939 3.82728 5.44613 3.16113 6.92956C2.49497 8.41299 2.329 10.0727 2.68821 11.6587C3.04743 13.2447 3.91237 14.6709 5.1527 15.7226C6.39304 16.7742 7.94156 17.3942 9.56492 17.4892C11.1883 17.5841 12.7985 17.1489 14.153 16.2491C15.5075 15.3493 16.5329 14.0336 17.0746 12.5003"
                stroke="currentColor"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Icon>
    );
}

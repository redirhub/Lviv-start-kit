import { Icon } from '@chakra-ui/react';
export default function RefreshCWIcon({ width = '20px', height = '20px', size, ...props }) {
    
    if ( size ) {
        height = size;
        width = size;
    }
    
    return (
        <Icon width={ width } height={ height } viewBox="0 0 20 20" fill="none" {...props}>
            <path d="M19.1663 3.33331V8.33332M19.1663 8.33332H14.1663M19.1663 8.33332L15.2997 4.69998C14.4041 3.80391 13.296 3.14932 12.079 2.79729C10.862 2.44527 9.5756 2.40727 8.33991 2.68686C7.10423 2.96645 5.95951 3.55451 5.01256 4.39616C4.06562 5.23782 3.34731 6.30564 2.92467 7.49998M0.833008 16.6666V11.6666M0.833008 11.6666H5.83301M0.833008 11.6666L4.69967 15.3C5.5953 16.1961 6.70332 16.8506 7.92035 17.2027C9.13738 17.5547 10.4238 17.5927 11.6594 17.3131C12.8951 17.0335 14.0398 16.4455 14.9868 15.6038C15.9337 14.7621 16.652 13.6943 17.0747 12.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </Icon>
    );
}

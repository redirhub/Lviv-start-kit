import { Box, keyframes } from '@chakra-ui/react';


const rotate = keyframes`
    from { transform: rotate(0deg)}
    to { transform: rotate(350deg)}
`;

export function Loader({ color = 'gray.900' }) {
    
    const animation = `${rotate} infinite 2s linear`;
    
    return (
        <Box width="24px" height="24px" color={ color } animation={ animation }>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
}

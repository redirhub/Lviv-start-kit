import { Box, Spinner } from '@chakra-ui/react';

export function ContentSpinner( props ) {
    return (
        <Box
            minH="50vh"
            maxH="100vh"
            display="flex"
            alignSelf="center"
            alignItems="center"
            justifyContent="center"
            h="full"
            w="full"
            {...props}
        >
            <Spinner color="primary.500" />
        </Box>
    );
}

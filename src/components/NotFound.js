import { Box, Flex, Text } from '@chakra-ui/react';

export function NotFound({ title = '(404) Page not found!', children }) {
    return (
        <Box
            display="flex"
            widith="100%"
            height="100%"
            alignSelf="center"
            justifyContent="center"
            width="100%"
        >
            <Flex alignItems="center" flexDirection="column" pb="150px">
                <picture>
                    <img src="/not-found.svg" alt="404 Not Found"/>
                </picture>
                <Text my={8} lineHeight="30px" fontWeight="500" fontSize="20px">{ title }</Text>
                { children }
            </Flex>
        </Box>
    );
}

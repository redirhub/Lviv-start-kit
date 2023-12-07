import { Box } from '@chakra-ui/react';

export default function BoxItem({ item }) {
    return (
        <Box
            maxW="sm"
            p={4}
            bg="white"
            color={'black'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
        >
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems='center' float='left' w='100%'>
                    {item.icon}
                    <Box as="span" color={item.color} fontSize="md" ml='2'>
                        {item.title}
                    </Box>
                </Box>
                <Box
                    as="span"
                    color="black"
                    fontSize="3xl"
                    fontWeight="bold"
                    textAlign="center"
                >
                    {item.count_number}
                </Box>
            </Box>
        </Box>
    );
}


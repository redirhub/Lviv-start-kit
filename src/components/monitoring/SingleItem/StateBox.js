import { Box, Flex, Text } from '@chakra-ui/react';
import CheckIcon from '@/icons/check';
import InfoIcon from '@/icons/info';
import ViewIcon from '@/icons/view';
import WarningIcon from '@/icons/warning';

export function StateBox({ text, type, count }) {
    let iconComponent;
    let color;

    if (type === 'project') {
        iconComponent = <ViewIcon color="gray.500" mr="8px" />;
        color = 'gray.500';
    } else if (type === 'alarm') {
        iconComponent = <WarningIcon color="warning.500" mr="8px" />;
        color = 'warning.500';
    } else if (type === 'error') {
        iconComponent = <InfoIcon color="error.500" mr="8px" />;
        color = 'error.500';
    }
    else if (type === 'good') {
        iconComponent = <CheckIcon color="success.500" mr="8px" />;
        color = 'success.500';
    }

    return (
        <Box
            flex={1}
            p="4"
            borderRadius="lg"
            padding={4}
            backgroundColor={'#FFF'}
        >
            <Flex align="center">
                {iconComponent}
                <Text color={color} fontSize="16px">
                    {text}
                </Text>
            </Flex>
            <Text align={'center'} fontSize='36px'>{count}</Text>
        </Box>
    );
}

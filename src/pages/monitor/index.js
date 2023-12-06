import { useTranslation } from 'react-i18next';
import { SimpleGrid, Text, Heading, Box, Flex } from '@chakra-ui/react';
import { AppMain } from '@/components/layout/Main';
import AlertTriangleIcon from '@/icons/alert-triangle';
import GoodIcon from '@/icons/good';
import AlertOctagonIcon from '@/icons/alert-octagon';
import EyesIcon from '@/icons/eye-icon';

/*
    Notes:
    1) Can REfactor Badges portion during an integration
    2) Can also refactor alerts Box
*/

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <SimpleGrid p={5} spacing={10} minChildWidth="250px">
                <Box p={5} bg="white" borderRadius="5px">
                    <Flex justifyContent="start" alignItems="center">
                        <EyesIcon width="24px" height="24px" color="#eaecf0" />
                        <Text marginLeft="5px" color="gray.500">
                            Monitoring projects
                        </Text>
                    </Flex>
                    <Flex mt={2} justifyContent="center">
                        <Heading>5</Heading>
                    </Flex>
                </Box>
                <Box p={5} bg="white" borderRadius="5px">
                    <Flex justifyContent="start" alignItems="center">
                        <AlertTriangleIcon width="24px" height="24px" color="warning.600" />
                        <Text marginLeft="5px" color="warning.500">
                            Alarms
                        </Text>
                    </Flex>
                    <Flex mt={2} justifyContent="center">
                        <Heading>1</Heading>
                    </Flex>
                </Box>
                <Box p={5} bg="white" borderRadius="5px">
                    <Flex justifyContent="start" alignItems="center">
                        <AlertOctagonIcon color="#1C6DB6" />
                        <Text marginLeft="5px" color="error.500">
                            Errors
                        </Text>
                    </Flex>
                    <Flex mt={2} justifyContent="center">
                        <Heading>2</Heading>
                    </Flex>
                </Box>
                <Box p={5} bg="white" borderRadius="5px">
                    <Flex justifyContent="start" alignItems="center">
                        <GoodIcon color="#1C6DB6" />
                        <Text marginLeft="5px" color="success.500">
                            Good
                        </Text>
                    </Flex>
                    <Flex mt={2} justifyContent="center">
                        <Heading>13</Heading>
                    </Flex>
                </Box>
            </SimpleGrid>
        </AppMain>
    );
}

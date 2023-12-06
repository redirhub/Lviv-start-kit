import { useTranslation } from 'react-i18next';
import { SimpleGrid, Text, Heading, Box, Flex, Button, ButtonGroup, IconButton, Checkbox, Spacer, Badge, TableContainer, Table, Tbody } from '@chakra-ui/react';
import { AppMain } from '@/components/layout/Main';
import AlertTriangleIcon from '@/icons/alert-triangle';
import GoodIcon from '@/icons/good';
import AlertOctagonIcon from '@/icons/alert-octagon';
import FilterIcon from '@/icons/filter';
import ListIcon from '@/icons/list-icon';
import GridIcon from '@/icons/gridIcon';
import PlayIcon from '@/icons/play';
import ActionIcon from '@/icons/action-icon';
import ClockIcon from '@/icons/clock-icon';
import WebsiteIcon from '@/icons/website';
import EyesIcon from '@/icons/eye-icon';
import WeChatIcon from '@/icons/wechat-icon';
import ShieldIcon from '@/icons/shield-icon';
import ChromeIcon from '@/icons/chrome-icon';
import MapIcon from '@/icons/map-icon';
import EditIcon from '@/icons/edit';

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
            <Flex p={5} mt={5} w="100%" justifyContent="space-between">
                <Heading>Monitorings</Heading>
                <Button bg="#1C6DB6" color="white">
                    New Monitoring
                </Button>
            </Flex>
            <Flex p={5} mt={5} w="100%" justifyContent="space-between">
                <Button bg="transparent">
                    <Text px="1">Filter</Text> <FilterIcon width="20px" height="20px" />
                </Button>
                <Flex justifyContent="end" alignItems="center">
                    <Text mr="2" fontWeight={500}>
                        Appearance
                    </Text>
                    <ButtonGroup size="sm" isAttached variant="outline">
                        <IconButton bg="gray.300" icon={<ListIcon />} />
                        <IconButton bg="white" icon={<GridIcon />} />
                    </ButtonGroup>
                </Flex>
            </Flex>
            <TableContainer p={5}>
                <Table>
                    <Tbody borderRadius="8px" bg="white" height="72px">
                        <Flex mw="100" p={5} alignItems="center" height="72px">
                            <Checkbox p="3"></Checkbox>
                            <SimpleGrid>
                                <Heading as="h6" size="xs">
                                    My first monitoring
                                </Heading>
                                <Text color="gray.500">2 URLs</Text>
                            </SimpleGrid>

                            <Spacer />
                            <Flex justifyContent="space-around" p={4} spacing={2} alignItems="center">
                                <Badge fontSize="14px" mx={2} bg="warning.50" color="warning.700" px={4} py={1} borderRadius="16px">
                                    <Flex justifyContent="space-between" alignItems="center" color="warning.700">
                                        <WebsiteIcon color="warning.700" />
                                        <Text ml="1">http</Text>
                                    </Flex>
                                </Badge>
                                <Badge fontSize="14px" mx={2} bg="success.50" color="success.700" px={4} py={1} borderRadius="16px">
                                    <Flex justifyContent="space-between" alignItems="center" color="success.700">
                                        <WeChatIcon color="success.700" />
                                        <Text ml="1">WeChat</Text>
                                    </Flex>
                                </Badge>
                                <Badge fontSize="14px" mx={2} bg="orange.50" color="orange.700" px={4} py={1} borderRadius="16px">
                                    <Flex justifyContent="space-between" alignItems="center" color="orange.700">
                                        <ShieldIcon color="orange.700" />
                                        <Text ml="1">QQ</Text>
                                    </Flex>
                                </Badge>
                                <Badge fontSize="14px" mx={2} bg="error.50" color="error.700" px={4} py={1} borderRadius="16px">
                                    <Flex justifyContent="space-between" alignItems="center" color="error.700">
                                        <ChromeIcon color="error.700" />
                                        <Text ml="1">Chrome</Text>
                                    </Flex>
                                </Badge>
                                <Badge fontSize="14px" mx={2} bg="#F8F9FC" color="#F8F9FC" px={4} py={1} borderRadius="16px">
                                    <Flex justifyContent="space-between" alignItems="center" color="#F8F9FC">
                                        <MapIcon color="#363F72" />
                                        <Text ml="1" color="#363F72">
                                            Country
                                        </Text>
                                    </Flex>
                                </Badge>
                                <Flex m={8}>
                                    <ClockIcon />
                                    <Text color="gray.500" ml={1}>
                                        30 sec
                                    </Text>
                                </Flex>
                                <IconButton m={1} bg="#1C6DB6" icon={<PlayIcon />} />
                                <IconButton m={2} icon={<EditIcon />} />
                                <IconButton m={1} icon={<ActionIcon />} />
                            </Flex>
                        </Flex>
                    </Tbody>
                </Table>
            </TableContainer>
        </AppMain>
    );
}

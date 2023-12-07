import { useTranslation } from 'react-i18next';
import { SimpleGrid, Text, Heading, Flex, Button, ButtonGroup, IconButton, Checkbox, Spacer, TableContainer, Table, Tbody, Box, Badge, Tooltip } from '@chakra-ui/react';
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

    const monitoringData = [
        { icon: <EyesIcon />, label: 'Monitoring projects', count: 5, color: 'gray.500' },
        { icon: <AlertTriangleIcon />, label: 'Alarms', count: 1, color: 'warning.500' },
        { icon: <AlertOctagonIcon />, label: 'Errors', count: 2, color: 'error.500' },
        { icon: <GoodIcon />, label: 'Good', count: 13, color: 'success.500' },
    ];

    const badgesData = [
        { icon: <WebsiteIcon />, text: 'http', bgColor: 'warning.50', color: 'warning.700' },
        { icon: <WeChatIcon />, text: 'WeChat', bgColor: 'success.50', color: 'success.700' },
        { icon: <ShieldIcon />, text: 'QQ', bgColor: 'orange.50', color: 'orange.700' },
        { icon: <ChromeIcon />, text: 'Chrome', bgColor: 'error.50', color: 'error.700' },
        { icon: <MapIcon color="#363F72" />, text: 'Country', bgColor: '#F8F9FC', color: '#363F72' },
    ];

    const brokenItems = ['fsas.com', 'sda1e.com', 'dsss.com'];

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <SimpleGrid p={5} spacing={10} minChildWidth="250px">
                {monitoringData.map((item, index) => (
                    <Box key={index} p={5} bg="white" borderRadius="5px">
                        <Flex justifyContent="start" alignItems="center">
                            {item.icon}
                            <Text marginLeft="5px" color={item.color}>
                                {item.label}
                            </Text>
                        </Flex>
                        <Flex mt={2} justifyContent="center">
                            <Heading>{item.count}</Heading>
                        </Flex>
                    </Box>
                ))}
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
                            <Tooltip
                                placement="top"
                                label={
                                    <Box>
                                        <Text fontWeight="bold" mb="2">
                                                Broken Items:
                                        </Text>
                                        {brokenItems.map((item, index) => (
                                            <Text key={index}>{item}</Text>
                                        ))}
                                    </Box>
                                }
                            >
                                <Box>
                                    <AlertTriangleIcon color="warning.500" />
                                </Box>
                            </Tooltip>
                            <Spacer />
                            <Flex justifyContent="space-around" p={4} spacing={2} alignItems="center">
                                {badgesData.map((badge, index) => (
                                    <Badge key={index} fontSize="14px" mx={2} bg={badge.bgColor} color={badge.color} px={4} py={1} borderRadius="16px">
                                        <Flex justifyContent="space-between" alignItems="center" color={badge.color}>
                                            {badge.icon}
                                            <Text ml="1">{badge.text}</Text>
                                        </Flex>
                                    </Badge>
                                ))}
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

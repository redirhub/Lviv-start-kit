import { Monitoring } from './SingleItem/Monitoring';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { MdFilterList } from 'react-icons/md';
import { FaAlignJustify } from 'react-icons/fa';
import { FiSidebar } from 'react-icons/fi';
import { useState } from 'react';

export function MonitoringsPanel() {

    const [isListType, setIsListType] = useState(false);
    const [isSideType, setIsSideType] = useState(false);

    const handleListTypeClick = () => {
        setIsListType(true);
        setIsSideType(false);
    };

    const handleSideTypeClick = () => {
        setIsListType(false);
        setIsSideType(true);
    };

    const monitorings = [
        {
            name: 'My first monitoring',
            urls: 2,
            state: '',
            badges: [
                {
                    text: 'HTTP',
                    state: 'warning',
                }
            ],
            time: '30 sec'
        },
        {
            name: 'My first monitoring',
            urls: 2,
            state: '',
            badges: [
                {
                    text: 'HTTP',
                    state: 'warning',
                },
                {
                    text: 'WeChat',
                    state: 'success',
                },
                {
                    text: 'QQ',
                    state: 'warning',
                },
                {
                    text: 'Chrome',
                    state: 'error',
                },
                {
                    text: 'Country',
                    state: 'default',
                },
            ],
            time: '30 sec'
        },
        {
            name: 'Working list of URL' + 's',
            urls: 12,
            state: 'warning',
            badges: [
                {
                    text: 'QQ',
                    state: 'warning',
                },
                {
                    text: 'Chrome',
                    state: 'warning',
                },

            ],
            time: '30 sec'
        },
        {
            name: 'click-edge',
            urls: 1,
            state: '',
            badges: [
                {
                    text: 'HTTP',
                    state: 'warning',
                },

            ],
            time: '30 sec'
        },
        {
            name: 'Premium monitoring',
            urls: 10,
            state: 'warning',
            badges: [
                {
                    text: 'HTTP',
                    state: 'warning',
                },
                {
                    text: 'WeChat',
                    state: 'success',
                },
                {
                    text: 'QQ',
                    state: 'warning',
                },
                {
                    text: 'Chrome',
                    state: 'error',
                },
                {
                    text: 'Country',
                    state: 'default',
                },
            ],
            time: '2 hours'
        },
    ];

    return (
        <>
            <Flex justify={'space-between'} alignItems={'center'} mt={'52px'}>
                <Text fontSize={'30px'}>Monitorings</Text>
                <Button backgroundColor={'#1C6DB6'} fontSize={'16px'} color={'#FFF'} px={'20px'} py={'12px'}>New monitoring</Button>
            </Flex>

            <Flex justify={'space-between'} alignItems={'center'} mt={'24px'}>
                <Button>
                    <Flex alignItems={'center'} gap={2}>
                        <Text>Filter</Text>
                        <MdFilterList size={20} />
                    </Flex>
                </Button>
                <Flex alignItems={'center'} gap={4}>
                    <Text color={'gray.700'} fontSize={'16px'} fontWeight={'500'}>
                        Appearance
                    </Text>
                    <Box display="flex">
                        <Button borderRadius={'none'} backgroundColor={isListType ? 'gray.300' : '#FFF'} borderLeftRadius="lg" borderRightWidth={1} onClick={handleListTypeClick}>
                            <FaAlignJustify />
                        </Button>
                        <Button borderRadius={'none'} backgroundColor={isSideType ? 'gray.300' : '#FFF'} borderRightRadius="lg" borderLeftWidth={1} onClick={handleSideTypeClick}>
                            <FiSidebar />
                        </Button>
                    </Box>
                </Flex>
            </Flex>
            <Box display={'flex'} flexDirection={'column'} mt={'24px'}>
                {monitorings.map((monitoring, index) => (
                    <Monitoring key={index} monitoringName={monitoring.name} state={monitoring.state} urlCount={monitoring.urls} time={monitoring.time} badges={monitoring.badges} />
                ))}
            </Box>
        </>
    );
}

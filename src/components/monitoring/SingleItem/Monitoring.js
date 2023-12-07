import { BadgeItem } from './BadgeItem';
import { FaRegClock } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { IoIosMore } from 'react-icons/io';
import { CiPlay1 } from 'react-icons/ci';

import { Box, Button, ButtonGroup, Checkbox, Flex, Text } from '@chakra-ui/react';
import WarningIcon from '@/icons/warning';
import InfoIcon from '@/icons/info';

export function Monitoring({ monitoringName, urlCount, time, badges, state }) {
    let iconComponent;

    if (state === 'warning') {
        iconComponent = <WarningIcon color="warning.700" mr="8px" />;
    } else if (state === 'error') {
        iconComponent = <InfoIcon color="error.700" mr="8px" />;
    }

    return (
        <Flex
            backgroundColor={'#FFF'}
            justifyContent="space-between"
            alignItems="center"
            padding="4"
            borderRadius={'lg'}
            marginBottom={'16px'}
        >
            <Flex align="center">
                <Checkbox marginRight="4" />
                <Box>
                    <Flex alignItems={'center'} gap={2}>
                        <Text fontSize="lg" fontWeight="bold">
                            {monitoringName}
                        </Text>
                        {iconComponent}
                    </Flex>
                    <Text>{`${urlCount} + URLs`} </Text>
                </Box>
            </Flex>

            <Flex justifyContent="flex-end" flex={'1'} alignItems="center" mr={'32px'}>
                {badges.map((badge, index) => (
                    <BadgeItem key={index} text={badge.text} state={badge.state} />
                ))}
            </Flex>

            <Flex alignItems="center">
                <Flex alignItems={'center'}>
                    <FaRegClock color="gray.500" />
                    <Text marginLeft="2" color={'gray.500'} fontSize={'14px'}>{time}</Text>
                </Flex>
                <ButtonGroup ml="4">
                    <Button backgroundColor={'primary.600'}>
                        <CiPlay1 color="#FFF" />
                    </Button>
                    <Button backgroundColor={'FFF'}>
                        <FiEdit3 />
                    </Button>
                    <Button backgroundColor={'FFF'}>
                        <IoIosMore />
                    </Button>
                </ButtonGroup>
            </Flex>
        </Flex>
    );
}

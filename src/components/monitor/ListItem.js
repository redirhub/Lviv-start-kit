import { Text14W400 } from '../elements/Text14';
import { Text16W600 } from '../elements/Text16';
import { Text12W500 } from '../elements/Text12';
import { Box, Flex, Checkbox, ButtonGroup, IconButton, Tag, TagLabel, Tooltip } from '@chakra-ui/react';
import { random } from 'lodash';
import EditIcon from '@/icons/edit';
import MoreIcon from '@/icons/more';
import Play2Icon from '@/icons/play2';
import PauseIcon from '@/icons/pause';
import ClockIcon from '@/icons/clock';
import DangerIcon from '@/icons/danger';

const colorSchemes = ['primary', 'success', 'error', 'orange'];

export default function MonitorListItem({ item }) {

    function tooltipContent(urls) {
        return (
            <Flex direction='column'>
                {urls.map(url => (<Text12W500 key={url}>{url}</Text12W500>))}
            </Flex>
        );
    }

    return (
        <Box
            display='flex'
            justifyContent='space-between'
            gap={4}
            bg='white'
            p={4}
            borderRadius={8}
            mt={4}
        >
            <Flex alignItems='center' gap={4}>
                <Checkbox />
                <Flex direction='column'>
                    <Flex>
                        <Text16W600>{item.title}</Text16W600>
                        {item.brokenUrls && item.brokenUrls.length && (
                            <Tooltip label={tooltipContent(item.brokenUrls)}>
                                <Box>
                                    <DangerIcon mx='2' />
                                </Box>
                            </Tooltip>
                        )}
                    </Flex>
                    <Text14W400>{`${item.urlsCount} URL${
                        item.urlsCount > 1 ? '\'s' : ''
                    }`}</Text14W400>
                </Flex>
            </Flex>
            <Flex alignItems='center' gap={8}>
                <Flex alignItems='center' gap={2}>
                    {item.tags.map(tag => (
                        <Tag size={'sm'} colorScheme={colorSchemes[random(0, 3)]} key={Math.random()} borderRadius={10}>
                            {/* <TagLeftIcon boxSize='12px' as={WeChatPayIcon} /> */}
                            <TagLabel>{tag}</TagLabel>
                        </Tag>
                    ))}
                </Flex>
                <Flex align='center' gap={2}>
                    <ClockIcon size='20px' />
                    <Text14W400>{item.time}</Text14W400>
                </Flex>
                <Box>
                    <ButtonGroup gap={2}>
                        {item.status === 'running' ? (
                            <IconButton backgroundColor='primary.50' icon={<PauseIcon size='20px' color='primary.700' />} />
                        ) : (
                            <IconButton colorScheme='primary' icon={<Play2Icon size='20px' />} />
                        )}
                        <IconButton icon={<EditIcon size='20px' />} />
                        <IconButton icon={<MoreIcon size='20px' />} />
                    </ButtonGroup>
                </Box>
            </Flex>
        </Box>
    );
}

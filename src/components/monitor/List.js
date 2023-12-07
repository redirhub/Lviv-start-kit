import MonitorListItem from './ListItem';
import { Text30W600 } from '../elements/Text30';
import { Text16W500 } from '../elements/Text16';
import { Box, Flex, Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import FilterIcon from '@/icons/filter';
import SidebarIcon from '@/icons/sidebar';
import JustifyIcon from '@/icons/justify';

const items = [
    {
        id: '1',
        title: 'My first monitoring',
        urlsCount: 1,
        tags: ['HTTP', 'WeChat'],
        time: '30 sec',
        status: 'running',
        brokenUrls: ['a.com', 'b.com']
    },
    {
        id: '2',
        title: 'Working list of URL\'s',
        urlsCount: 12,
        tags: ['HTTP', 'Chrome', 'WeChat', 'QQ'],
        time: '2 hours',
        status: 'stop'
    }
];

export default function MonitorList() {
    const [viewType, setViewType] = useState('list');

    return (
        <>
            <Flex justify={'space-between'} mt={12}>
                <Text30W600>Monitorings</Text30W600>
                <Button size='lg' colorScheme='primary'>
                    New monitoring
                </Button>
            </Flex>
            <Flex justify={'space-between'} mt={8}>
                <Button rightIcon={<FilterIcon size='20px' />}>Filter</Button>
                <Flex align={'center'}>
                    <Box mr={4}>
                        <Text16W500>Appearance</Text16W500>
                    </Box>
                    <ButtonGroup isAttached>
                        <IconButton
                            icon={<JustifyIcon size='20px' color='primary.500' />}
                            aria-label='List Style'
                            isActive={viewType === 'list'}
                            onClick={() => setViewType('list')}
                        />
                        <IconButton
                            icon={<SidebarIcon size='20px' color='primary.500' />}
                            aria-label='Compact Style'
                            isActive={viewType === 'split'}
                            onClick={() => setViewType('split')}
                        />
                    </ButtonGroup>
                </Flex>
            </Flex>
            {items.map(item => <MonitorListItem key={item.id} item={item} />)}
        </>
    );
}

import { StateBox } from './SingleItem/StateBox';
import { Flex } from '@chakra-ui/react';

export function StatePanel() {
    return (
        <Flex justify={'space-between'} alignItems={'center'} gap={4}>
            <StateBox text={'Monitoring projects'} type={'project'} count={5} />
            <StateBox text={'Alarms'} type={'alarm'} count={1} />
            <StateBox text={'Errors'} type={'error'} count={2} />
            <StateBox text={'Goods'} type={'good'} count={13} />
        </Flex>
    );
}

import { Box, Flex } from '@chakra-ui/react';
import BoxCardContainer from '@/components/monitor/BoxCardContainer';
import BoxNewMonitoring from '@/components/monitor/BoxNewMonitoring';
import BoxFilterMonitoring from '@/components/monitor/BoxFilterMonitoring';
import ListMonitoring from '@/components/monitor/ListMonitoring';

export function ScreenMonitor() {

    return (
        <Box width="100%" mx='auto'>
            <Flex position='relative' flexDirection={'column'} height='100%'>
                <BoxCardContainer />
                <BoxNewMonitoring />
                <BoxFilterMonitoring />
                <ListMonitoring />
            </Flex>
        </Box>
    );
}

import Button from '../common/Button';
import { Box } from '@chakra-ui/react';


export default function BoxNewMonitoring() {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' mt='12' >
            <Box as='span' fontSize='3xl' fontWeight='600' >Monitorings</Box>
            <Button colorScheme='Primary1' color='white' size='md' text='New Monitoring' ></Button>
        </Box>
    );
}


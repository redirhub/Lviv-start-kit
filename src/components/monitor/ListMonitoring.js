import BoxItemMonitoring from './BoxItemMonitoring';
import { dataListMonitoring } from './data';
import { Box } from '@chakra-ui/react';


export default function ListMonitoring() {
    return (
        <Box mt='4' >
            {
                dataListMonitoring.map((item, index) => <BoxItemMonitoring key={index} item={item} />)
            }
        </Box>
    );
}


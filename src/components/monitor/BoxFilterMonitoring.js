import Button from '../common/Button';
import { Box } from '@chakra-ui/react';
import FilterIcon from '@/icons/filter';
import MenuIcon from '@/icons/menu';
import SidebarIcon from '@/icons/sidebar';


export default function BoxFilterMonitoring() {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' mt='8' >
            <Button bg='white' text='Filter' color='gray-300' size='md' righticon={<FilterIcon size='20px' />} ></Button>
            <Box display='flex' alignItems='center' gap={2} >
                <Box as='span' mr='2' fontSize='md' color='gray-700' >Appearance</Box>
                <Box display='flex'>
                    <Button colorScheme='Primary' size='md' lefticon={<MenuIcon size='20px' color='#165792' />} ></Button>
                    <Button bg='white' size='md' lefticon={<SidebarIcon size='20px' color='#165792' />} ></Button>
                </Box>
            </Box>
        </Box>
    );
}


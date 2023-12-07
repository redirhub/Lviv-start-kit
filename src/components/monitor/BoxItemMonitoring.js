import ItemTag from './ItemTag';
import Button from '../common/Button';
import { Box, Checkbox, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, Wrap, WrapItem } from '@chakra-ui/react';
import AlertTriangleIcon from '@/icons/alert-triangle';
import MoreIcon from '@/icons/more';
import EditIcon from '@/icons/edit';
import PauseIcon from '@/icons/pause';
import ClockIcon from '@/icons/clock';
import Play2Icon from '@/icons/play2';

export default function BoxItemMonitoring({ item }) {
    return (
        <Box display='flex' p='4' mb='2' bg='white' justifyContent='space-between' alignItems='center' borderWidth='1px' borderRadius='md' borderColor='gray-500' >
            <Box display='flex' gap='2' position='relative'>
                <Box display='flex' justifyContent='flex-start' alignItems='center' >
                    <Checkbox size='md' colorScheme='green' defaultChecked={false} checked={false}>
                        <Box display='flex' flexDirection='column' ml='2' >
                            <Box display='flex' alignItems='center' gap='2'>
                                <Box as='span' fontSize='md' fontWeight='700' color='black' >{item?.title}</Box>
                            </Box>
                            <Box as='span' fontSize='sm' fontWeight='300' color='gray-500' >{item?.sub_title}</Box>
                        </Box>
                    </Checkbox>
                </Box>
                {item?.isWarning ? <Popover placement='top'>
                    <PopoverTrigger><AlertTriangleIcon size='20px' color='#DC6803' /></PopoverTrigger>
                    <PopoverContent bg='#101828' color='white' p='2' borderRadius='md' >
                        <PopoverBody>
                            <Text color='white' fontSize='sm' fontWeight={600} >3 broken</Text>
                            <Text color='white' fontSize='sm' >fsas.com</Text>
                            <Text color='white' fontSize='sm' >sdale.com</Text>
                            <Text color='white' fontSize='sm' >dsss.com</Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover> : null}
            </Box>
            <Box display='flex' justifyContent='flex-end' alignItems='center' gap='3' >
                <Wrap>
                    {item?.tags.map((tag, index) =><WrapItem key={index} ><ItemTag title={tag?.title} icon={tag?.icon} bg={tag?.bg} color={tag?.color} /></WrapItem>)}
                </Wrap>
                <Box display='flex' alignItems='center' mx='2' gap='1'>
                    <ClockIcon size='20px' /> sec
                </Box>
                {item?.isPlay ? <Button colorScheme='Primary1' size='md' lefticon={<Play2Icon size='20px' />} ></Button> : <Button colorScheme='Primary' size='md' lefticon={<PauseIcon size='20px' />}></Button>}
                <Button bg='white' color='gray-700' size='md' lefticon={<EditIcon size='20px' />} ></Button>
                <Button bg='white' color='gray-700' size='md' lefticon={<MoreIcon size='20px' />} ></Button>
            </Box>
        </Box>
    );
}


import { useTranslation } from 'react-i18next';
import {
    Box,
    Button,
    Flex,
    Stack,
    Icon,
    Text,
    Tabs,
    TabList,
    Checkbox,
    Tab,
    Tag,
    TagLabel,
    TagLeftIcon,
    Tooltip,
} from '@chakra-ui/react';
import { AppMain } from '@/components/layout/Main';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { BiErrorAlt } from 'react-icons/bi';
import { GoAlert } from 'react-icons/go';
import { IoFilterOutline, IoLogoWechat, IoPlayOutline } from 'react-icons/io5';
import { HiOutlineViewList, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FiSidebar, FiEdit3, FiShield, FiCheckCircle } from 'react-icons/fi';
import { LuClock4 } from 'react-icons/lu';
import { SlControlPause } from 'react-icons/sl';
import { BsGlobe } from 'react-icons/bs';
import { TbBrandChrome } from 'react-icons/tb';
import { FaRegMap } from 'react-icons/fa6';

export default function Monitor() {
    const { t } = useTranslation();

    return (
        <AppMain title={t('shared.monitor', 'Monitor')}>
            <Stack spacing={10}>
                <Flex gap={{base:5, lg:10}} flexWrap={'wrap'}>
                    <Box w={{base:'45%', lg:'23%'}} p='5' rounded={'md'} bgColor={'white'}>
                        <Flex flexWrap={'wrap'} alignItems={'center'} gap={3}>
                            <MdOutlineRemoveRedEye size={30} color='#1C6DB6' />
                            <Text fontWeight={500} fontSize={'16px'} color={'#667085'}>Monitoring Projects</Text>
                        </Flex>
                        <Text fontWeight={600} fontSize={'36px'} textAlign={'center'} color={'#344054'}>5</Text>
                    </Box>
                    <Box w={{ base: '45%', lg: '23%' }} p='5' rounded={'md'} bgColor={'white'}>
                        <Flex flexWrap={'wrap'} alignItems={'center'} gap={3}>
                            <GoAlert size={30} color='#DC6803' />
                            <Text fontWeight={500} fontSize={'16px'} color={'#F79009'}>Alarms</Text>
                        </Flex>
                        <Text fontWeight={600} fontSize={'36px'} textAlign={'center'} color={'#344054'}>1</Text>
                    </Box>
                    <Box w={{ base: '45%', lg: '23%' }} p='5' rounded={'md'} bgColor={'white'}>
                        <Flex flexWrap={'wrap'} alignItems={'center'} gap={3}>
                            <BiErrorAlt size={30} color='#D92D20' />
                            <Text fontWeight={500} fontSize={'16px'} color={'#F04438'}>Errors</Text>
                        </Flex>
                        <Text fontWeight={600} fontSize={'36px'} textAlign={'center'} color={'#344054'}>2</Text>
                    </Box>
                    <Box w={{ base: '45%', lg: '23%' }} p='5' rounded={'md'} bgColor={'white'}>
                        <Flex flexWrap={'wrap'} alignItems={'center'} gap={3}>
                            <FiCheckCircle size={30} color='#12B76A' />
                            <Text fontWeight={500} fontSize={'16px'} color={'#12B76A'}>Good</Text>
                        </Flex>
                        <Text fontWeight={600} fontSize={'36px'} textAlign={'center'} color={'#344054'}>13</Text>
                    </Box>
                </Flex>
                <Stack spacing={5} pb={5}>
                    <Flex flexWrap={'wrap'} gap={5} justifyContent={'space-between'}>
                        <Text textColor={'#344054'} fontWeight={600} fontSize={'30px'} lineHeight={'38px'}>Monitorings</Text>
                        <Button size={'lg'} bgColor={'#1C6DB6'} textColor={'white'}>New monitoring</Button>
                    </Flex>
                    <Flex flexWrap={'wrap'} gap={5} justifyContent={'space-between'}>
                        <Button variant={'outlined'} rightIcon={<IoFilterOutline size={20} />} bgColor={'white'}>Filter</Button>
                        <Flex alignItems={'center'} gap={5}>
                            <Text fontWeight={500} fontSize={'16px'} lineHeight={'24px'}>Appearance</Text>
                            <Tabs size='md' variant='enclosed'>
                                <TabList>
                                    <Tab roundedLeft={'lg'} roundedRight={'none'} bgColor={'white'} borderColor={'gray.300'} _selected={{ bg: 'gray.100' }}>
                                        <Icon color={'#1C6DB6'} boxSize={5} as={HiOutlineViewList} />
                                    </Tab>
                                    <Tab roundedLeft={'none'} roundedRight={'lg'} bgColor={'white'} borderColor={'gray.300'} _selected={{ bg: 'gray.100' }}>
                                        <Icon color={'#1C6DB6'} boxSize={5} as={FiSidebar} />

                                    </Tab>
                                </TabList>
                            </Tabs>
                        </Flex>
                    </Flex>
                    <Stack spacing={5}>
                        <Flex p={5} gap={5} flexWrap={'wrap'} justifyContent={'space-between'} bgColor={'white'} rounded={'xl'}>
                            <Flex gap={5}>
                                <Checkbox rounded={'xl'} size={'lg'}/>
                                <Stack>
                                    <Text textColor={'#344054'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'}>My first monitoring</Text>
                                    <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>2 URL&apos;S</Text>
                                </Stack>
                            </Flex>
                            <Flex flexWrap={'wrap'} gap={10}>
                                <Flex flexWrap={'wrap'} alignItems={'center'}>
                                    <Tag size={'lg'} bgColor={'#FFFAEB'} borderRadius='full'>
                                        <TagLeftIcon color={'#B54708'} as={BsGlobe} />
                                        <TagLabel color={'#B54708'}>HTTP</TagLabel>
                                    </Tag>
                                </Flex>
                                <Flex gap={5} flexWrap={'wrap'}>
                                    <Flex alignItems={'center'} gap={2} mr={5}>
                                        <Icon color={'#667085'} boxSize={5} as={LuClock4} />
                                        <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>30 Sec</Text>
                                    </Flex>
                                    <Flex gap={3} alignItems={'center'}>
                                        <Button p={3} bgColor={'#D2E2F0'} variant={'outline'}>
                                            <Icon color={'#1C6DB6'} fontSize={'5px'} boxSize={5} as={SlControlPause} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={FiEdit3} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={HiOutlineDotsHorizontal} />
                                        </Button>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </Flex>
                        <Flex p={5} gap={5} flexWrap={'wrap'} justifyContent={'space-between'} bgColor={'white'} rounded={'xl'}>
                            <Flex gap={5}>
                                <Checkbox rounded={'xl'} size={'lg'} />
                                <Stack>
                                    <Text textColor={'#344054'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'}>My first monitoring</Text>
                                    <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>2 URL&apos;S</Text>
                                </Stack>
                            </Flex>
                            <Flex flexWrap={'wrap'} gap={10}>
                                <Flex flexWrap={'wrap'} gap={5} alignItems={'center'}>
                                    <Tag size={'lg'} bgColor={'#FFFAEB'} borderRadius='full'>
                                        <TagLeftIcon color={'#B54708'} as={BsGlobe} />
                                        <TagLabel color={'#B54708'}>HTTP</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#ECFDF3'} borderRadius='full'>
                                        <TagLeftIcon color={'#027A48'} as={IoLogoWechat} />
                                        <TagLabel color={'#027A48'}>WeChat</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#FFF6ED'} borderRadius='full'>
                                        <TagLeftIcon color={'#C4320A'} as={FiShield} />
                                        <TagLabel color={'#C4320A'}>QQ</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#FEF3F2'} borderRadius='full'>
                                        <TagLeftIcon color={'#B42318'} as={TbBrandChrome} />
                                        <TagLabel color={'#B42318'}>Chrome</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#F8F9FC'} borderRadius='full'>
                                        <TagLeftIcon color={'#363F72'} as={FaRegMap} />
                                        <TagLabel color={'#363F72'}>Country</TagLabel>
                                    </Tag>

                                </Flex>
                                <Flex gap={5} flexWrap={'wrap'}>
                                    <Flex alignItems={'center'} gap={2} mr={5}>
                                        <Icon color={'#667085'} boxSize={5} as={LuClock4} />
                                        <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>30 Sec</Text>
                                    </Flex>
                                    <Flex gap={3} alignItems={'center'}>

                                        <Button p={3} bgColor={'#D2E2F0'} variant={'outline'}>
                                            <Icon color={'#1C6DB6'} fontSize={'5px'} boxSize={5} as={SlControlPause} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={FiEdit3} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={HiOutlineDotsHorizontal} />
                                        </Button>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </Flex>
                        <Flex p={5} gap={5} flexWrap={'wrap'} justifyContent={'space-between'} bgColor={'white'} rounded={'xl'}>
                            <Flex gap={5}>
                                <Checkbox rounded={'xl'} size={'lg'} />
                                <Stack>
                                    <Flex alignItems={'center'} gap={2}>
                                        <Text textColor={'#344054'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'}>Working list of URL&apos;s</Text>
                                        <Tooltip label={
                                            <Stack rounded={'xl'} p={2} w={150}>
                                                <Text fontWeight={600} fontSize={'12'} lineHeight={'18px'}>3 broken</Text>
                                                <Text fontWeight={400} fontSize={'12px'} lineHeight={'18px'}>fsas.com</Text>
                                                <Text fontWeight={400} fontSize={'12px'} lineHeight={'18px'}>sda1e.io</Text>
                                                <Text fontWeight={400} fontSize={'12px'} lineHeight={'18px'}>dsss.com</Text>
                                            </Stack>
                                        } placement='top'>
                                            <Box cursor={'pointer'}>
                                                <Icon color={'#B54708'} boxSize={5} as={GoAlert} />
                                            </Box>
                                        </Tooltip>
                                    </Flex>
                                    <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>12 URL&apos;S</Text>
                                </Stack>
                            </Flex>
                            <Flex flexWrap={'wrap'} gap={10}>
                                <Flex flexWrap={'wrap'} gap={5} alignItems={'center'}>
                                    <Tag size={'lg'} bgColor={'#FFF6ED'} borderRadius='full'>
                                        <TagLeftIcon color={'#C4320A'} as={FiShield} />
                                        <TagLabel color={'#C4320A'}>QQ</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#FEF3F2'} borderRadius='full'>
                                        <TagLeftIcon color={'#B42318'} as={TbBrandChrome} />
                                        <TagLabel color={'#B42318'}>Chrome</TagLabel>
                                    </Tag>
                                </Flex>
                                <Flex gap={5} flexWrap={'wrap'}>
                                    <Flex alignItems={'center'} gap={2} mr={5}>
                                        <Icon color={'#667085'} boxSize={5} as={LuClock4} />
                                        <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>30 Sec</Text>

                                    </Flex>
                                    <Flex gap={3} alignItems={'center'}>

                                        <Button p={3} bgColor={'#1C6DB6'} variant={'outline'}>
                                            <Icon color={'white'} fontSize={'5px'} boxSize={5} as={IoPlayOutline} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={FiEdit3} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={HiOutlineDotsHorizontal} />
                                        </Button>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </Flex>
                        <Flex p={5} gap={5} flexWrap={'wrap'} justifyContent={'space-between'} bgColor={'white'} rounded={'xl'}>
                            <Flex gap={5}>
                                <Checkbox rounded={'xl'} size={'lg'} />
                                <Stack>
                                    <Text textColor={'#344054'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'}>click-edge</Text>
                                    <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>1 URL&apos;S</Text>
                                </Stack>
                            </Flex>
                            <Flex flexWrap={'wrap'} gap={10}>
                                <Flex flexWrap={'wrap'} alignItems={'center'}>
                                    <Tag size={'lg'} bgColor={'#FFFAEB'} borderRadius='full'>
                                        <TagLeftIcon color={'#B54708'} as={BsGlobe} />
                                        <TagLabel color={'#B54708'}>HTTP</TagLabel>
                                    </Tag>
                                </Flex>
                                <Flex gap={5} flexWrap={'wrap'}>
                                    <Flex alignItems={'center'} gap={2} mr={5}>
                                        <Icon color={'#667085'} boxSize={5} as={LuClock4} />
                                        <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>30 Sec</Text>

                                    </Flex>
                                    <Flex gap={3} alignItems={'center'}>
                                        <Button p={3} bgColor={'#D2E2F0'} variant={'outline'}>
                                            <Icon color={'#1C6DB6'} fontSize={'5px'} boxSize={5} as={SlControlPause} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={FiEdit3} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={HiOutlineDotsHorizontal} />
                                        </Button>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </Flex>
                        <Flex p={5} gap={5} flexWrap={'wrap'} justifyContent={'space-between'} bgColor={'white'} rounded={'xl'}>
                            <Flex gap={5}>
                                <Checkbox rounded={'xl'} size={'lg'} />
                                <Stack>
                                    <Flex alignItems={'center'} gap={2}>
                                        <Text textColor={'#344054'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'}>Premium monitoring</Text>
                                        <Tooltip label={
                                            <Stack rounded={'xl'} p={2} w={150}>
                                                <Text fontWeight={600} fontSize={'12'} lineHeight={'18px'}>3 broken</Text>
                                                <Text fontWeight={400} fontSize={'12px'} lineHeight={'18px'}>fsas.com</Text>
                                                <Text fontWeight={400} fontSize={'12px'} lineHeight={'18px'}>sda1e.io</Text>
                                                <Text fontWeight={400} fontSize={'12px'} lineHeight={'18px'}>dsss.com</Text>
                                            </Stack>
                                        } placement='top'>
                                            <Box cursor={'pointer'}>
                                                <Icon color={'#B54708'} boxSize={5} as={GoAlert} />
                                            </Box>
                                        </Tooltip>
                                    </Flex>
                                    <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>10 URL&apos;S</Text>
                                </Stack>
                            </Flex>
                            <Flex flexWrap={'wrap'} gap={10}>
                                <Flex flexWrap={'wrap'} gap={5} alignItems={'center'}>
                                    <Tag size={'lg'} bgColor={'#FFFAEB'} borderRadius='full'>
                                        <TagLeftIcon color={'#B54708'} as={BsGlobe} />
                                        <TagLabel color={'#B54708'}>HTTP</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#ECFDF3'} borderRadius='full'>
                                        <TagLeftIcon color={'#027A48'} as={IoLogoWechat} />
                                        <TagLabel color={'#027A48'}>WeChat</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#FFF6ED'} borderRadius='full'>
                                        <TagLeftIcon color={'#C4320A'} as={FiShield} />
                                        <TagLabel color={'#C4320A'}>QQ</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#FEF3F2'} borderRadius='full'>
                                        <TagLeftIcon color={'#B42318'} as={TbBrandChrome} />
                                        <TagLabel color={'#B42318'}>Chrome</TagLabel>
                                    </Tag>
                                    <Tag size={'lg'} bgColor={'#F8F9FC'} borderRadius='full'>
                                        <TagLeftIcon color={'#363F72'} as={FaRegMap} />
                                        <TagLabel color={'#363F72'}>Country</TagLabel>
                                    </Tag>

                                </Flex>
                                <Flex gap={5} flexWrap={'wrap'}>
                                    <Flex alignItems={'center'} gap={2} mr={5}>
                                        <Icon color={'#667085'} boxSize={5} as={LuClock4} />
                                        <Text textColor={'#667085'} fontWeight={400} fontSize={'14px'} lineHeight={'20px'}>2 hours</Text>

                                    </Flex>
                                    <Flex gap={3} alignItems={'center'}>

                                        <Button p={3} bgColor={'#D2E2F0'} variant={'outline'}>
                                            <Icon color={'#1C6DB6'} fontSize={'5px'} boxSize={5} as={SlControlPause} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={FiEdit3} />
                                        </Button>
                                        <Button p={3} variant={'outline'} borderColor={'gray.300'}>
                                            <Icon color={'#344054'} boxSize={5} as={HiOutlineDotsHorizontal} />
                                        </Button>

                                    </Flex>
                                </Flex>

                            </Flex>
                        </Flex>
                    </Stack>

                </Stack>
            </Stack>
        </AppMain>
    );
}

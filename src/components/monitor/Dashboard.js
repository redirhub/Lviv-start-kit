import MonitorIcon from '../../icons/monitor';
import WarningIcon from '../../icons/warning';
import AlertTriangleIcon from '../../icons/alert-triangle';
import CheckCircleIcon from '../../icons/check-circle';
import ClockIcon from '../../icons/clock';
import WeChatIcon from '../../icons/wechat';
import ChromeIcon from '../../icons/chrome';
import MapIcon from '../../icons/map';
import PauseIcon from '../../icons/pause';
import EditIcon from '../../icons/edit';
import Play2Icon from '../../icons/play2';
import MoreIcon from '../../icons/more';
import ShieldIcon from '../../icons/shield';
import DomainIcon from '../../icons/domain';
import FilterIcon from '../../icons/filter';
import SidebarIcon from '../../icons/sidebar';
import {
    Flex,
    Heading,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text, CardBody,
    IconButton, Checkbox, SimpleGrid, Card
} from '@chakra-ui/react';
import MenuIcon from '@/icons/menu';

export function Dashboard() {

    const styler = {
        _hover: { backgroundColor: '#FFF' },
        _active: { backgroundColor: '#FFF' },
    };

    return (
        <>
            <div className={'monitor-dashboard'}>
                <SimpleGrid spacing={4} templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)', sm: 'repeat(2, 1fr)' }}>
                    <Card>
                        <CardBody padding={{ base: '12px 12px 8px', lg: '16px 16px 12px', md: '14px 14px 10px' }}>
                            <Flex gap='2' alignItems='center' flexWrap='wrap' mb={2}>
                                <MonitorIcon color="primary.500" mr={1} size="22px" />
                                <Text color="gray.500" fontSize={{ base:'14px', lg: '16px', md:'15px' }} fontWeight={'500'} lineHeight={1.5}>Monitoring projects</Text>
                            </Flex>
                            <Text textAlign={'center'} fontSize={{ base:'28px', lg:'36px', md:'32px' }} fontWeight={'600'} lineHeight={'122.222%'}>5</Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody padding={{ base: '12px 12px 8px', lg: '16px 16px 12px', md: '14px 14px 10px' }}>
                            <Flex gap='2' alignItems='center' flexWrap='wrap' mb={2}>
                                <WarningIcon color="warning.500" mr={1} size="22px" />
                                <Text color={'#DC6803'} fontSize={{ base:'14px', lg: '16px', md:'15px' }} fontWeight={'500'} lineHeight={1.5}>Alarms</Text>
                            </Flex>
                            <Text textAlign={'center'} fontSize={{ base:'28px', lg:'36px', md:'32px' }} fontWeight={'600'} lineHeight={'122.222%'}>1</Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody padding={{ base: '12px 12px 8px', lg: '16px 16px 12px', md: '14px 14px 10px' }}>
                            <Flex gap='2' alignItems='center' flexWrap='wrap' mb={2}>
                                <AlertTriangleIcon color="error.600" mr={1} size="22px" />
                                <Text color="error.500" fontSize={{ base:'14px', lg: '16px', md:'15px' }} fontWeight={'500'} lineHeight={1.5}>Errors</Text>
                            </Flex>
                            <Text textAlign={'center'} fontSize={{ base:'28px', lg:'36px', md:'32px' }} fontWeight={'600'} lineHeight={'122.222%'}>2</Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody padding={{ base: '12px 12px 8px', lg: '16px 16px 12px', md: '14px 14px 10px' }}>
                            <Flex gap='2' alignItems='center' flexWrap='wrap' mb={2}>
                                <CheckCircleIcon color="success.500" mr={1} size="22px" />
                                <Text color="success.500" fontSize={{ base:'14px', lg: '16px', md:'15px' }} fontWeight={'500'} lineHeight={1.5}>Good</Text>
                            </Flex>
                            <Text textAlign={'center'} fontSize={{ base:'28px', lg:'36px', md:'32px' }} fontWeight={'600'} lineHeight={'122.222%'}>13</Text>
                        </CardBody>
                    </Card>
                </SimpleGrid>

                <Flex alignItems={'center'} justify={'space-between'} mt={12} pb={8}>
                    <Heading as='h3' fontSize={{ base: '20px', lg: '30px', md: '25px' }} lineHeight={'126.667%'}>Monitorings</Heading>
                    <Button backgroundColor={'primary.600'} color={'#FFF'} _hover={{ backgroundColor: '#2278c6' }} padding={{ base: '9px 15px', lg: '11px 20px', md:'10px 18px' }} height={'auto'} fontSize={{ base: '14px', lg: '16px', md: '15px' }} fontWeight={600} lineHeight={1.5} >New monitoring</Button>
                </Flex>
                <Flex alignItems={'center'} justify={'space-between'} pb={8}>
                    <Menu isLazy>
                        <MenuButton as={Button} {...styler} px={4} py={'10px'} lineHeight={'142.857%'} alignItems={'center'} borderRadius={8} border={'1px solid gray.300'} color={'gray.700'} fontSize={'14px'} fontWeight={'600'}>
                           Filter
                            <FilterIcon color="gray.700" ml={'10px'} size="20px" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Flex alignItems={'center'} gap={4} color={'gray.700'}>
                        <Text fontSize='md' >Appearance</Text>
                        <Flex alignItems={'center'} borderRadius={8} border={'1px solid'} borderColor={'gray.300'} overflow={'hidden'} >
                            <IconButton backgroundColor={'gray.100'} color={'primary.600'} padding={'0'} border={0} borderRight={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={'0px'} icon={<MenuIcon/>} />
                            <IconButton padding={'0'} color={'primary.600'} border={0} borderRadius={0} margin={0} _hover={{ backgroundColor: 'gray.100' }} icon={<SidebarIcon />} />
                        </Flex>
                    </Flex>
                </Flex>

                <Flex direction={'column'} gap={4} pb={8}>
                    <Flex wrap={{ base: 'wrap', lg: 'nowrap' }} justify={'space-between'} alignItems={'center'} borderRadius={8} backgroundColor={'#FFF'} padding={{ base: '14px 20px', lg:'16px 24px' }} gap={{ base: 4, lg: 8 }}>
                        <Flex gap={{ base:2, lg:4, md:3 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} mr={'auto'} order={{ base: '2', sm:'1' }}>
                            <Checkbox className={'custom-checkbox'} defaultChecked/>
                            <Flex direction={'column'}>
                                <Heading as='h6' size='xs' fontWeight={'600'} lineHeight={1.5} color={'gray.700'}>My first monitoring</Heading>
                                <Text fontSize='sm' color={'gray.500'} lineHeight={1.43} fontWeight={400} >2 URL’s</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:1, lg:2 }} alignItems={'center'} justifyContent={{ base: 'flex-start', lg:'flex-end' }} wrap={'wrap'} w={{ base: '100%', lg: 'auto' }} order={{ base: '3', lg: '2' }}>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'warning.50'} color={'warning.700'}>
                                <DomainIcon color="warning.700" size="12px" />
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>HTTP</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:3, lg:8, md:6, sm:4 }} alignItems={'center'} w={{ base: '100%', sm: 'auto' }} order={{ base: '1', lg: '3', sm:'2' }}>
                            <Flex gap={{ base:1, lg:2 }} alignItems={'center'}>
                                <ClockIcon color="gray.500" size={{ base: '15px', lg: '20px', md:'18px' }}/>
                                <Text fontSize={{ base: '12px', lg:'14px' }} whiteSpace={'nowrap'} color={'gray.500'}>30 sec</Text>
                            </Flex>
                            <Flex gap={{ base:2, lg:4, md:3 }} alignItems={'center'}>
                                <IconButton color={'primary.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'primary.50'} backgroundColor={'primary.50'} _hover={{ backgroundColor: 'primary.600', color: '#FFFFFF', borderColor: 'primary.600' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<PauseIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<EditIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<MoreIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex wrap={{ base: 'wrap', lg: 'nowrap' }} justify={'space-between'} alignItems={'center'} borderRadius={8} backgroundColor={'#FFF'} padding={{ base: '14px 20px', lg:'16px 24px' }} gap={{ base: 4, lg: 8 }}>
                        <Flex gap={{ base:2, lg:4, md:3 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} mr={'auto'} order={{ base: '2', sm:'1' }}>
                            <Checkbox className={'custom-checkbox'}/>
                            <Flex direction={'column'}>
                                <Heading as='h6' size='xs' fontWeight={'600'} lineHeight={1.5} color={'gray.700'}>My first monitoring</Heading>
                                <Text fontSize='sm' color={'gray.500'} lineHeight={1.43} fontWeight={400} >2 URL’s</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:1, lg:2 }} alignItems={'center'} justifyContent={{ base: 'flex-start', lg:'flex-end' }} wrap={'wrap'} w={{ base: '100%', lg: 'auto' }} order={{ base: '3', lg: '2' }}>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'warning.50'} color={'warning.700'}>
                                <DomainIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>HTTP</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'success.50'} color={'success.700'}>
                                <WeChatIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>WeChat</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'orange.50'} color={'orange.700'}>
                                <ShieldIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>QQ</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'error.50'} color={'error.700'}>
                                <ChromeIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>Chrome</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'blue_gray.50'} color={'blue_gray.700'}>
                                <MapIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>Country</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:3, lg:8, md:6, sm:4 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} order={{ base: '1', lg: '3', sm:'2' }}>
                            <Flex gap={{ base:1, lg:2 }} alignItems={'center'}>
                                <ClockIcon color="gray.500" size={{ base: '15px', lg: '20px', md:'18px' }}/>
                                <Text fontSize={{ base: '12px', lg:'14px' }} whiteSpace={'nowrap'} color={'gray.500'}>30 sec</Text>
                            </Flex>
                            <Flex gap={{ base:2, lg:4, md:3 }} alignItems={'center'}>
                                <IconButton color={'primary.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'primary.50'} backgroundColor={'primary.50'} _hover={{ backgroundColor: 'primary.600', color: '#FFFFFF', borderColor: 'primary.600' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<PauseIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<EditIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<MoreIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex wrap={{ base: 'wrap', lg: 'nowrap' }} justify={'space-between'} alignItems={'center'} borderRadius={8} backgroundColor={'#FFF'} padding={{ base: '14px 20px', lg:'16px 24px' }} gap={{ base: 4, lg: 8 }}>
                        <Flex gap={{ base:2, lg:4, md:3 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} mr={'auto'} order={{ base: '2', sm:'1' }}>
                            <Checkbox className={'custom-checkbox'}/>
                            <Flex direction={'column'}>
                                <Heading as='h6' size='xs' fontWeight={'600'} lineHeight={1.5} color={'gray.700'}>Working list of URL’s <WarningIcon color="#B54708" ml={1} size="20px" /> </Heading>
                                <Text fontSize='sm' color={'gray.500'} lineHeight={1.43} fontWeight={400} >2 URL’s</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:1, lg:2 }} alignItems={'center'} justifyContent={{ base: 'flex-start', lg:'flex-end' }} wrap={'wrap'} w={{ base: '100%', lg: 'auto' }} order={{ base: '3', lg: '2' }}>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'orange.50'} color={'orange.700'}>
                                <ShieldIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>QQ</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'error.50'} color={'error.700'}>
                                <ChromeIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>Chrome</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:3, lg:8, md:6, sm:4 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} order={{ base: '1', lg: '3', sm:'2' }}>
                            <Flex gap={{ base:1, lg:2 }} alignItems={'center'}>
                                <ClockIcon color="gray.500" size={{ base: '15px', lg: '20px', md:'18px' }}/>
                                <Text fontSize={{ base: '12px', lg:'14px' }} color={'gray.500'}>30 sec</Text>
                            </Flex>
                            <Flex gap={{ base:2, lg:4, md:3 }} alignItems={'center'}>
                                <IconButton color={'#FFFFFF'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'primary.600'} backgroundColor={'primary.600'} _hover={{ backgroundColor: 'primary.600', color: '#FFFFFF', borderColor: 'primary.600' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<Play2Icon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<EditIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<MoreIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex wrap={{ base: 'wrap', lg: 'nowrap' }} justify={'space-between'} alignItems={'center'} borderRadius={8} backgroundColor={'#FFF'} padding={{ base: '14px 20px', lg:'16px 24px' }} gap={{ base: 4, lg: 8 }}>
                        <Flex gap={{ base:2, lg:4, md:3 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} mr={'auto'} order={{ base: '2', sm:'1' }}>
                            <Checkbox className={'custom-checkbox'}/>
                            <Flex direction={'column'}>
                                <Heading as='h6' size='xs' fontWeight={'600'} lineHeight={1.5} color={'gray.700'}>My first monitoring</Heading>
                                <Text fontSize='sm' color={'gray.500'} lineHeight={1.43} fontWeight={400} >2 URL’s</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:1, lg:2 }} alignItems={'center'} wrap={'wrap'} w={{ base: '100%', lg: 'auto' }} order={{ base: '3', lg: '2' }}>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'warning.50'} color={'warning.700'}>
                                <DomainIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>HTTP</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:3, lg:8, md:6, sm:4 }} w={{ base: '100%', sm: 'auto' }} justifyContent={{ base: 'flex-start', lg:'flex-end' }} alignItems={'center'} order={{ base: '2', lg: '3' }}>
                            <Flex gap={{ base:1, lg:2 }} alignItems={'center'}>
                                <ClockIcon color="gray.500" size={{ base: '15px', lg: '20px', md:'18px' }}/>
                                <Text fontSize={{ base: '12px', lg:'14px' }} whiteSpace={'nowrap'} color={'gray.500'}>30 sec</Text>
                            </Flex>
                            <Flex gap={{ base:2, lg:4, md:3 }} alignItems={'center'}>
                                <IconButton color={'primary.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'primary.50'} backgroundColor={'primary.50'} _hover={{ backgroundColor: 'primary.600', color: '#FFFFFF', borderColor: 'primary.600' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<PauseIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<EditIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<MoreIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex wrap={{ base: 'wrap', lg: 'nowrap' }} justify={'space-between'} alignItems={'center'} borderRadius={8} backgroundColor={'#FFF'} padding={{ base: '14px 20px', lg:'16px 24px' }} gap={{ base: 4, lg: 8 }}>
                        <Flex gap={{ base:2, lg:4, md:3 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} mr={'auto'} order={{ base: '2', sm:'1' }}>
                            <Checkbox className={'custom-checkbox'}/>
                            <Flex direction={'column'}>
                                <Heading as='h6' size='xs' fontWeight={'600'} lineHeight={1.5} color={'gray.700'}>Premium monitoring <WarningIcon color="#DC6803" ml={1} size="20px" /></Heading>
                                <Text fontSize='sm' color={'gray.500'} lineHeight={1.43} fontWeight={400} >2 URL’s</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:1, lg:2 }} alignItems={'center'} justifyContent={{ base: 'flex-start', lg:'flex-end' }} wrap={'wrap'} w={{ base: '100%', lg: 'auto' }} order={{ base: '3', lg: '2' }}>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'warning.50'} color={'warning.700'}>
                                <DomainIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>HTTP</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'success.50'} color={'success.700'}>
                                <WeChatIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>WeChat</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'orange.50'} color={'orange.700'}>
                                <ShieldIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>QQ</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'error.50'} color={'error.700'}>
                                <ChromeIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>Chrome</Text>
                            </Flex>
                            <Flex gap={1} alignItems={'center'} borderRadius={50} padding={'4px 10px 4px 12px'} backgroundColor={'blue_gray.50'} color={'blue_gray.700'}>
                                <MapIcon size="12px"/>
                                <Text fontSize='sm' lineHeight={'142.857%'} fontWeight={'500'}>Country</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={{ base:3, lg:8, md:6, sm:4 }} w={{ base: '100%', sm: 'auto' }} alignItems={'center'} order={{ base: '1', lg: '3', sm:'2' }}>
                            <Flex gap={{ base:1, lg:2 }} alignItems={'center'}>
                                <ClockIcon color="gray.500" size={{ base: '15px', lg: '20px', md:'18px' }}/>
                                <Text fontSize={{ base: '12px', lg:'14px' }} whiteSpace={'nowrap'} color={'gray.500'}>30 sec</Text>
                            </Flex>
                            <Flex gap={{ base:2, lg:4, md:3 }} alignItems={'center'}>
                                <IconButton color={'primary.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'primary.50'} backgroundColor={'primary.50'} _hover={{ backgroundColor: 'primary.600', color: '#FFFFFF', borderColor: 'primary.600' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<PauseIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<EditIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                                <IconButton color={'gray.700'} minW={{ base: '30px', lg:'40px', md:'35px' }} h={{ base: '30px', lg:'40px', md:'35px' }} padding={'0'} border={'1px solid'} borderColor={'gray.300'} _hover={{ backgroundColor: 'gray.100' }} borderRadius={{ base: '4px', lg: '8px', md:'4px' }} icon={<MoreIcon size={{ base:'15px', lg:'20px', md:'18px' }}/>} />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </>
    );
}

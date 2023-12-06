import React from 'react';
import { Flex, GridItem, Grid, Text, Box, Stack, Image, Link, Badge  } from '@chakra-ui/react';

import ArrowUpRightIcon from '@/icons/arrow-up-right';
import { LAYOUT_STD_WIDTH } from '@/config/constant';

const HomeBlogCardContainer = () => {
    return (
        <Box mt={10} maxWidth={LAYOUT_STD_WIDTH}>
            <Flex alignItems='center' gap={4}>
                <Text color='gray.700' fontWeight={500} fontSize={20} lineHeight={8}>
                    Blog
                </Text>
                <Link href='https://chakra-ui.com' isExternal color='primary.700' fontWeight={600} fontSize={14}>
                    View more articles <ArrowUpRightIcon size={5} />
                </Link>
            </Flex>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', 'lg': 'repeat(3, 1fr)' }} gap={8} mt={6}>
                <GridItem >
                    <Stack direction='column' width='100%' backgroundColor='white' borderRadius={10} height='100%'>
                        <Image src='/assets/images/home/blog1.png' alt='Does 301 Redirect Pass Link Juice?' maxH={60}/>
                        <Box px={6} py={8}>
                            <Text color='primary.700' fontWeight={600} fontSize={14}>
                                Olivia Rhye • 07 Sep 2023
                            </Text>
                            <Flex mt={3} gap={4}>
                                <Text color='gray.900' fontWeight={600} fontSize={20} lineHeight={8} width='100%'>
                                    Does 301 Redirect Pass Link Juice?
                                </Text>
                                <ArrowUpRightIcon size={8} />
                            </Flex>
                            <Text color='gray.500' fontWeight={400} fontSize={16} mt={3} lineHeight={6}>
                                How do you create compelling presentations that wow your colleag...
                            </Text>
                            <Flex mt={5} gap={2} direction='row' flexWrap="wrap">
                                <Badge colorScheme='primary' px={2} py={0.5} borderRadius={12}>Design</Badge>
                                <Badge colorScheme='blue' px={2} py={0.5} borderRadius={12}>Research</Badge>
                                <Badge colorScheme='pink' px={2} py={0.5} borderRadius={12}>Presentation</Badge>
                            </Flex>
                        </Box>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='column' width='100%'  backgroundColor='white' borderRadius={10} height='100%'>
                        <Image src='/assets/images/home/blog2.png' alt='Does Redirecting A URL Affect SEO?' maxH={60}/>
                        <Box px={6} py={8}>
                            <Text color='primary.700' fontWeight={600} fontSize={14}>
                                Olivia Rhye • 07 Sep 2023
                            </Text>
                            <Flex mt={3} gap={4}>
                                <Text color='gray.900' fontWeight={600} fontSize={20} lineHeight={8} width='100%'>
                                    Does Redirecting A URL Affect SEO?
                                </Text>
                                <ArrowUpRightIcon size={8} />
                            </Flex>
                            <Text color='gray.500' fontWeight={400} fontSize={16} mt={3} lineHeight={6}>
                                In the ever-evolving digital landscape, businesses and marketers constantly...
                            </Text>
                            <Flex mt={5} gap={2} flexWrap="wrap">
                                <Badge colorScheme='primary' px={2} py={0.5} borderRadius={12}>Design</Badge>
                                <Badge colorScheme='blue' px={2} py={0.5} borderRadius={12}>Research</Badge>
                                <Badge colorScheme='pink' px={2} py={0.5} borderRadius={12}>Presentation</Badge>
                            </Flex>
                        </Box>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack direction='column'  width='100%'  backgroundColor='white' borderRadius={10} height='100%'>
                        <Image src='/assets/images/home/blog3.png' alt='When Is 301 Redirect Preferred Over Canonical?' maxH={60}/>
                        <Box px={6} py={8}>
                            <Text color='primary.700' fontWeight={600} fontSize={14}>
                                Olivia Rhye • 07 Sep 2023
                            </Text>
                            <Flex mt={3} gap={4}>
                                <Text color='gray.900' fontWeight={600} fontSize={20} lineHeight={8} width='100%'>
                                    When Is 301 Redirect Preferred Over Canonical?
                                </Text>
                                <ArrowUpRightIcon size={8} />
                            </Flex>
                            <Text color='gray.500' fontWeight={400} fontSize={16} mt={3} lineHeight={6}>

                            </Text>
                            <Flex mt={5} gap={2} flexWrap="wrap">
                                <Badge colorScheme='primary' px={2} py={0.5} borderRadius={12}>Design</Badge>
                                <Badge colorScheme='blue' px={2} py={0.5} borderRadius={12}>Research</Badge>
                                <Badge colorScheme='pink' px={2} py={0.5} borderRadius={12}>Presentation</Badge>
                            </Flex>
                        </Box>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default HomeBlogCardContainer;

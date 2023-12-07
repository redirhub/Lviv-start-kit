import { Text14W500 } from '../elements/Text14';
import React from 'react';
import { Flex, GridItem, Grid, Button, Text, Box, Stack, Center, Progress, Popover, PopoverContent, useDisclosure, SimpleGrid, PopoverTrigger } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { capitalize } from 'lodash';
import InfoIcon from '@/icons/info';

import UpgradeIcon from '@/icons/upgrade';
import useUsage from '@/hooks/useUsage';
import ProductIcon from '@/icons/product';

function HomePlanCard({ product }) {

    const { t } = useTranslation();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { subscription, percent, colorScheme, upgradeLink, limits } = useUsage(product);

    console.log('subscription', subscription, percent, colorScheme, upgradeLink);

    if (!subscription) return null;

    return (
        <>
            <Stack direction='column' justifyContent='center' p={6} width='100%' backgroundColor='white' borderRadius={10}>
                <Flex alignItems='center'>
                    <Center w={14} h={14} borderRadius={8.75} bg='warning.500'>
                        <ProductIcon product={product} width={8} height={8} color={'white'} />
                    </Center>
                    <Box ml={4} mt={0.5}>
                        <Text color='gray.500' fontWeight={500} fontSize={16} lineHeight={6}>
                            {subscription.product_name}
                        </Text>
                        <Text color='gray.700' fontWeight={700} fontSize={20} lineHeight={7}>
                            {subscription?.name}
                        </Text>
                    </Box>
                </Flex>

                <Popover trigger='hover'
                    returnFocusOnClose={false}
                    placement='top'
                    isOpen={isOpen}
                    onClose={onClose}
                    closeOnBlur={false}
                >
                    <PopoverTrigger>
                        <Box />
                    </PopoverTrigger>
                    <PopoverContent
                        width='240px'
                        mx={2}>
                        <Box>
                            <SimpleGrid gap={4} columns={{ sm: 1 }} border='1px' borderStyle='solid' borderColor='gray.200' borderRadius='8' p={4}>
                                {
                                    limits.map((e, i) => (
                                        <Box key={i}>
                                            <Text14W500>
                                                {e.used_readable} / {e.included_readable}
                                                &nbsp;
                                                {t('subscription.' + e.id, capitalize(e.id))}
                                            </Text14W500>
                                            <Progress value={e.percent} mt={3} />
                                        </Box>
                                    ))
                                }
                            </SimpleGrid>
                        </Box>
                    </PopoverContent>
                </Popover>
                <Flex alignItems='center' mt={4} gap={2}>
                    <Text color='gray.500' fontWeight={400} fontSize={12} lineHeight={5}>
                        {t('subscription.plan-percent', 'You\'re at {{n}}% of your plan', { n: percent })}
                    </Text>
                    <InfoIcon boxSize={4} color='gray.400' onClick={onOpen} cursor='pointer' />
                </Flex>
                <Flex alignItems='center' mt={2} gap={3}>
                    <Progress width={'100%'} value={percent} colorScheme={colorScheme} />
                    <Text color='gray.700' fontWeight={400} fontSize={14} lineHeight={5}>
                        {percent}%
                    </Text>
                </Flex>
                <Button color='gray.700'
                    onClick={() => router.push(upgradeLink)}
                    fontSize={14} lineHeight={5} fontWeight={600} w={40} h={10} mt={4} leftIcon={<UpgradeIcon size={5} />}>
                    {t('subscription.upgrade', 'Upgrade')}
                </Button>
            </Stack>
        </>

    );
};

const HomePlanCardContainer = () => {
    return (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', 'md': 'repeat(2, 1fr)' }} gap={8} mt={10}>
            <GridItem>
                <HomePlanCard product='redirect' />
            </GridItem>
            <GridItem>
                <HomePlanCard product='short-url' />
            </GridItem>
        </Grid>
    );
};

export default HomePlanCardContainer;

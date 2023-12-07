import { Text14W600, Text14W500 } from '../elements/Text14';
import { Text12W400 } from '../elements/Text12';
import { Box, Flex, Text, Progress, SimpleGrid, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { capitalize, values } from 'lodash';
import { useTranslation } from 'react-i18next';
import { PRODUCTS, PRODUCT_NAME } from '@/config/subscriptions';
import { AppLink } from '@/components/AppLink';
import InfoIcon from '@/icons/info';
import useUsage from '@/hooks/useUsage';
import ProductIcon from '@/icons/product';

export function QuickUsage() {

    const { t } = useTranslation();
    const router = useRouter();
    const product = router.asPath.split('/')[1] || '';

    const [current, setCurrent] = useState();
    const { subscription, percent, limits, isLoading, upgradeLink, colorScheme } = useUsage(current, true);

    const { isOpen, onToggle, onClose } = useDisclosure();

    useEffect(() => {
        if (!values(PRODUCTS).includes(product)) return;
        setCurrent(PRODUCT_NAME[product]);
        onClose();
    }, [product]);

    if (!subscription || !current) return null;

    return (
        <Box mt="auto" position='relative'>

            <Box textAlign="center" borderRadius="8px" marginInline={6} p={4} bg="gray.50" my={5}>
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
                <Flex alignItems="center">
                    <Flex alignItems="center" justifyContent="center" h="32px" w="32px" borderRadius="4px" bg="warning.500" color="white">
                        <ProductIcon product={current} size="24px" />
                    </Flex>
                    <Text color="gray.700" fontWeight={500} ml={3}>{subscription.name}</Text>
                </Flex>

                <Box mt={4}>
                    <Flex>
                        <Text12W400 lineHeight="18px" color="gray.400" flexGrow={1}>
                            {t('subscription.plan-percent', 'You\'re at {{n}}% of your plan', { n: percent })}
                        </Text12W400>
                        <InfoIcon size="16px" color="gray.400" cursor='pointer' onClick={onToggle} />
                    </Flex>
                </Box>

                <Progress mt="10px" value={percent} colorScheme={colorScheme} />

                <Box mt={4}>
                    <AppLink href={upgradeLink}>
                        <Text14W600 color="primary.700">
                            {t('subscription.upgrade', 'Upgrade')}
                        </Text14W600>
                    </AppLink>
                </Box>
            </Box>
        </Box>
    );
}


export default memo(QuickUsage);

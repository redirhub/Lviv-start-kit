import { AppLink } from '../AppLink';
import React from 'react';
import { Flex, GridItem, Grid, Button, Text, Image, Stack } from '@chakra-ui/react';

import { t } from 'i18next';
import RedirectsIcon from '@/icons/redirects';
import useAppResponsive from '@/hooks/useAppResponsive';
import UrlIcon from '@/icons/url';

const HomeCardContainer = () => {
    const { isMobile } = useAppResponsive();
    const imgH = { base: 120, md: 160, xl: 180 };
    return (
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', 'md': 'repeat(2, 1fr)' }} gap={8} mt={10}>
            <GridItem>
                {card('redirect', t('redirect.tip', 'Create and manage URL redirects'), t('redirect.new', 'New redirect'), '/redirects/new')}
            </GridItem>
            <GridItem>
                {card('link', t('link.tip', 'Shorten and beautify your URLs for easy tracking'), t('link.new', 'Shorten URL'), '/short-url/new')}
            </GridItem>
        </Grid>
    );

    function card(image, alt, btn, link) {
        const icon = image === 'redirect' ? <RedirectsIcon width={4} height={14} /> : <UrlIcon width={4} height={14} />;
        return <Flex position='relative' borderWidth={4} borderColor='white' boxShadow='md' borderRadius={10} height='100%'>
            <Image src={`/assets/images/home/${image}.png`} alt={alt} h={imgH} />

            <Stack position='absolute' height='100%' right={0} minW={40} sx={{ maxWidth: isMobile ? 230 : 220 }} direction='column' justifyContent='space-between' p={isMobile ? 4 : 6} px={4} width='100%' borderColor='white' borderStyle='dashed' backgroundColor='white'>
                <Text color='gray.700' fontWeight={600} fontSize={isMobile ? 16 : 18} lineHeight={isMobile ? 5 : 7}>
                    {alt}
                </Text>
                <AppLink href={link}>
                    <Button leftIcon={icon} colorScheme='blue' width={40} mt={2} height={isMobile ? '36px' : '40px'}>{btn}</Button>
                </AppLink>
            </Stack>
        </Flex>;
    }
};

export default HomeCardContainer;


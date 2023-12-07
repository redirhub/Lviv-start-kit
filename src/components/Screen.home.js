import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { t } from 'i18next';
import { Trans } from 'react-i18next';
import { PageTitle } from '@/components/PageTitle';
import HomeCardContainer from '@/components/home/CardContainer';
import HomePerformance from '@/components/home/Performance';
import HomePlanCardContainer from '@/components/home/PlanCardContainer';
import HomeBlogCardContainer from '@/components/home/BlogCardContainer';
import { LAYOUT_STD_WIDTH } from '@/config/constant';
import { useAppSelector } from '@/store';

export function ScreenHome() {
    const [hello, setHello] = useState('hello');
    const { name } = useAppSelector((state) => state.accounts.currentAccount);
    useEffect(() => {
        // say hello to the user according to the time of the day
        const now = new Date();
        const hour = now.getHours();
        const morning = t('account.hello-morning', 'Good morning, {{n}}', { n: name });
        const afternoon = t('account.hello-afternoon', 'Good afternoon, {{n}}', { n: name });
        const evening = t('account.hello-evening', 'Good evening, {{n}}', { n: name });
        if (hour >= 5 && hour < 12) {
            setHello(morning);
        } else if (hour >= 12 && hour < 18) {
            setHello(afternoon);
        } else {
            setHello(evening);
        }
    }, [name, setHello]);
    const blog = false;

    return (
        <Box width="100%" maxWidth={LAYOUT_STD_WIDTH} mx='auto'>
            <PageTitle title={hello} />
            <Text fontSize='16px' lineHeight='24px' fontWeight='500' mt='8px'>
                <Trans i18nKey='shared.what-we-do' t={t}>
                    Create, track and manage links on our powerful dashboard in real-time
                </Trans>
            </Text>
            <HomeCardContainer />
            <HomePerformance />
            <HomePlanCardContainer />
            {blog && (
                <HomeBlogCardContainer />
            )}
        </Box>
    );
}

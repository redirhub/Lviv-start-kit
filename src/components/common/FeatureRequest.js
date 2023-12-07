import { Flex, Stack } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text14W600 } from '@/components/elements/Text14';
import CodeIcon from '@/icons/code';
import { Text18W600 } from '@/components/elements/Text18';
import { Text14W400 } from '@/components/elements/Text14';
import { useRequestFeatureMutation } from '@/store/service/accounts';
import { AppLink } from '@/components/AppLink';

export default function FeatureRequest({
    id,
    ...props
}) {
    const [requestFeature, { isLoading, isSuccess }] = useRequestFeatureMutation();
    const handleRequestFeature = useCallback(() => {
        console.log('requestFeature', id);
        requestFeature(id);
    }, [requestFeature]);
    const { t } = useTranslation();

    return (
        <Flex borderRadius="lg" bg="gray.50" alignItems="center" h="392px" p={{ base: 2, md: 0 }}  {...props}>
            <Stack alignItems="center" spacing={6} textAlign="center" w="100%">
                <CodeIcon />
                <Stack spacing={1}>
                    <Text18W600 color="gray.900">
                        {t('shared.backlog', 'This feature is in our backlog')}
                    </Text18W600>
                    <Text14W400 color="gray.500" maxW='420px'>
                        {t('shared.backlog-description', 'This feature is in our backlog and it may take some time to become released. If you urgently need it, please, let us know and we will try to include it in our development process.')}
                    </Text14W400>
                </Stack>
                {isLoading && <Text14W600 color="primary.700">
                    {t('shared.backlog-requesting', 'Requesting')}
                </Text14W600>}
                {isSuccess && <Text14W600 color="primary.700">
                    {t('shared.backlog-requested', 'Thanks for your feedback!')}
                </Text14W600>}
                {!isLoading && !isSuccess &&
                    <AppLink onClick={handleRequestFeature}>
                        <Text14W600 color="primary.700">
                            {t('shared.backlog-request', 'Request this feature')}
                        </Text14W600>
                    </AppLink>
                }
            </Stack>
        </Flex>
    );
}

import { useEffect, useState } from 'react';
import { Box, Stack, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import InputWithButton from '@/components/common/InputWithButton';
import CopyIcon from '@/icons/copy';
import { Text20W700 } from '@/components/elements/Text20';
import { useAppSelector } from '@/store';

const Id = () => {
    const { id } = useAppSelector((state) => state.workspaces.currentWorkspace);
    const [workspace, setWorkspace] = useState({});
    const { t } = useTranslation();

    useEffect(() => {
        if (id) setWorkspace({ id });
    }, [id]);

    return (
        <Box mt={6} p={6} bg='white' borderRadius='lg'>
            <Text20W700 color="gray.700">
                {t('settings.ws-id', 'Workspace ID')}
            </Text20W700>
            <Flex mt={4}>
                <Stack spacing={1.5} w='100%'>
                    <InputWithButton
                        heading={t('settings.ws-id-your', 'Your Workspace ID')}
                        info={t('settings.ws-id-info', 'Used when interacting with the our API.')}
                        value={workspace?.id || ''}
                        showBtn={false}
                        rightIcon={<CopyIcon color='gray.400' />}
                        readOnly
                        icontype='button'
                        width='full'
                    />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Id;

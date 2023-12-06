import { useCallback, useEffect, useState } from 'react';

import { Box, Stack, Avatar, Flex, useToast } from '@chakra-ui/react';
import trim from 'lodash/trim';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { Text20W700 } from '@/components/elements/Text20';
import InputWithButton from '@/components/common/InputWithButton';
import useUpdateWorkspaceApi from '@/hooks/useUpdateWorkspaceApi';
import { useAppSelector } from '@/store';
import { MAX_FILE_SIZE } from '@/config/user';
import useUploadWorkspaceLogoApi from '@/hooks/useUploadWorkspaceLogoApi';
import { fileToFormData } from '@/utils';

const Name = () => {
    const toast = useToast();
    const { name, headurl } = useAppSelector((state) => state.workspaces.currentWorkspace);
    const [workspace, setWorkspace] = useState({});
    const [updateWorkspace, { isLoading }] = useUpdateWorkspaceApi();
    const [uploadAvatar] = useUploadWorkspaceLogoApi();
    const { t } = useTranslation();

    const handleName = useCallback((e) => {
        setWorkspace({ ...workspace, name: e.target.value });
    }, [workspace]);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (!file) { return false; }

        if (file) {
            const size = file.size / (1024 * 1024);
            if (size > MAX_FILE_SIZE) {
                toast({
                    title: `Max file size ${MAX_FILE_SIZE}mb`,
                    position: 'bottom-right',
                    status: 'error',
                });
                return false;
            }
        }
        uploadAvatar(fileToFormData('avatar', file));
        setWorkspace({ ...workspace, headurl: URL.createObjectURL(file) });
    }, [workspace]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/jpg': [],
            'image/gif': [],
            'image/svg': [],
        }
    });

    const handleUpdate = useCallback(() => {
        updateWorkspace({ field: 'name', value: trim(workspace?.name) });
    }, [workspace]);

    useEffect(() => {
        setWorkspace({ name, headurl });
    }, [name]);

    const styler = {
        root: {
            borderRadius: '100%',
            transitionDuration: '200ms',
            borderWidth: '1px',
            borderColor: isDragActive ? 'primary.500' : 'gray.300',
            bg: isDragActive ? 'primary.50' : 'white',
            cursor: 'pointer',
            ...getRootProps(),
        }
    };

    return (
        <>
            <Box mt={6} p={6} bg='white' borderRadius='lg'>
                <Text20W700 color="gray.700">
                    {t('settings.name-logo', 'Workspace name and logo')}
                </Text20W700>
                <Flex mt={4}>
                    <Flex w="100%" justifyContent='space-between' alignItems='center'>
                        <Stack spacing={1.5} w={{ base: '60%', md: '50%' }}>
                            <InputWithButton
                                heading={t('settings.name-enter', 'Enter your workspace name')}
                                info={t('settings.name-tip', 'Please use 32 characters at maximum.')}
                                value={workspace?.name || ''}
                                onChange={handleName}
                                maxLength={32}
                                inputWidth={{ base: '100%' }}
                                onClick={handleUpdate}
                                showBtn={name !== trim(workspace?.name)}
                                isLoading={isLoading}
                                btnLabel={t('shared.save', 'Save')}
                            />
                        </Stack>
                        {name &&
                            <Box ml={'auto'}>
                                <Box position="relative" height="100%" width="100%" >
                                    <Box {...styler.root}>
                                        <input {...getInputProps()} />
                                        <Avatar size='xl' name={workspace?.name} src={workspace?.headurl} />
                                    </Box>
                                </Box>
                            </Box>}
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default Name;

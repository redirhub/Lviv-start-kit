import { memo, useCallback, useEffect, useState, useRef } from 'react';

import {
    Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Portal, Spinner, Text, useDisclosure
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import WorkspaceSubMenu from '@/components/layout/WorkspaceSubMenu';
import useAppResponsive from '@/hooks/useAppResponsive';
import ArrowUpDown from '@/icons/arrow-up-down';
import PlusCircle from '@/icons/plus-circle';
import { useAppDispatch, useAppSelector } from '@/store';
import useUpdateCurrentWorkspaceApi from '@/hooks/useUpdateCurrentWorkspaceApi';
import { useGetWorkspacesQuery } from '@/store/service/workspaces';
import CreateWorkspaceDialog from '@/components/workspace/CreateWorkspaceDialog';
import { clearAllApiCache } from '@/store/thunks';
import { getWorkspaceId, setWorkspaceId } from '@/utils';

export const styler_menu_item = {
    display: 'flex',
    justifyContent: 'space-between',
    px: 3,
    py: 2,
    border: 0,
    borderRadius: '8px',
    width: '100%',
    boxShadow: 'none',
    _selected: { backgroundColor: 'gray.100' },
    _hover: { backgroundColor: 'gray.100' },
    _focus: { backgroundColor: 'gray.100' },
    _active: { backgroundColor: 'gray.100' },
};

export function WorkspaceMenu({ isSidebar } = props) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { isMobile } = useAppResponsive();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const user = useAppSelector(state => state.accounts.currentAccount);
    const currentWorkspaceId = getWorkspaceId();
    const { data: workspacesList } = useGetWorkspacesQuery();
    const [updateCurrentWorkspace, { isLoading: isSwitchingWorkspace }] = useUpdateCurrentWorkspaceApi();

    const [selectedWorkspace, setSelected] = useState(null);

    const select = useCallback((id) => {
        if (!workspacesList) return;
        const current = workspacesList?.find((workspace) => workspace.id === id);
        setSelected(current);
    }, [workspacesList, setSelected]);

    const handleWorkspaceSwitch = useCallback((workspace) => {
        setWorkspaceId(workspace.id);
        updateCurrentWorkspace({ value: workspace.id });
        // dispatch(setCurrentAccount({ ...user, current_workspace: workspace.id }));
    }, [user]);
    const prevWorkspaceIdRef = useRef();

    useEffect(() => {
        const prevWorkspaceId = prevWorkspaceIdRef.current;
        console.log('currentWorkspaceId', currentWorkspaceId, prevWorkspaceId);
        if (currentWorkspaceId && currentWorkspaceId !== prevWorkspaceId) {
            dispatch(clearAllApiCache());
            console.log('clearAllApiCache');
            prevWorkspaceIdRef.current = currentWorkspaceId;
        }
    }, [currentWorkspaceId]);

    useEffect(() => {
        if (currentWorkspaceId) {
            select(currentWorkspaceId);
        }
    }, [currentWorkspaceId, workspacesList]);

    return (
        <>
            <Flex mb={4} mx={4}>
                <Menu isLazy placement={isMobile ? 'bottom-start' : 'right-start'} transition="all 0.1s" autoSelect="false">
                    <MenuButton
                        as={Button}
                        size={isMobile && 'sm'}
                        width="100%"
                        height="100%"
                        border={isSidebar || isMobile ? '2px' : '0px'}
                        p={isSidebar ? 3 : '12px 9.5px'}
                        borderColor="primary.50"
                        borderRadius="8px"
                    >
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Flex alignItems='center'>
                                <Avatar name={selectedWorkspace?.name} src={selectedWorkspace?.headurl} size='sm' />
                                {(isSidebar || isMobile) && (
                                    <Text fontWeight='600' as='span' ml={2} lineHeight='20px' color='gray.700'>
                                        {selectedWorkspace?.name}
                                    </Text>
                                )}
                            </Flex>
                            {(isSidebar || isMobile) && (
                                isSwitchingWorkspace ? (
                                    <Spinner size="sm" />
                                ) : (
                                    <ArrowUpDown color="gray.700" />
                                )
                            )}
                        </Box>
                    </MenuButton>
                    <Portal>
                        <MenuList zIndex={999} p={1}>
                            {workspacesList?.map((workspace) => (
                                <MenuItem
                                    key={workspace.id}
                                    as='div'
                                    size={isMobile && 1 === 2 && 'sm'}
                                    p={0}
                                    borderRadius='8px'
                                    onClick={() => handleWorkspaceSwitch(workspace)}
                                >
                                    <WorkspaceSubMenu
                                        name={workspace.name}
                                        headurl={workspace.headurl}
                                        summaries={workspace.summary}
                                        isSelected={selectedWorkspace?.id === workspace.id}
                                    />
                                </MenuItem>
                            ))}
                            <MenuItem
                                key='create-new-workspace'
                                as='button'
                                height="48px"
                                {...styler_menu_item}
                                onClick={onOpen}
                            >
                                <Flex alignItems='center' color='primary.700' >
                                    <PlusCircle size='20px' />
                                    <Text fontWeight='500' as='span' ml={2} >
                                        {t('settings.create', 'Create new workspace')}
                                    </Text>
                                </Flex>
                            </MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
            </Flex>
            <CreateWorkspaceDialog
                isWorkspaceModalOpen={isOpen}
                onWorkspaceModalClose={onClose}
            />
        </>
    );
}

export default memo(WorkspaceMenu);


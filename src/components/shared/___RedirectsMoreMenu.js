import {
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useDisclosure, useToast
} from '@chakra-ui/react';
import Link from 'next/link';
import MoreIcon from '@/icons/more';
import Settings2Icon from '@/icons/Settings2';
import Settings3Icon from '@/icons/Settings3';
import SwitchIcon from '@/icons/Switch';
import TrashIcon from '@/icons/Trash';
import MonitorIcon from '@/icons/monitor';
import { useBulkDeleteRedirectMutation } from '@/store/service/redirects';
import { useBulkDeleteLinksMutation } from '@/store/service/links';
import { AppAlertDialog } from '@/components/shared/AlertDialog';


export function RedirectsMoreMenu({ optionPath, id, disable }) {
    
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [ bulkDelete, { isLoading } ] = useBulkDeleteRedirectMutation();
    const [ bulkDeleteLinks, { isLoading: isLoadingLinks } ] = useBulkDeleteLinksMutation();
    const toast = useToast();
    
    const loading = isLoading || isLoadingLinks;
    
    let path = 'redirects';
    const isRedirect = optionPath === 'redirects';
    
    
    if ( ! isRedirect ) {
        path = 'short-url';
    }
    
    
    async function onDelete() {
        if ( loading ) return;
        const fnc = optionPath === 'links' ? bulkDeleteLinks:  bulkDelete;
        const ftr = { filter: { id: [ id ]  } };
        fnc( ftr ).then( res => {
            if ( res.error?.status ) {
                toast( {
                    title: res.error?.data?.message,
                    position: 'bottom-right',
                    status: 'error',
                } );
            } else {
                toast( {
                    title: 'Record deleted successfully.',
                    position: 'bottom-right',
                    status: 'success',
                } );
            }
        } );
    }
    
    
    return (
        <Menu>
            <MenuButton as={ IconButton } icon={ <MoreIcon size="20px" /> } aria-label="More" />
            <MenuList color="gray.700" overflow="hidden" py={0}>
                {
                    ! disable?.view && (
                        <Link href={`/${path}/${id}`}>
                            <MenuItem h="40px">
                                <Flex w="full" alignItems="center">
                                    <MonitorIcon mr={4} size="16px" />
                                    <Text>View</Text>
                                </Flex>
                            </MenuItem>
                        </Link>
                    )
                }
                <MenuItem h="40px">
                    <Flex w="full" alignItems="center">
                        <Settings2Icon mr={4} size="16px" />
                        <Text>DNS Settings</Text>
                    </Flex>
                </MenuItem>
                <MenuItem h="40px">
                    <Flex w="full" alignItems="center">
                        <Settings3Icon mr={4} size="16px" />
                        <Text>Run on Tester</Text>
                    </Flex>
                </MenuItem>
                <MenuItem h="40px">
                    <Flex w="full" alignItems="center">
                        <SwitchIcon mr={4} size="16px" />
                        <Text>Disable</Text>
                    </Flex>
                </MenuItem>
                <MenuDivider my="0" />
                <MenuItem onClick={ onOpen } h="40px">
                    <Flex w="full" alignItems="center">
                        <TrashIcon mr={4} size="16px" />
                        <Text>Delete</Text>
                    </Flex>
                </MenuItem>
            </MenuList>
            
            <AppAlertDialog
                {...{
                    title: 'Are you sure?',
                    content: 'Your visitors can\'t access this url more once you deleted the record?\n',
                    onOpen,
                    isOpen,
                    onClose,
                    onConfirm: onDelete,
                    confirmText: loading ? 'Deleting...' : 'Yes',
                }}
            />
        </Menu>
    );
}

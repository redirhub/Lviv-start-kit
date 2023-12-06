import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { noop } from '@/utils';

export function AppAlertDialog({ isOpen, onOpen, onClose, title, content, onConfirm = noop, confirmText }) {

    const { t } = useTranslation();
    const cancelRef = useRef();
    return (
        <AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>{ title }</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    { content }
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button minW="80px" ref={cancelRef} onClick={onClose}>
                        {t('shared.close', 'Close')}
                    </Button>
                    <Button minW="80px" onClick={ onConfirm } colorScheme='red' ml={3}>
                        { confirmText }
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

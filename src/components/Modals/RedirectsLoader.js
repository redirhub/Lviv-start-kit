import {
    Modal,
    ModalContent,
    ModalOverlay
} from '@chakra-ui/react';
import { noop } from '@/utils';

export function RedirectsLoader({ children, disclosure }) {
    const { isOpen } = disclosure;
    return (
        <Modal isCentered isOpen={ isOpen } onClose={ noop }>
            <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)'/>
            <ModalContent width="400px" maxWidth="90%">
                { children }
            </ModalContent>
        </Modal>
    );
}

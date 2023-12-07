import { useRef, useEffect } from 'react';
import { Modal, ModalContent, ModalOverlay }  from '@chakra-ui/react';

const ModalLayout = ({
    children,
    handleClose,
    isOpen,
    onClose,
    onModalClick,
    maxW,
}) => {
    const modalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClose, modalRef]);

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(8px)'/>
            <ModalContent p={6} ref={modalRef} onClick={onModalClick} maxW={maxW}>
                {children}
            </ModalContent>
        </Modal>
    );
};

export default ModalLayout;

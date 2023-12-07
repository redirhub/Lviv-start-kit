import React, { useCallback, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import ConfirmPasswordDialog from '@/components/user/security/ConfirmPasswordDialog';
import useConfirmPasswordApi from '@/hooks/useConfirmPasswordApi';
import { useAppSelector } from '@/store';

const withPasswordConfirm = (WrappedComponent, onConfirmed) => (
    function WithPasswordConfirm(props) {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const [confirmPassword] = useConfirmPasswordApi();
        const isPasswordConfirmed = useAppSelector(state => state.accounts.isPasswordConfirmed);

        useEffect(() => {
            if (isPasswordConfirmed && onConfirmed) {
                onConfirmed();
            }
        }, [isPasswordConfirmed, onConfirmed]);

        const handlePasswordConfirm = useCallback((password) => {
            confirmPassword({ password });
        }, []);

        return (
            <>
                <WrappedComponent {...props} onOpen={onOpen} />
                <ConfirmPasswordDialog
                    isOpen={isOpen}
                    onClose={onClose}
                    handleConfirm={handlePasswordConfirm}
                    isSuccessful={isPasswordConfirmed}
                />
            </>
        );
    }
);

export default withPasswordConfirm;

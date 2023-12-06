import React, { useCallback, useEffect, useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import ConfirmPasswordDialog from '@/components/user/security/ConfirmPasswordDialog';
import useConfirmPasswordApi from '@/hooks/useConfirmPasswordApi';
import { useGetConfirmedPasswordQuery } from '@/store/service/accounts';

const PasswordConfirm = ({
    onConfirmed,
    children,
    disabled = false,
    ...props
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [confirmPassword, { isLoading, isSuccess }] = useConfirmPasswordApi();
    const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
    const { data: confirmed, isLoading: confirmedLoading } = useGetConfirmedPasswordQuery();

    const startConfirmingPassword = useCallback(() => {
        if (disabled) {
            return;
        }
        if (isPasswordConfirmed && onConfirmed) {
            onConfirmed();
        } else {
            onOpen();
        }
    }, [isPasswordConfirmed, onConfirmed, disabled]);

    useEffect(() => {
        if (isSuccess || confirmed) {
            setIsPasswordConfirmed(true);
        }
    }, [confirmed]);

    const handlePasswordConfirm = useCallback((password) => {
        confirmPassword({ password }).then(({ data }) => {
            if (data?.confirmed) {
                setIsPasswordConfirmed(true);
                if (onConfirmed) {
                    onConfirmed();
                }
            }
        });
    }, [onConfirmed]);

    return (
        <>
            <Flex
                {...props}
                onClick={startConfirmingPassword}
            >
                {children}
            </Flex>
            <ConfirmPasswordDialog
                isOpen={isOpen}
                isLoading={isLoading}
                onClose={onClose}
                handleConfirm={handlePasswordConfirm}
                isSuccessful={isSuccess}
            />
        </>
    );
};

export default PasswordConfirm;

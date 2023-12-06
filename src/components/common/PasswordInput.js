import React, { useState } from 'react';

import {
    InputGroup,
    InputRightElement,
    Input,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ViewIcon from '@/icons/view';
import ViewOffIcon from '@/icons/view-off';
import { noop } from '@/utils';

export default function PasswordInput({
    placeholder,
    name = 'password',
    password,
    onChange = noop,
    ...props
}) {
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const { t } = useTranslation();

    return (
        <InputGroup size="md">
            <Input
                pr="40px"
                placeholder={placeholder || t('account.password', 'Password')}
                name={name}
                type={showConfirmPass ? 'text' : 'password'}
                value={password}
                onChange={onChange}
            />
            <InputRightElement width="40px">
                {showConfirmPass ? (
                    <ViewOffIcon
                        size="20px"
                        color="#2b6cb0"
                        cursor={'pointer'}
                        onClick={() => setShowConfirmPass(false)}
                    />
                ) : (
                    <ViewIcon
                        size="20px"
                        color="#2b6cb0"
                        cursor={'pointer'}
                        onClick={() => setShowConfirmPass(true)}
                    />
                )}
            </InputRightElement>
        </InputGroup>
    );
}

import { Connections } from './User.connections';
import { Logo } from '../layout/Logo';
import PasswordInput from '../common/PasswordInput';
import { useState, useCallback } from 'react';
import {
    Flex,
    Text,
    Heading,
    Box,
    Input,
    Button,
    Link,
    Checkbox,
} from '@chakra-ui/react';
import { Trans, useTranslation } from 'react-i18next';
import useAppResponsive from '@/hooks/useAppResponsive';
import useRegisterApi from '@/hooks/useRegisterApi';
import { LanguageMenu } from '@/components/layout/LanguageMenu';
import { AuthFieldStyle } from '@/common-styles';
import { AppLink } from '@/components/AppLink';

export function Register() {
    const { t } = useTranslation();
    const [register, { isLoading }] = useRegisterApi();
    const { isMobile, isDesktop } = useAppResponsive();

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        password_confirmation: '',
        real_name: '',
        language: 'en',
        terms: false,
        newsletter: false,
    });

    const onChange = (e) => {
        const { name, value } = e.currentTarget;
        setUserData({ ...userData, ...{ [name]: value } });
        checkValid();
    };

    const handleRegister = useCallback(() => {
        register(userData);
    }, [userData, register]);
    const [isValid, setIsValid] = useState(false);

    const checkValid = useCallback(() => {
        if (
            userData.email &&
            userData.password &&
            userData.password_confirmation &&
            userData.real_name
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [userData]);


    return (
        <Box height="100vh" background="white" p="30px">
            <Flex
                background="white"
                justifyContent="flex-end"
                alignItems="center"
                px={isDesktop ? '100px' : '10px'}
            >
                <LanguageMenu />
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="center"
                height="calc(100% - 110px)"
            >
                <Box minW="320px" width={'33%'}>
                    <Flex justifyContent="center">
                        <Logo />
                    </Flex>
                    <Box textAlign="center" my={isMobile ? 2 : 5}>
                        <Heading>
                            {t('account.create-account', 'Create an account')}
                        </Heading>
                    </Box>
                    <Connections />
                    <Box {...AuthFieldStyle}>
                        <Flex size="sm2" gap={1}>
                            {t('settings.members-name', 'Name')} <Text color="red">*</Text>
                        </Flex>
                        <Input
                            name="real_name"
                            size="md"
                            width="100%"
                            mt={1}
                            value={userData.name}
                            onChange={onChange}
                        />
                    </Box>
                    <Box {...AuthFieldStyle}>
                        <Flex size="sm2" gap={1}>
                            {t('settings.members-email', 'Email')}
                            <Text color="red">*</Text>
                        </Flex>
                        <Input
                            name="email"
                            size="md"
                            width="100%"
                            mt={1}
                            value={userData.email}
                            onChange={onChange}
                        />
                    </Box>
                    <Box {...AuthFieldStyle}>
                        <Flex size="sm2" gap={1}>
                            {t('account.password', 'Password')}
                            <Text color="red">*</Text>
                        </Flex>
                        <PasswordInput name='password' password={userData.password} onChange={onChange} />
                    </Box>
                    <Box {...AuthFieldStyle}>
                        <Flex size="sm2" gap={1}>
                            {t('settings.confirm-password', 'Confirm password')}
                            <Text color="red">*</Text>
                        </Flex>
                        <PasswordInput name='password_confirmation' password={userData.password_confirmation} onChange={onChange}
                            placeholder={t('account.password-confirm', 'Password comfirmation')} />
                    </Box>
                    <Box>
                        <Checkbox
                            isChecked={userData.terms}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    ...{ terms: e.target.checked },
                                })
                            }
                        >
                            <Text textAlign="center" {...AuthFieldStyle}>
                                <Trans i18nKey="account.terms" t={t}>
                                    I agree to the &nbsp;
                                    <Link color="#2b6cb0" target='_blank' href='#' >Terms</Link>
                                    &nbsp;and&nbsp;
                                    <Link color="#2b6cb0" target='_blank' href='#' >Privacy Policy</Link>
                                </Trans>
                            </Text>
                        </Checkbox>
                        <Checkbox
                            isChecked={userData.newsletter}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    ...{ newsletter: e.target.checked },
                                })
                            }
                        >
                            <Text textAlign="left" {...AuthFieldStyle}>
                                <Trans i18nKey="account.newsletter" t={t}>
                                    I want to receive periodic product updates, offers, and
                                    promotions
                                </Trans>
                            </Text>
                        </Checkbox>
                    </Box>
                    <Box {...AuthFieldStyle}>
                        <Button colorScheme="blue" width="100%"
                            onClick={handleRegister}
                            isDisabled={!isValid}
                            isLoading={isLoading}
                        >
                            {t('account.create-account', 'Create an account')}
                        </Button>
                    </Box>
                    <Flex mt={isMobile ? 3 : 5} justifyContent="center" gap={2}>
                        <Text>
                            {t('account.had-account', 'Already have an account?')}
                        </Text>
                        <AppLink href="login" color="#2b6cb0">
                            {t('account.login', 'Log in')}
                        </AppLink>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

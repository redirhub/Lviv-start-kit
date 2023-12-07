import { Connections } from './User.connections';
import { Logo } from '../layout/Logo';
import PasswordInput from '../common/PasswordInput';
import { useState, useCallback, useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import useAppResponsive from '@/hooks/useAppResponsive';
import { LanguageMenu } from '@/components/layout/LanguageMenu';
import useLoginApi from '@/hooks/useLoginApi';
import useTwoFactorApi from '@/hooks/useTwoFactorApi';
import { AuthFieldStyle, MobileAuthFieldStyle } from '@/common-styles';
import { AppLink } from '@/components/AppLink';

export function Login() {
    const { t } = useTranslation();
    const router = useRouter();
    const { isMobile, isDesktop } = useAppResponsive();
    const [isTwoFactor, setIsTwoFactor] = useState(false);

    useEffect(() => {
        console.log(router?.query);
        if (router?.query?.two_factor) {
            setIsTwoFactor(true);
        }
    }, [router?.query]);

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
            {isTwoFactor ? <TwoFactorComponent /> : <LoginComponent />}
            <Text textAlign="center" mt={isMobile ? 1 : 3}>
        This site is protected by reCAPTCHA and the Google{' '}
                <Link href="https://policies.google.com/privacy" color="#2b6cb0">
          Privacy Policy
                </Link>{' '}
        and{' '}
                <Link href="https://policies.google.com/terms" color="#2b6cb0">
          Terms of Service
                </Link>{' '}
        apply.
            </Text>
        </Box>
    );
}

const LoginComponent = (props) => {
    const { t } = useTranslation();
    const { isMobile, isDesktop } = useAppResponsive();
    const [login, { isSuccess, isLoading }] = useLoginApi();

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        remember: true,
    });

    const onChange = (e) => {
        const { name, value } = e.currentTarget;
        setUserData((pre) => ({ ...pre, [name]: value }));
        checkValid();
    };

    const handleLogin = useCallback(() => {
        login(userData);
    }, [userData, login]);

    const [isValid, setIsValid] = useState(false);
    const checkValid = useCallback(() => {
        if (userData.email && userData.password) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [userData]);

    useEffect(() => {
        checkValid();
    }, [checkValid, userData]);

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="calc(100% - 110px)"
        >
            <Box minW="320px" width={'33%'}>
                <Flex justifyContent="center">
                    <Logo />
                </Flex>
                <Box textAlign="center" mt={isMobile ? 1 : 5} mb={isMobile ? 2 : 10}>
                    <Heading>
                        {t('account.login-account', 'Log in to your account')}
                    </Heading>
                </Box>
                <Connections />
                <Box {...(isMobile ? MobileAuthFieldStyle : AuthFieldStyle)}>
                    <Input
                        name="email"
                        placeholder={t('account.email-enter', 'Enter your email')}
                        size="md"
                        width="100%"
                        value={userData.email}
                        onChange={onChange}
                    />
                </Box>
                <Box mt={0}>
                    <PasswordInput
                        name="password"
                        value={userData.password}
                        placeholder={t('account.password-enter', 'Enter your password')}
                        onChange={onChange}
                    />
                </Box>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    {...(isMobile ? MobileAuthFieldStyle : AuthFieldStyle)}
                >
                    <Checkbox
                        isChecked={userData.remember}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                ...{ remember: e.target.checked },
                            })
                        }
                    >
                        {t('account.remember-me', 'Remember me')}
                    </Checkbox>
                    <AppLink href="forgot-password" color="#2b6cb0">
                        {t('account.forgot-password', 'Forgot password?')}
                    </AppLink>
                </Flex>
                <Box mt={isMobile ? 1 : 5}>
                    <Button
                        colorScheme="blue"
                        width="100%"
                        isDisabled={!isValid}
                        isLoading={isLoading}
                        onClick={handleLogin}
                    >
                        {t('account.sign-in', 'Sign in')}
                    </Button>
                </Box>
                <Flex justifyContent="center" gap={2} mt={isMobile ? 2 : 10}>
                    <Text>{t('account.have-account', 'Don\'t have an account?')}</Text>
                    <AppLink href="register" color="#2b6cb0">
                        {t('account.sign-up', 'Sign up')}
                    </AppLink>
                </Flex>
                {1 === 2 && (
                    <Box
                        {...(isMobile ? MobileAuthFieldStyle : AuthFieldStyle)}
                        textAlign="center"
                    >
                        {t('account.continue-sso', 'Continue using Single Sign-on (SSO)')}
                    </Box>
                )}
            </Box>
        </Flex>
    );
};

const TwoFactorComponent = () => {
    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();
    const [twoFactorChallenge, { isLoading }] = useTwoFactorApi();

    const recoveryCodeText = {
        content: t(
            'account.recovery-code-content',
            'Please confirm access to your account by entering the authentication code provided by your authenticator application.'
        ),
        button: t('account.recovery-code-button', 'USE RECOVERY CODE'),
        placeholder: t('account.recovery-code-placeholder', 'Authentication Code'),
    };
    const authenticationCodeText = {
        content: t(
            'account.authentication-code-content',
            'Please confirm access to your account by entering one of your emergency recovery codes.'
        ),
        button: t('account.authentication-code-button', 'USE AUTHENTICATION CODE'),
        placeholder: t('account.authentication-code-placeholder', 'Recovery Code'),
    };

    const [isRecoveryCode, setIsRecoveryCode] = useState(false);
    const [code, setCode] = useState('');
    const [isValid, setIsValid] = useState(false);

    const onChange = (e) => {
        const { value } = e.currentTarget;
        setCode(value);
        checkValid();
    };

    const handleTwoFactor = useCallback(() => {
        const data = {
            code: isRecoveryCode ? '' : code,
            recovery_code: isRecoveryCode ? code : '',
        };
        twoFactorChallenge(data);
    }, [code, twoFactorChallenge]);

    const checkValid = useCallback(() => {
        if (code) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [code]);

    const setCodeType = ()=>{
        setIsRecoveryCode(!isRecoveryCode);
    };

    useEffect(() => {
        checkValid();
    }, [checkValid, code]);

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="calc(100% - 110px)"
        >
            <Box minW="320px" width={'33%'}>
                <Flex justifyContent="center">
                    <Logo />
                </Flex>
                <Box textAlign="center" mt={isMobile ? 1 : 5} mb={isMobile ? 2 : 10}>
                    <Heading>{t('account.2fa-login', '2FA is Enabled')}</Heading>
                    <Text textAlign="center" mt={isMobile ? 1 : 3}>
                        {isRecoveryCode
                            ? authenticationCodeText.content
                            : recoveryCodeText.content}
                    </Text>
                </Box>
                <Box {...(isMobile ? MobileAuthFieldStyle : AuthFieldStyle)}>
                    <Input
                        placeholder={
                            isRecoveryCode
                                ? authenticationCodeText.placeholder
                                : recoveryCodeText.placeholder
                        }
                        size="md"
                        width="100%"
                        value={code}
                        onChange={onChange}
                    />
                </Box>

                <Flex
                    justifyContent="flex-end"
                    alignItems="center"
                    {...(isMobile ? MobileAuthFieldStyle : AuthFieldStyle)}
                >
                    <Box cursor="pointer" onClick={setCodeType}>
                        {isRecoveryCode
                            ? authenticationCodeText.button
                            : recoveryCodeText.button}
                    </Box>
                </Flex>
                <Box mt={isMobile ? 1 : 5}>
                    <Button
                        colorScheme="blue"
                        width="100%"
                        textTransform="uppercase"
                        isDisabled={!isValid}
                        isLoading={isLoading}
                        onClick={handleTwoFactor}
                    >
                        {t('account.login', 'Log in')}
                    </Button>
                </Box>
                <Flex mt={isMobile ? 3 : 5} justifyContent="center" gap={2}>
                    <AppLink href="login" color="#2b6cb0">
                        {t('shared.goback', 'Go back')}
                    </AppLink>
                </Flex>
            </Box>
        </Flex>
    );
};

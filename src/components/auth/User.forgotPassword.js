import { Logo } from '../layout/Logo';
import PasswordInput from '../common/PasswordInput';
import { useCallback, useEffect, useState } from 'react';
import {
    Flex,
    Heading,
    Box,
    Input,
    Button,
    Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import useAppResponsive from '@/hooks/useAppResponsive';
import { LanguageMenu } from '@/components/layout/LanguageMenu';
import { ContentSpinner } from '@/components/ContentSpinner';
import useResetEmailApi from '@/hooks/useResetEmailApi';
import useResetPasswordApi from '@/hooks/useResetPasswordApi';
import { AuthFieldStyle } from '@/common-styles';
import { AppLink } from '@/components/AppLink';

const ResetEmail = ({ handleResetEmail } = props) => {
    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();

    const [userData, setUserData] = useState({
        email: '',
    });

    const changeUser = (e) => {
        const { name, value } = e.currentTarget;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <Box>
            <Flex justifyContent="center">
                <Logo />
            </Flex>
            <Box textAlign="center" mt={5} mb={10}>
                <Heading>{t('account.forgot-password', 'Forgot password?')}</Heading>
            </Box>
            <Box {...AuthFieldStyle}>
                <Input
                    name="email"
                    placeholder="your-email@example.com"
                    size="md"
                    width="100%"
                    value={userData.email}
                    onChange={changeUser}
                />
            </Box>
            <Box {...AuthFieldStyle}>
                <Button
                    colorScheme="blue"
                    width="100%"
                    onClick={() => {
                        handleResetEmail(userData);
                    }}
                >
                    {t('account.request-reset', 'Send reset link')}
                </Button>
            </Box>
            <Flex mt={isMobile ? 3 : 10} justifyContent="center" gap={2}>
                <Text>{t('account.had-account', 'Already have an account?')}</Text>
                <AppLink href="login" color="#2b6cb0">
                    {t('account.login', 'Log in')}
                </AppLink>
            </Flex>
        </Box>
    );
};

const ResetPassword = ({
    handleResetPassword,
    token,
    ...props }) => {
    const { t } = useTranslation();
    const { isMobile } = useAppResponsive();

    const [resetData, setResetData] = useState({
        email: '',
        password: '',
        password_confirmation: '',
        token,
    });

    const changeResetData = (e) => {
        const { name, value } = e.currentTarget;
        setResetData({ ...resetData, ...{ [name]: value } });
    };

    return (
        <Box>
            <Flex justifyContent="center">
                <Logo />
            </Flex>
            <Box textAlign="center" mt={5} mb={10}>
                <Heading>{t('account.set-new-password', 'Set a new password')}</Heading>
            </Box>
            <Box {...AuthFieldStyle}>
                <Input
                    name="email"
                    placeholder={t('account.email', 'Your email')}
                    size="md"
                    width="100%"
                    value={resetData.email}
                    onChange={changeResetData}
                />
            </Box>
            <Box {...AuthFieldStyle}>
                <PasswordInput name="password" value={resetData.password} onChange={changeResetData} />
            </Box>
            <Box {...AuthFieldStyle}>
                <PasswordInput name="password_confirmation" value={resetData.password_confirmation} onChange={changeResetData}
                    placeholder={t('account.password-confirm', 'Password comfirmation')} />
            </Box>
            <Box {...AuthFieldStyle}>
                <Button
                    colorScheme="blue"
                    width="100%"
                    disabled
                    onClick={() => {
                        handleResetPassword(resetData);
                    }}
                >
                    {t('account.reset-password', 'Reset password')}
                </Button>
            </Box>
            <Flex mt={isMobile ? 3 : 5} justifyContent="flex-end" gap={2}>
                <AppLink href="login" color="#2b6cb0">
                    {t('account.login', 'Log in')}
                </AppLink>
            </Flex>
        </Box>
    );
};

export function ForgotPassword() {
    const { isDesktop } = useAppResponsive();
    const { t } = useTranslation();
    const router = useRouter();
    const [token, setToken] = useState(null);

    const [resetEmail, { isSuccess: emailSent, isLoading: emailChanging }] = useResetEmailApi();
    const [
        resetPassword,
        { isSuccess: passwordChanged, isLoading: passwordChanging },
    ] = useResetPasswordApi();

    const loading = emailChanging || passwordChanging;

    const handleResetEmail = useCallback(
        (data) => {
            resetEmail(data);
        },
        [resetEmail]
    );

    const handleResetPassword = useCallback(
        (data) => {
            resetPassword(data);
        },
        [resetPassword]
    );

    useEffect(() => {
        if (router?.query?.token) {
            setToken(router.query.token);
        }
    }, [router?.query?.token]);

    return loading ? (
        <ContentSpinner />
    ) : (
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
                {token ? (
                    <ResetPassword handleResetPassword={handleResetPassword} token={token} />
                ) : (
                    <ResetEmail handleResetEmail={handleResetEmail} />
                )}
            </Flex>
        </Box>
    );
}

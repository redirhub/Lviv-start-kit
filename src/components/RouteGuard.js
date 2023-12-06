import { useRouter } from 'next/router';
import { Box, Spinner } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useGetCurrentAccountQuery } from '@/store/service/accounts';

function Loader() {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" h="100vh" w="100vw">
            <Spinner color="primary.500" />
        </Box>
    );
}

export function RouteGuard({
    guest = false,
    children
}) {

    const router = useRouter();
    const { isSuccess: accountLoaded, isLoading } = useGetCurrentAccountQuery();
    const { ready: tranlationReady } = useTranslation();

    if (!router.isReady || !tranlationReady) {
        return <Loader />;
    }

    if (guest && accountLoaded & !isLoading) {
        router.push('/');
    }

    if (!guest && !accountLoaded && !isLoading) {
        router.push('/login');
    }

    return children;
}

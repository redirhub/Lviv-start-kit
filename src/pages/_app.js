import '@/styles/main.scss';
import theme from '../config/theme';
import store from '../store';
import i18n from '../config/i18n';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import Head from 'next/head';
import 'react-datepicker/dist/react-datepicker.css';
import { RouteGuard } from '@/components/RouteGuard';

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page) => page);
    const guest = Component.guard === 'guest';

    return (
        <>
            <style jsx global>
                {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
            </style>
            <Provider store={store}>
                <ChakraProvider theme={theme}>
                    <I18nextProvider i18n={i18n}>
                        <Head>
                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1"
                            />
                        </Head>
                        <RouteGuard guest={guest}>{getLayout(<Component {...pageProps} />)}</RouteGuard>
                    </I18nextProvider>
                </ChakraProvider>
            </Provider>
        </>
    );
}

// disable ssr...
export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
});

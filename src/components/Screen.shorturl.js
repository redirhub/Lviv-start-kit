import { Box, Button,  ButtonGroup, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { uniqBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import { NotFound } from '@/components/NotFound';
import { PageTitle } from '@/components/PageTitle';
import { ListFilterBar } from '@/components/shared/ListFilterBar';
import { ShortUrlList } from '@/components/short-url/List';
import { NewUrlModal } from '@/components/short-url/NewUrlModal';
import { UrlPopoverProvider } from '@/config/context/url-popover';
import { ShortUrlActions } from '@/components/short-url/Actions';
import { DomainsMenu } from '@/components/short-url/DomainsMenu';
import { ViewUrlModal } from '@/components/short-url/ViewUrlModal';
import useLinksApi from '@/hooks/useLinksApi';
import { ContentSpinner } from '@/components/ContentSpinner';
import { useAppDispatch, useAppSelector } from '@/store';
import { updateFilters, updateIds } from '@/store/slices/options';
import { paginationReset } from '@/store/slices/links';
import { CustomDomainModal } from '@/components/short-url/CustomDomainModal';
import { useGetListClicksMutation } from '@/store/service/redirects';
import { updateListClicks } from '@/store/slices/redirects';

export function EmptyScreenUrl({ discolusre }) {

    const { t } = useTranslation();
    const router = useRouter();
    const filters = useAppSelector( state => state.options.filters.links );
    const dispatch = useAppDispatch();

    function clearFilters() {
        dispatch( updateFilters( {
            path: 'links',
            object: {
                tags: [],
                start_date: '',
                end_date: '',
                destination: ''
            }
        } ) );

        const q = JSON.parse(JSON.stringify( router.query ));
        delete q.host;
        router.push({
            path: router.pathname,
            query: q
        });
    }

    const hasFilters = useMemo( () => {
        return !! (filters.start_date || filters.end_date || filters.tags?.length || router.query.host || filters.destination);
    }, [ filters ]);

    if ( hasFilters ) {
        return (
            <NotFound title={t('link.filter-empty', 'No short links with selected filters')}>
                <ButtonGroup spacing={6}>
                    <Button onClick={clearFilters} size="lg">
                        {t('shared.filter-clear', 'Clear filters')}
                    </Button>
                    <Button onClick={discolusre.onOpen} size="lg" minW="195px" colorScheme="primary">
                        {t('link.new', 'Shorten now')}
                    </Button>
                </ButtonGroup>
            </NotFound>
        );
    }

    return (
        <NotFound title={t('link.empty', 'No short links yet!')}>
            <ButtonGroup spacing={6}>
                <Link href="/short-url/connect">
                    <Button size="lg" minW="195px" variant="outline" colorScheme="primary">
                        {t('link.add-domain', 'Add custom domain')}
                    </Button>
                </Link>
                <Button onClick={discolusre.onOpen} size="lg" minW="195px" colorScheme="primary">
                    {t('link.new', 'Shorten now')}
                </Button>
            </ButtonGroup>
        </NotFound>
    );
}


export function ScreenShortUrl() {

    const dispatch = useAppDispatch();
    const { data: links, isLoading, isFetching } = useLinksApi();
    const data = links?.data || [];
    const meta = links?.meta;
    const loading = isFetching || isLoading;
    const { ...newUrl } = useDisclosure();
    const disclosures = { newUrl };
    const { t } = useTranslation();

    const cachedItems = useAppSelector( state => {
        return state.links.options.cached || {};
    } );

    const dataCache = useMemo( () => {
        return uniqBy( Object.entries( cachedItems ).flatMap( item => {
            return item?.[1]?.data?.map(i => Object.assign({}, i, { cursor: item?.[0] || '' })) || [];
        } ), 'id' );
    }, [cachedItems, links]);

    const firstId = dataCache?.[0]?.id || '';

    const [getListClicks] = useGetListClicksMutation();

    const items = dataCache;
    const ids = useMemo( () => dataCache?.map( k => k.id ), [ dataCache ]);

    const handleGetLinkClicks = () => {
        getListClicks({ files: items?.map((item) => item?.file) }).then((result) => dispatch(updateListClicks(result?.data)));
    };

    useEffect(() => {
        if (items?.length > 0) {
            handleGetLinkClicks();
        }
    }, [items]);

    useEffect(() => {
        dispatch( updateIds( { path: 'links', ids } ) );
    }, [ ids ]);

    useEffect(() => {
        return () => {
            dispatch( updateIds( { path: 'links', ids: [] } ) );
            dispatch( paginationReset() );
        };
    }, []);


    if ( ! dataCache?.length ) {

        if ( loading ) {
            return <ContentSpinner />;
        }

        return (
            <>
                <UrlPopoverProvider value={ disclosures }>
                    <NewUrlModal discolusre={ newUrl } />
                    <EmptyScreenUrl discolusre={newUrl} />
                    <CustomDomainModal />
                </UrlPopoverProvider>
            </>
        );
    }

    return (
        <Box width="100%">
            <UrlPopoverProvider value={ disclosures }>
                <PageTitle title={t('shared.short-url', 'URL shortener')}>
                    <ShortUrlActions disclosure={ newUrl } />
                </PageTitle>

                <ListFilterBar path={ `/short-url/c?view=${ firstId }` }>
                    <DomainsMenu />
                </ListFilterBar>

                <ShortUrlList dataCache={ dataCache } loading={ loading } meta={ meta } />
                <NewUrlModal discolusre={ newUrl } />
                <ViewUrlModal items={data} />
                <CustomDomainModal />
            </UrlPopoverProvider>
        </Box>
    );
}

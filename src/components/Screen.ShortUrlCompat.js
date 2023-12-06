import PreviewSkeleton from './shared/PreviewSkeleton';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { uniqBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import useLinksApi from '@/hooks/useLinksApi';
import { ContentSpinner } from '@/components/ContentSpinner';
import { CustomDomainModal } from '@/components/short-url/CustomDomainModal';
import { NewUrlModal } from '@/components/short-url/NewUrlModal';
import { UrlPopoverProvider } from '@/config/context/url-popover';
import { PageTitle } from '@/components/PageTitle';
import { ShortUrlActions } from '@/components/short-url/Actions';
import { ListFilterBar } from '@/components/shared/ListFilterBar';
import { DomainsMenu } from '@/components/short-url/DomainsMenu';
import { updateIds } from '@/store/slices/options';
import { noop } from '@/utils';
import { useAppDispatch, useAppSelector } from '@/store';
import { ListSelectActions } from '@/components/shared/ListSelectActions';
import { ShortUrlListItemSm } from '@/components/short-url/ListItemSm';
import { prepareUrlData } from '@/components/short-url/List';
import { ShortUrlPreview } from '@/components/short-url/Preview';
import { useGetLinkByIdQuery } from '@/store/service/links';
import useAppResponsive from '@/hooks/useAppResponsive';
import { goNext, paginationReset } from '@/store/slices/links';
import { PaginationLoader } from '@/components/PaginationLoader';
import { EmptyScreenUrl } from '@/components/Screen.shorturl';
import { scrollStyles, BoxShadow } from '@/common-styles';
import useLinksCountApi from '@/hooks/useLinksCountApi';

export function ScreenShortUrlCompat() {

    const router = useRouter();
    const { data: links, isLoading, isFetching } = useLinksApi();
    const meta = links?.meta || {};
    const { ...newUrl } = useDisclosure();
    const disclosures = { newUrl };
    const loading = isFetching || isLoading;
    const dispatch = useAppDispatch();
    const pageSlug = router.query.view;
    const settings = useAppSelector( state => state.options.links );
    const { isDesktop } = useAppResponsive();
    const paginationNext = useAppSelector( state => state.links.options.pagination?.next || null );
    const cachedItems = useAppSelector( state => state.links.options.cached || {} );
    const  { data } = useLinksCountApi();
    const { t } = useTranslation();

    const checkAll = settings.checked_all;
    const checked = settings.checked;
    const isChecked = checked?.length || checkAll;


    const dataCache = useMemo( () => {
        return uniqBy( Object.entries( cachedItems ).flatMap( item => {
            return item?.[1]?.data?.map(i => Object.assign({}, i, { cursor: item?.[0] || '' })) || [];
        } ), 'id' );
    }, [cachedItems, links]);


    const ids = useMemo( () => dataCache?.map( k => k.id ), [ dataCache ]);

    const { isLoading: isSingleLoading, isFetching: isSingleFetching, data: link, isError } = useGetLinkByIdQuery(
        pageSlug,
        {
            skip: ! pageSlug
        }
    );

    const singleLoading =  isSingleLoading || isSingleFetching || isError || ! link;

    useEffect(() => {
        dispatch( updateIds( { path: 'links', ids } ) );
    }, [ ids ]);

    useEffect(() => {
        return () => {
            dispatch( updateIds( { path: 'links', ids: [] } ) );
            dispatch( paginationReset() );
        };
    }, []);

    useEffect( () => {
        if ( ! pageSlug && ! loading && links?.data?.length ) {
            router.replace('/short-url/c?view=' + links?.data[0].id ).then( noop );
        }
    }, [loading, pageSlug, links?.data, router, router.isReady] );


    if ( isError && ! link ) {
        router.push('/404').then( noop );
        return null;
    }

    if ( ! dataCache?.length ) {

        if ( loading ) {
            return <ContentSpinner />;
        }

        return (
            <UrlPopoverProvider value={ disclosures }>
                <EmptyScreenUrl discolusre={ newUrl } />
                <NewUrlModal discolusre={ newUrl } />
            </UrlPopoverProvider>
        );
    }

    function onIntersect() {
        dispatch( goNext() );
    }

    return (
        <Box width="100%">
            <UrlPopoverProvider value={ disclosures }>
                <PageTitle title={t('shared.short-url', 'URL shortener')}>
                    <ShortUrlActions disclosure={ newUrl } />
                </PageTitle>


                <ListFilterBar path="/short-url">
                    <DomainsMenu />
                </ListFilterBar>

                <Box mt={ isDesktop ? 6 : 0 }>
                    <ListSelectActions
                        settings={ settings }
                        optionPath="links"
                        list={dataCache}
                        total={ data?.count || meta?.pagination?.total || dataCache?.length }
                        onDeleteCb={ () => router.push('/short-url/c') }
                    />
                    <Flex>
                        <Box width="352px"
                            sx={{ ...scrollStyles(!!isChecked ? 425 : 365) }}>
                            {
                                dataCache.map( ( item, index ) => (
                                    <ShortUrlListItemSm
                                        data={ prepareUrlData( item ) }
                                        key={ item.id }
                                        first={ index === 0 }
                                    />
                                ) )
                            }

                            {
                                !! paginationNext && (
                                    <PaginationLoader onIntersect={ onIntersect } workInProgress={ loading } />
                                )
                            }
                        </Box>
                        <Box minWidth="0" ml={8} flexGrow={1}

                            sx={{ ...scrollStyles(!!isChecked ? 425 : 365) }}
                        >
                            {singleLoading ? <PreviewSkeleton maxH="calc(100vh - 450px)" /> : <ShortUrlPreview rootProps={{ mx: 'auto', w: 'auto' }} boxProps={{ ...BoxShadow }} data={link} />}
                        </Box>
                    </Flex>
                </Box>

                <NewUrlModal discolusre={ newUrl } />
                <CustomDomainModal />
                {/*<ViewUrlModal screen={ screen } items={ links?.data } />*/}
            </UrlPopoverProvider>
        </Box>
    );
}

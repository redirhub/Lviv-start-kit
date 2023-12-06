import { useEffect, useMemo } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { uniqBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import PreviewSkeleton from '@/components/shared/PreviewSkeleton';
import useAppResponsive from '@/hooks/useAppResponsive';
import useRedirectsApi from '@/hooks/useRedirectsApi';
import { ContentSpinner } from '@/components/ContentSpinner';
import { EmptyScreenRedirect } from '@/components/Screen.RedirectList';
import { ListFilterBar } from '@/components/shared/ListFilterBar';
import { ListSelectActions } from '@/components/shared/ListSelectActions';
import { PageTitle } from '@/components/PageTitle';
import { PaginationLoader } from '@/components/PaginationLoader';
import { RedirectActions } from '@/components/redirects/Actions';
import { RedirectListItemCompat } from '@/components/redirects/ListItemCompat';
import { RedirectsPreview } from '@/components/redirects/Preview';
import { goNext, paginationReset, updateListClicks } from '@/store/slices/redirects';
import { noop, prepareRedirectsData } from '@/utils';
import { updateIds } from '@/store/slices/options';
import { useAppDispatch, useAppSelector } from '@/store';
import { useGetListClicksMutation, useGetRedirectByIdQuery } from '@/store/service/redirects';
import { scrollStyles } from '@/common-styles';
import useRedirectsCountApi from '@/hooks/useRedirectsCountApi';

export function ScreenRedirectsCompat() {
    const { t } = useTranslation();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { data: redirects, isLoading, isFetching } = useRedirectsApi();
    const [ getListClicks ]= useGetListClicksMutation();
    const settings = useAppSelector( state => state.options.redirects );

    const checkAll = settings.checked_all;
    const checked = settings.checked;
    const isChecked = checked?.length || checkAll;

    const { listClicks } = useAppSelector( state => state.redirects);
    const meta = redirects?.meta || {};
    const { isDesktop } = useAppResponsive();
    const paginationNext = useAppSelector( state => state.redirects.options.pagination?.next || null );
    const cachedItems = useAppSelector( state => state.redirects.options.cached || {} );
    const { data } = useRedirectsCountApi();

    const dataCache = useMemo( () => {
        return uniqBy( Object.entries( cachedItems ).flatMap( item => {
            return item?.[1]?.data?.map(i => Object.assign({}, i, { cursor: item?.[0] || '' })) || [];
        } ), 'id' );
    }, [cachedItems, redirects]);

    const items = dataCache;

    const ids = useMemo( () => dataCache?.map( k => k.id ), [ dataCache ]);

    const pageSlug = router.query.view;
    const loading = isFetching || isLoading;

    const handleGetLinkClicks= ()=> {
        getListClicks({ files: items?.map((item)=> item?.file) }).then((result)=>  dispatch(updateListClicks(result?.data)));
    };

    useEffect(() => {
        if(items?.length > 0) {
            handleGetLinkClicks();
        }
    }, [items]);

    useEffect(() => {
        return () => {
            dispatch( updateIds( { path: 'redirects', ids: [] } ) );
            dispatch( paginationReset() );
        };
    }, []);


    useEffect(() => {
        dispatch( updateIds( { path: 'redirects', ids } ) );
    }, [ ids ]);


    const { isLoading: isSingleLoading, isFetching: isSingleFetching, data: redirect, isError } = useGetRedirectByIdQuery(
        pageSlug,
        {
            skip: ! pageSlug
        }
    );

    const singleLoading =  isSingleLoading || isSingleFetching || isError || ! redirect;

    if ( isError && ! redirect ) {
        router.push('/404').then( noop );
    }

    useEffect( () => {
        if ( ! pageSlug && ! loading && redirects?.data?.length ) {
            router.replace('/redirects/c?view=' + redirects?.data[0].id ).then( noop );
        }
    }, [loading, pageSlug, redirects?.data, router, router.isReady] );

    if ( ! dataCache?.length ) {

        if ( loading ) {
            return <ContentSpinner />;
        }

        return <EmptyScreenRedirect />;
    }

    function onIntersect() {
        dispatch( goNext() );
    }

    return (
        <Box width="100%">
            <PageTitle title={t('shared.redirects', 'Redirects')}>
                <RedirectActions />
            </PageTitle>

            <ListFilterBar isRedirect path="/redirects" />

            <Box mt={ isDesktop ? 6 : 0 }>
                <ListSelectActions
                    list={dataCache}
                    settings={ settings }
                    optionPath="redirects"
                    total={ data?.count || meta?.pagination?.total || items.length }
                    onDeleteCb={ () => router.replace('/redirects/c') }
                />
            </Box>

            <Flex>
                <Box
                    width="352px"
                    sx={{
                        ...scrollStyles(!!isChecked ? 425 : 365)
                    }}>
                    {
                        items.map( ( item, index ) => (
                            <RedirectListItemCompat
                                listClicks={listClicks}
                                data={ prepareRedirectsData( item ) }
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

                <Box minWidth="0" pb={4} ml={8} flexGrow={1} sx={{  ...scrollStyles(!!isChecked ?  425 : 365) }}>
                    {(singleLoading) ? <PreviewSkeleton /> : <RedirectsPreview rootProps={{ mx: 'auto', w: 'auto' }} data={redirect} isCompact={true} />}
                </Box>
            </Flex>
        </Box>
    );
}

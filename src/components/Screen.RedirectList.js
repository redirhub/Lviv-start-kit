import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { uniqBy } from 'lodash';
import { useTranslation } from 'react-i18next';
import useRedirectsApi from '@/hooks/useRedirectsApi';
import useRedirectsCountApi from '@/hooks/useRedirectsCountApi';
import { ContentSpinner } from '@/components/ContentSpinner';
import { NotFound } from '@/components/NotFound';
import { PageTitle } from '@/components/PageTitle';
import { RedirectActions } from '@/components/redirects/Actions';
import { ListFilterBar } from '@/components/shared/ListFilterBar';
import { updateFilters, updateIds } from '@/store/slices/options';
import { useAppDispatch, useAppSelector } from '@/store';
import { RedirectsListItem } from '@/components/redirects/ListItem';
import { ListSelectActions } from '@/components/shared/ListSelectActions';
import useAppResponsive from '@/hooks/useAppResponsive';
import { PaginationLoader } from '@/components/PaginationLoader';
import { goNext, paginationReset, updateListClicks } from '@/store/slices/redirects';
import { useGetListClicksMutation } from '@/store/service/redirects';

export function EmptyScreenRedirect() {

    const { t } = useTranslation();
    const filters = useAppSelector( state => state.options.filters.redirects );
    const dispatch = useAppDispatch();

    function clearFilters() {
        dispatch( updateFilters( {
            path: 'redirects',
            object: {
                tags: [],
                start_date: '',
                end_date: '',
                destination: ''
            }
        } ) );
    }

    const hasFilters = useMemo( () => {
        return !! (filters.start_date || filters.end_date || filters.tags?.length || filters.destination);
    }, [ filters ]);

    if ( hasFilters ) {
        return (
            <NotFound title={t('redirect.filter-empty', 'No redirects with selected filters!')}>
                <ButtonGroup spacing={6}>
                    <Button onClick={clearFilters} size="lg">
                        {t('shared.filter-clear', 'Clear filters')}
                    </Button>
                    <Link href="/redirects/new">
                        <Button size="lg" colorScheme="primary">
                            {t('redirect.new', 'New redirect')}
                        </Button>
                    </Link>
                </ButtonGroup>
            </NotFound>
        );
    }

    return (
        <NotFound title={t('redirect.empty', 'No redirections yet!')}>
            <Link href="/redirects/new">
                <Button size="lg" colorScheme="primary" >
                    {t('redirect.new', 'New redirect')}
                </Button>
            </Link>
        </NotFound>
    );
}


export function ScreenRedirectList() {
    const dispatch = useAppDispatch();
    const { data: redirects, isFetching, isLoading } = useRedirectsApi();
    const { data } = useRedirectsCountApi();
    const { isDesktop } = useAppResponsive();
    const loading = isFetching || isLoading;
    const meta = redirects?.meta || {};
    const settings = useAppSelector( state => state.options.redirects );
    const paginationNext = useAppSelector( state => state.redirects.options.pagination?.next || null );

    const [ getListClicks ]= useGetListClicksMutation();

    const { t } = useTranslation();

    const cachedItems = useAppSelector( state => {
        return state.redirects.options.cached || {};
    } );

    const { listClicks } = useAppSelector( state => state.redirects);

    const dataCache = useMemo( () => {
        return uniqBy( Object.entries( cachedItems ).flatMap( item => {
            return item?.[1]?.data?.map(i => Object.assign({}, i, { cursor: item?.[0] || '' })) || [];
        } ), 'id' );
    }, [cachedItems, redirects]);

    const items = dataCache;
    const ids = useMemo( () => dataCache?.map( k => k.id ), [ dataCache ]);

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

            <ListFilterBar isRedirect path="/redirects/c/" />

            <Box mt={ isDesktop ? 6 : 0 }>
                <ListSelectActions
                    list={dataCache}
                    settings={ settings }
                    optionPath="redirects"
                    total={ data?.count || meta?.pagination?.total || items.length }
                />
            </Box>

            <Box position="relative" zIndex="1">
                {
                    items.map( ( item ) => (
                        <RedirectsListItem
                            data={ item }
                            listClicks={listClicks}
                            key={ item.id }
                        />
                    ))
                }
            </Box>
            {
                !! paginationNext && (
                    <PaginationLoader onIntersect={ onIntersect } workInProgress={ loading } />
                )
            }
        </Box>
    );
}

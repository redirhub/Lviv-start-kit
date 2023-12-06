import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useGetRedirectsQuery } from '@/store/service/redirects';
import { updateCache, updateRedirectsOptions } from '@/store/slices/redirects';
import { useAppSelector } from '@/store';
import { extractQueryString } from '@/utils';
import { paginationReset } from '@/store/slices/redirects';


export default function useRedirectsApi () {
    const cursor = useAppSelector( state => state?.redirects?.options?.cursor || '' );
    const filters = useAppSelector(state => state.options.filters.redirects);
    const router = useRouter();

    const obj = {
        host: router.query?.host || '',
        tags: filters.tags,
        created_before: filters.end_date,
        created_after: filters.start_date,
        destination: filters.destination
    };

    const objStr = JSON.stringify( obj );
    const memoizedObj = useMemo(() => obj, [ objStr ]);

    useEffect(() => {
        dispatch( paginationReset());
    }, [ memoizedObj ]);

    const { ...props } = useGetRedirectsQuery( {
        ...obj,
        cursor
    } );
    const dispatch = useDispatch();

    useEffect(() => {
        const cursor = props?.data?.meta?.cursor || {};
        if ( props?.data ) {
            dispatch(updateCache({ key: extractQueryString(cursor.next, 'cursor') || '0x1', value: props?.data }));
        }
        dispatch( updateRedirectsOptions({ key:  'pagination', value: cursor }) );
    }, [ props.data ]);

    return props;
}

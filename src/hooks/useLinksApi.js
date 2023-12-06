import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useGetLinksQuery } from '@/store/service/links';
import { useAppDispatch, useAppSelector } from '@/store';
import { paginationReset, updateCache, updateLinksOptions } from '@/store/slices/links';
import { extractQueryString } from '@/utils';

export default function useLinksApi() {
    const cursor = useAppSelector( state => state?.links?.options?.cursor || '' );
    const router = useRouter();
    const filters = useAppSelector( state => state.options.filters.links );
    const dispatch = useAppDispatch();
    
    const obj = {
        tags: filters.tags,
        host: router.query?.host || '',
        created_before: filters.end_date,
        created_after: filters.start_date,
        destination: filters.destination
    };
    
    const objStr = JSON.stringify( obj );
    const memoizedObj = useMemo(() => obj, [ objStr ]);
    
    useEffect(() => {
        dispatch( paginationReset());
    }, [ memoizedObj ]);
    
    const { data, ...props } = useGetLinksQuery({
        ...obj,
        cursor
    });
    
    useEffect( () => {
        const cursor = data?.meta?.cursor || {};
        if ( data?.data?.length ) {
            dispatch(updateCache({ key: extractQueryString(cursor.next, 'cursor') || '0x1', value: data }));
        }
    }, [ data?.data ] );
    
    
    useEffect(() => {
        const cursor = data?.meta?.cursor || {};
        dispatch( updateLinksOptions({ key:  'pagination', value: cursor }) );
    }, [data?.meta]);
    
    return {  data, ...props };
}

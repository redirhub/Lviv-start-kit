import { useEffect, useMemo } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/store';
import { useGetHostsQuery } from '@/store/service/hosts';
import { updateCache, updateHostsOptions } from '@/store/slices/hosts';
import { extractQueryString, getActiveFilters } from '@/utils';

export default function useHostsApi() {
    const dispatch = useDispatch();
    const cursor = useAppSelector(state => state?.hosts?.options?.cursor);
    const filters = useAppSelector(state => state?.hosts?.options?.filters);

    const activeFilters = useMemo(() =>  (
        getActiveFilters(filters)
    ), [filters]);

    const params = useMemo(() => ({
        ...(cursor ? { ...activeFilters, cursor } : activeFilters),
    }), [cursor, activeFilters]);

    const { ...props } = useGetHostsQuery(params);

    useEffect(() => {
        const cursor = props?.data?.meta?.cursor || {};
        if (props?.data) {
            dispatch(updateCache({ key: extractQueryString(cursor.next, 'cursor') || '0x1', value: props?.data }));
        }
        dispatch(updateHostsOptions({ key: 'pagination', value: cursor }));
    }, [props?.data]);

    return props;
}

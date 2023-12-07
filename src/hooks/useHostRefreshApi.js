import { useMemo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/store';
import { updateHostsOptions } from '@/store/slices/hosts';
import { useFetchHostMutation } from '@/store/service/hosts';

export default function useHostRefreshApi() {
    const dispatch = useDispatch();
    const cachedItems = useAppSelector(state => state.hosts.options.cached || {});
    const [refreshHost, { data: response, ...props }] = useFetchHostMutation();

    const updatedData = useMemo(() =>
        Object.keys(cachedItems).reduce((updatedItems, key) => {
            updatedItems[key] = {
                ...cachedItems[key],
                data: cachedItems[key].data.map((dataItem) => {
                    if (dataItem.host === response?.host) {
                        return { ...dataItem, ...response };
                    }
                    return dataItem;
                }),
            };
            return updatedItems;
        }, {})
    , [response]);

    useEffect(() => {
        if (updatedData && response) {
            dispatch(updateHostsOptions({ key: 'cached', value: updatedData }));
            dispatch(updateHostsOptions({ key: 'hostByName', value: response }));
        }
    }, [response]);

    return [refreshHost, { response, ...props }];
}

import { useMemo, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import useAppToast from '@/hooks/useAppToast';
import { useAppSelector } from '@/store';
import { updateHostsOptions } from '@/store/slices/hosts';
import { useDeleteHostMutation } from '@/store/service/hosts';


export default function useHostDeleteApi() {
    const dispatch = useDispatch();
    const { deleteRecord } = useAppToast();
    const cachedItems = useAppSelector(state => state.hosts.options.cached || {});
    const [deleteHost, response] = useDeleteHostMutation();

    const updatedData = useMemo(() =>
        Object.keys(cachedItems).reduce((updatedItems, key) => {
            updatedItems[key] = {
                ...cachedItems[key],
                data: cachedItems[key].data.filter((dataItem) => dataItem.host !== response?.originalArgs),
            };
            return updatedItems;
        }, {})
    , [response?.data]);

    useEffect(() => {
        if (updatedData && response?.isSuccess) {
            dispatch(updateHostsOptions({ key: 'cached', value: updatedData }));
        }
    }, [response?.isSuccess]);

    useEffect(() => {
        if (response?.isError || response?.isSuccess) {
            deleteRecord(response);
        }
    }, [response?.isError, response?.isSuccess]);

    return [deleteHost, response];
}

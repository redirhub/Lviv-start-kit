import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useGetHostByHostNameQuery } from '@/store/service/hosts';
import { updateHostsOptions } from '@/store/slices/hosts';

export default function useHostByHostNameApi(hostName, options = {}) {
    const dispatch = useDispatch();
    const { data: response, isSuccess, ...props } = useGetHostByHostNameQuery(hostName, options);

    useEffect(() => {
        if (response && isSuccess) {
            dispatch(updateHostsOptions({ key: 'hostByName', value: response }));
        }
    }, [response, isSuccess]);

    return { response: data, isSuccess, ...props };
}

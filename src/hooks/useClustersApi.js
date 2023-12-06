import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { useGetClustersQuery } from '@/store/service/clusters';
import { setClusters, updateClustersOptions } from '@/store/slices/clusters';
import { findNextCluster } from '@/utils';

export default function useClustersApi() {
    const dispatch = useAppDispatch();
    const clustersList = useAppSelector(state => state.clusters.clusters?.list);
    const { ...props } = useGetClustersQuery(undefined, { skip: !!clustersList });

    const { currentCluster, nextCluster } = useMemo(() => {
        return findNextCluster(props?.data?.list, props?.data?.current);
    }, [props?.data]);

    useEffect(() => {
        if (props?.data) {
            dispatch(setClusters(props?.data));
            dispatch(updateClustersOptions({ key: 'cluster', value: {
                currentCluster, nextCluster
            } }));
        }
    }, [props?.data]);

    return props;
}

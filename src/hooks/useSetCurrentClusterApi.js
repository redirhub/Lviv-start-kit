import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { useSetCurrentClusterMutation } from '@/store/service/clusters';
import { setClusters, updateClustersOptions } from '@/store/slices/clusters';
import { findNextCluster } from '@/utils';

export default function useSetCurrentClusterApi() {
    const dispatch = useAppDispatch();
    const clusters = useAppSelector(state => state.clusters.clusters);
    const [setCurrentCluster, { data: response, ...props }] = useSetCurrentClusterMutation();

    const { currentCluster, nextCluster } = useMemo(() => {
        return findNextCluster(clusters?.list, response?.name);
    }, [clusters?.list, response]);

    useEffect(() => {
        if (response?.name) {
            dispatch(setClusters({ ...clusters, current: response?.name }));
            dispatch(updateClustersOptions({ key: 'cluster', value: {
                currentCluster, nextCluster
            } }));
        }
    }, [response?.name]);

    return [setCurrentCluster, props];
}

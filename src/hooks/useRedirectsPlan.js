import useUsage from './useUsage';
import { useMemo } from 'react';

export default function useRedirectsPlan() {

    const { subscription, limits, ...props } = useUsage('redirect');

    const leftRecords = useMemo(() => {
        const _limit = limits.find(({ id }) => id === 'records');
        return _limit?.included ? _limit.included - _limit.used : 999999;
    }, [limits]);

    const recordsColor = useMemo(() => {
        if (leftRecords < 50) return 'warning.500';
        return 'success.500';
    }, [leftRecords]);

    return {
        leftRecords,
        recordsColor,
        subscription,
        limits,
        ...props
    };
}

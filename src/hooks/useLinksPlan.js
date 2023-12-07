import useUsage from './useUsage';
import { useMemo } from 'react';

export default function useLinksPlan() {

    const { subscription, limits, ...props } = useUsage('short-url');

    const leftRecords = useMemo(() => {
        const _limit = limits.find(({ id }) => id === 'records');
        return _limit?.included ? _limit.included - _limit.used : 999999;
    }, [limits]);

    const recordsColor = useMemo(() => {
        if (leftRecords < 50) return 'warning.500';
        return 'success.500';
    }, [leftRecords]);

    const leftDomain = useMemo(() => {
        const _limit = limits.find(({ id }) => id === 'hosts');
        return _limit?.included ? _limit.included - _limit.used : 999999;
    }, [limits]);

    const domainColor = useMemo(() => {
        if (leftDomain < 10) return 'warning.500';
        return 'success.500';
    }, [leftDomain]);

    return {
        leftRecords,
        recordsColor,
        leftDomain,
        domainColor,
        subscription,
        limits,
        ...props
    };
}

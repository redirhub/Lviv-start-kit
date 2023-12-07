import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetProductSubscriptionsQuery } from '@/store/service/subscriptions';
import { NumberFormatter } from '@/components/common/numberFormatter';

export default function useUsage(product = 'redirect', autoRefresh = false) {
    const { data, isFetching, isLoading } = useGetProductSubscriptionsQuery(null, {
        pollingInterval: autoRefresh ? 30000 : 0,
    });
    const { t } = useTranslation();

    const product_subscriptions = data?.data || [];


    const subscription = useMemo(() => {
        return product_subscriptions.find((e) => e.product === product);
    }, [product_subscriptions, product]);

    // add percent to limits
    const limits = useMemo(() => {
        let _limits = [];
        if (subscription) {
            _limits = subscription.limits.map((e) => {
                const _percent = e.included > 0 ? Math.ceil(e.used * 100 / e.included) : 0;
                return {
                    ...e,
                    used_readable: NumberFormatter(e.used),
                    included_readable: e.included > 0 ? NumberFormatter(e.included) : t('shared.unlimited', 'Unlimited'),
                    percent: _percent < 5 ? 5 : _percent
                };
            });
        }
        return _limits;
    }, [subscription]);

    const percent = useMemo(() => {
        let percent = 5;
        if (subscription) {
            limits.filter(e => e.primary).map((e) => {
                const _percent = e.included > 0 ? Math.ceil(e.used * 100 / e.included) : 0;
                if (_percent > percent) {
                    percent = _percent;
                }
            });
        }
        return percent;
    }, [limits]);

    const colorScheme = useMemo(() => {
        let _colorScheme = 'warning';
        if (percent < 80) {
            _colorScheme = 'success';
        } else if (percent < 100) {
            _colorScheme = 'warning';
        } else {
            _colorScheme = 'red';
        }
        return _colorScheme;
    }, [percent]);

    const upgradeLink = useMemo(() => {
        return `/plan/${subscription?.product}`;
    }, [product, subscription]);

    const renewLink = useMemo(() => {
        return `/subscribe/${subscription?.plan}`;
    }, [product, subscription]);

    return { subscription, percent, upgradeLink, renewLink, colorScheme, limits, isLoading, isFetching };
}

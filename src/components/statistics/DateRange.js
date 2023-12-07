
import { ButtonGroup, Button } from '@chakra-ui/react';
import { useCallback } from 'react';
import { t } from 'i18next';
import { noop } from '@/utils';
import useAppResponsive from '@/hooks/useAppResponsive';


export default function DateRange(
    {
        range,
        onClick = noop
    }
) {
    const { isDesktop, isMobile } = useAppResponsive();
    const change = useCallback((value) => {
        onClick(value);
    }, [onClick]);

    const TimeStampTabList = [
        { label: t('shared.stcs-today', 'Today'), value: 'today' },
        { label: t('shared.stcs-yesterday', 'Yesterday'), value: 'yesterday' },
        { label: t('shared.stcs-7days', 'Last 7 days'), value: 'last-week' },
        { label: t('shared.stcs-30days', 'Last 30 days'), value: 'last-month' },
    ];

    return <ButtonGroup flexWrap={isDesktop ? '' : 'wrap'} isAttached spacing="0">
        {TimeStampTabList.map((item) => (
            <Button minW={isMobile ? 50 : 'auto'}
                onClick={() => change(item.value)}
                key={item.value}
                sx={{
                    bg: item.value === range ? 'primary.50' : '', color: item.value === range ? 'primary.600' : 'gray.500', fontSize: isMobile ? 12 : 'auto', mt: isMobile ? 2 : 0
                }}
                color="gray.500" size="sm2">{item.label}</Button>
        ))}
    </ButtonGroup>;
}

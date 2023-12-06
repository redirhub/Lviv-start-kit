import { useBreakpoint } from '@chakra-ui/react';

export default function useAppResponsive() {

    const breakpoint = useBreakpoint({ ssr: false });
    const isMobile = [ 'base', 'sm' ].includes( breakpoint );
    const isTablet = [ 'md', 'lg'].includes(breakpoint);
    const isLarge = [ '2xl'].includes(breakpoint);
    const isDesktop = ['xl', '2xl'].includes(breakpoint);
    const btnSizeLg = isMobile ? 'sm' : 'lg';

    return {
        isMobile,
        isLarge,
        isTablet,
        isDesktop,
        breakpoint,
        btnSizeLg,
    };
}

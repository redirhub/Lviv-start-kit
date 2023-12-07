import { Flex, Heading, Spacer } from '@chakra-ui/react';
import { memo } from 'react';
import { isEqual } from 'lodash';
import useAppResponsive from '@/hooks/useAppResponsive';

function _PageTitle({ title, children }) {
    const { isMobile } = useAppResponsive();

    const styler = {
        heading: {}
    };

    if ( isMobile ) {
        styler.heading = {
            size: 'md',
            lineHeight: '28px',
            w: '100%'
        };
    }

    return (
        <Flex zIndex={1}>
            <Heading { ...styler.heading }>{ title }</Heading>
            <Spacer />
            { children }
        </Flex>
    );
}

export const PageTitle = memo( _PageTitle, isEqual );

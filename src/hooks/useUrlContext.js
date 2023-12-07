import { useContextSelector } from 'use-context-selector';
import { urlPopoverContext } from '@/config/context/url-popover';
import { noop } from '@/utils';

export default function useUrlContext( path ) {

    if ( ! path ) {
        throw Error('path required for useUrlContext hook ');
        return;
    }

    return useContextSelector( urlPopoverContext, v => v?.[path] || { onOpen: noop, onClose: noop } );
}

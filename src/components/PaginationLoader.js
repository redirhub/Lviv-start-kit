import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { noop } from '@/utils';

export function PaginationLoader( { onIntersect = noop, workInProgress, ...props } ) {
    const ref = useRef( null );
    
    function interact( [ entry ] ) {
        if ( entry.isIntersecting && ! workInProgress ) {
            onIntersect?.();
        }
    }
    
    useEffect(() => {
        const observer = new window.IntersectionObserver( interact, { root: null, threshold: 0 } );
        observer.observe( ref.current );
    }, []);
    
    return (
        <Flex ref={ ref } width="full" justifyContent="center" alignItems="center" height="100px" {...props}>
            <Spinner />
        </Flex>
    );
}

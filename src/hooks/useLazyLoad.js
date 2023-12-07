import { useEffect, useRef, useState, useCallback } from 'react';
import { noop } from '@/utils';

export function useLazyLoad({ onIntersect = noop, workInProgress = false }) {
    const ref = useRef(null);
    const [emited, setEmited] = useState(false);

    const interact = useCallback(([entry]) => {
        if (entry.isIntersecting && !workInProgress && !emited) {
            setEmited(true);
            onIntersect?.();
            console.log('intersect');
        }
    }, [workInProgress, onIntersect]);

    useEffect(() => {
        const observer = new window.IntersectionObserver(interact, { root: null, threshold: 0 });
        if (ref.current) {
            observer.observe(ref.current);
        }
        // Clean up function
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [interact]);

    return { ref, inView: emited };
}

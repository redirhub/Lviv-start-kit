import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '@/store';
import { clearErrors } from '@/store/slices/error';

export function Error() {
    const toast = useToast();
    const errorMessage = useAppSelector((state) => state.error.message);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast({
                title: errorMessage,
                position: 'bottom-right',
                status: 'error',
            });
            dispatch(clearErrors());
        }
    }, [errorMessage, toast]);

    return (
        <>
        </>
    );
}


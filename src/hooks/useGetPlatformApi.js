import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useGetPlatformsQuery } from '@/store/service/accounts';
import { setPlatforms } from '@/store/slices/accounts';

export default function useGetPlatformApi() {
    const dispatch = useAppDispatch();
    const { locales } = useAppSelector((state) => state.accounts.platforms);
    const { data: languages, props } = useGetPlatformsQuery(undefined, { skip: locales?.length });

    useEffect(() => {
        if (languages?.data) {
            dispatch(setPlatforms(languages?.data));
        }
    }, [languages?.data]);

    return { languages, props };
}

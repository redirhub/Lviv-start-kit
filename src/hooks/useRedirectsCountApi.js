import { useGetCountQuery } from '@/store/service/redirects';
import { useAppSelector } from '@/store';


export default function useRedirectsCountApi () {
    const cursor = useAppSelector( state => state?.redirects?.options?.cursor || '' );
    const filters = useAppSelector( state => state.options.filters.redirects );

    const obj = {
        tags: filters.tags,
        created_before: filters.end_date,
        created_after: filters.start_date,
        destination: filters.destination
    };

    const { ...props } = useGetCountQuery( {
        ...obj,
        cursor
    } );

    return props;
}

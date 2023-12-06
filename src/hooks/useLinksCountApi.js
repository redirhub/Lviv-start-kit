import { useRouter } from 'next/router';
import { useGetCountQuery } from '@/store/service/links';
import { useAppSelector } from '@/store';

export default function useLinksCountApi() {
    const cursor = useAppSelector( state => state?.links?.options?.cursor || '' );
    const router = useRouter();
    const filters = useAppSelector( state => state.options.filters.links );

    const obj = {
        tags: filters.tags,
        host: router.query?.host || '',
        created_before: filters.end_date,
        created_after: filters.start_date,
        destination: filters.destination
    };

    const { data, ...props } = useGetCountQuery({
        ...obj,
        cursor
    });

    return {  data, ...props };
}

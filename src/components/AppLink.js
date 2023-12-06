import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export function AppLink( props ) {
    return (
        <Link as={NextLink} href={props.href || 'javascript: void(0);'} {...props} />
    );
}

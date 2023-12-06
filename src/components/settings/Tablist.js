import { TabList, Tab, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function Tablist(props) {
    const router = useRouter();

    const styler_tablist = {
        p: 1,
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '20px',
        bg: 'gray.50',
        borderRadius: 'lg',
        borderColor: 'gray.50',
        color: 'gray.500',
        overflowX: 'scroll',
    };

    const styler_tab = {
        _selected: {
            bg: 'white',
            color: 'primary.700',
            boxShadow: 'base'
        },
        px: 3,
        py: 2,
        borderRadius: 'lg',
        mr: 2
    };

    const styler_link = {
        px: 3,
        py: 2,
        mx: -3,
        my: -2,
        _hover: {

        },
    };

    return (
        <TabList {...styler_tablist}>
            {props.tabs.map((item, key) => (
                <Tab {...styler_tab} key={key}>
                    <Button {...styler_link} variant='link' onClick={() => router.push(item.path )}>
                        {item.name}
                    </Button>
                </Tab>
            ))}
        </TabList>
    );
}

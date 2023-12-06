import { LAYOUT_STD_WIDTH } from '@/config/constant';

export const whiteBoxShadow = {
    borderRadius: 8,
    bg: 'white',
    p: 6,
    maxWidth: '100%',
    w: LAYOUT_STD_WIDTH,
    mx: 'auto'
};

export const yellowBoxShadow = {
    borderRadius: 8,
    bg: '#FFFCF5',
    p: 6,
    maxWidth: '100%',
    w: LAYOUT_STD_WIDTH,
    mx: 'auto',
};

export const BoxShadow = {
    boxShadow: '0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08)',
};

export const GridItemStyle = {
    borderRadius: 8,
    bg: 'white',
    boxShadow: '0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08)',
    p: 6,
    maxWidth: '100%',
    mx: 'auto'
};

export const scrollStyles= (diff) => {
    return (
        {
            paddingRight: '3px',
            height: `calc(100vh - ${diff - 120}px)`,
            overflow:'auto', '&::-webkit-scrollbar': {
                width: '5px',
                borderRadius: '8px',
                backgroundColor: 'gray.200',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'gray.300',
            },
        }
    );
};


export const AuthFieldStyle = {
    my: 3,
};

export const MobileAuthFieldStyle = {
    my: 1,
};

export const TableHeaderStyle = {
    textTransform: 'none',
    color: '#667085',
};

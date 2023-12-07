import DomainIcon from '@/icons/domain';
import MapIcon from '@/icons/map';
import WeChatIcon from '@/icons/weChat';
import QQIcon from '@/icons/qq';
import ChromeIcon from '@/icons/chrome';

export const dataListMonitoring = [
    {
        id: 1,
        title: 'My first monitoring',
        sub_title: '2 URL\'s',
        isWarning: false,
        tags: [
            {
                title: 'HTTP',
                icon: <DomainIcon size='12px' />,
                bg: '#FFFAEB',
                color: '#B54708'
            }
        ],
        isPlay: false,
    },
    {
        id: 2,
        title: 'My first monitoring',
        sub_title: '2 URL\'s',
        isWarning: false,
        tags: [
            {
                title: 'HTTP',
                icon: <DomainIcon size='12px' />,
                bg: '#FFFAEB',
                color: '#B54708'
            },
            {
                title: 'WeChat',
                icon: <WeChatIcon size='12px' />,
                bg: '#ECFDF3',
                color: '#027A48'
            },
            {
                title: 'QQ',
                icon: <QQIcon size='12px' />,
                bg: '#FFF6ED',
                color: '#C4320A'
            },
            {
                title: 'Chrome',
                icon: <ChromeIcon size='12px' />,
                bg: '#FEF3F2',
                color: '#B42318'
            },
            {
                title: 'Country',
                icon: <MapIcon size='12px' />,
                bg: '#F8F9FC',
                color: '#363F72'
            }
        ],
        isPlay: false,
    },
    {
        id: 3,
        title: 'Working list of URL\'s',
        sub_title: '12 URL\'s',
        isWarning: true,
        tags: [
            {
                title: 'QQ',
                icon: <QQIcon size='12px' />,
                bg: '#FFF6ED',
                color: '#C4320A'
            },
            {
                title: 'Chrome',
                icon: <ChromeIcon size='12px' />,
                bg: '#FEF3F2',
                color: '#B42318'
            },
        ],
        isPlay: true,
    },
    {
        id: 4,
        title: 'Click-edge',
        sub_title: '1 URL\'s',
        isWarning: false,
        tags: [
            {
                title: 'HTTP',
                icon: <DomainIcon size='12px' />,
                bg: '#FFFAEB',
                color: '#B54708'
            },
        ],
        isPlay: false,
    },
    {
        id: 5,
        title: 'Premium monitoring',
        sub_title: '10 URL\'s',
        isWarning: true,
        tags: [
            {
                title: 'HTTP',
                icon: <DomainIcon size='12px' />,
                bg: '#FFFAEB',
                color: '#B54708'
            },
            {
                title: 'WeChat',
                icon: <WeChatIcon size='12px' />,
                bg: '#ECFDF3',
                color: '#027A48'
            },
            {
                title: 'QQ',
                icon: <QQIcon size='12px' />,
                bg: '#FFF6ED',
                color: '#C4320A'
            },
            {
                title: 'Chrome',
                icon: <ChromeIcon size='12px' />,
                bg: '#FEF3F2',
                color: '#B42318'
            },
            {
                title: 'HTTP',
                icon: <MapIcon size='12px' />,
                bg: '#F8F9FC',
                color: '#363F72'
            }
        ],
        isPlay: false,
    },
];

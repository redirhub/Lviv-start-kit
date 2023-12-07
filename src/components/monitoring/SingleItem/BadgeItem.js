import { Flex, Text } from '@chakra-ui/react';
import { TbWorldWww } from 'react-icons/tb';
import { AiOutlineWechat } from 'react-icons/ai';
import { MdOutlineShield } from 'react-icons/md';
import { FaChrome } from 'react-icons/fa';
import { CiMap } from 'react-icons/ci';

export function BadgeItem({ state, text }) {
    const statusColors = {
        success: { textColor: '#027A48', bgColor: 'success.50' },
        warning: { textColor: '#C4320A', bgColor: 'warning.50' },
        error: { textColor: '#B42318', bgColor: 'error.50' },
        default: { textColor: '#363F72', bgColor: 'blue.50' },
    };

    const { textColor, bgColor } = statusColors[state] || statusColors.default;

    const getIconComponent = (text) => {
        switch (text) {
            case 'HTTP':
                return <TbWorldWww color={textColor} />;
            case 'WeChat':
                return <AiOutlineWechat color={textColor} />;
            case 'QQ':
                return <MdOutlineShield color={textColor} />;
            case 'Chrome':
                return <FaChrome color={textColor} />;
            case 'Country':
                return <CiMap color={textColor} />;
            default:
                return null;
        }
    };

    const iconComponent = getIconComponent(text);

    return (
        <Flex borderRadius="xl" marginX="2" alignItems="center" backgroundColor={bgColor} px="12px" py="4px">
            {iconComponent}
            <Text marginLeft="2" color={textColor}>{text}</Text>
        </Flex>
    );
}

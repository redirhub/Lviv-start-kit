import { Flex } from '@chakra-ui/react';
import { Text14W600 } from '@/components/elements/Text14';
import { Text16W600 } from '@/components/elements/Text16';

export default function Button({
    lefticon,
    righticon,
    colorScheme,
    text,
    size,
    onClick,
    disabled,
    color,
    ...props
}) {

    var cursor = disabled ? 'not-allowed' : 'pointer';
    var bg, color1, bc, hover, active;
    switch (colorScheme) {
        case 'Primary':
            bg = 'primary.50';
            color1 = disabled ? 'primary.300' : 'primary.700';
            bc = 'primary.50';
            hover = disabled ? null : {
                bg: 'primary.100',
                borderColor: 'primary.100'
            };
            active = disabled ? null : {
                bg: 'primary.200',
                borderColor: 'primary.200'
            };
            break;
        case 'Primary1':
            bg = disabled ? 'primary.300' : 'primary.600';
            color1 = 'white';
            bc = disabled ? 'primary.300' : 'primary.600';
            hover = disabled ? null : {
                bg: 'primary.700',
                borderColor: 'primary.700'
            };
            active = disabled ? null : {
                bg: 'primary.900',
                borderColor: 'primary.900'
            };
            break;
        case 'Gray':
            bg = 'white';
            color1 = 'gray.700';
            bc = 'gray.300';
            hover = disabled ? null : {
                bg: 'gray.100',
            };
            active = disabled ? null : {
                bg: 'gray.300',
            };
            break;
        case 'Danger':
            bg = disabled ? 'error.100' : 'error.500';
            color1 = 'white';
            bc = disabled ? 'error.100' : 'error.500';
            hover = disabled ? null : {
                bg: 'error.600',
            };
            active = disabled ? null : {
                bg: 'error.700',
            };
            break;
        case 'Warning':
            bg = disabled ? 'warning.50' : 'warning.500';
            color1 = 'white';
            bc = disabled ? 'warning.50' : 'warning.500';
            hover = disabled ? null : {
                bg: 'warning.600',
            };
            active = disabled ? null : {
                bg: 'warning.700',
            };
            break;
        default:
            break;
    }

    var textComponent, px = 2.5, py = 2.5;
    switch (size) {
        case 'lg':
            textComponent = <Text16W600 w="full">{text}</Text16W600>;
            px = '18px';
            break;
        case 'md':
            textComponent =  <Text14W600 w="full">{text}</Text14W600>;
            px = 6;
        case 'md1':
            textComponent =  <Text14W600 w="full">{text}</Text14W600>;
            px = 4;
            break;
        case 'sm':
            textComponent =  <Text14W600 w="full">{text}</Text14W600>;
            px = 3.5;
            py = 2;
            break;
        default:
            break;
    }

    return (
        <Flex
            bg={bg}
            color={color ? color : color1}
            borderColor={bc}
            px={px}
            py={py}
            gap={2}
            borderRadius="lg"
            w="fit-content"
            borderWidth="1px"
            shadow="xs"
            onClick={disabled ? null : onClick}
            cursor={cursor}
            textAlign="center"
            _hover={hover}
            _active={active}
            alignItems="center"
            {...props}
        >
            {lefticon}
            {text ? textComponent : null}
            {righticon}
        </Flex>
    );
}

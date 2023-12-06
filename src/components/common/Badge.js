import { Flex, Tooltip } from '@chakra-ui/react';
import { Text14W500, Text14W600 } from '@/components/elements/Text14';
import { Text12W500 } from '@/components/elements/Text12';

export default function Badge({
    colorScheme,
    size,
    content,
    tooltip,
    lefticon,
    righticon,
    visible = true,
    onClick,
    ...props
}) {

    var bg, color;
    switch (colorScheme) {
        case 'Danger':
            bg = 'error.100';
            color = 'error.700';
            break;
        case 'Success':
            bg = 'success.50';
            color = 'success.700';
            break;
        case 'Blue':
            bg = 'blue.50';
            color = 'blue.700';
            break;
        case 'Primary':
            bg = 'primary.50';
            color = 'primary.700';
            break;
        case 'Gray':
            bg = 'gray.200';
            color = 'gray.700';
            break;
        case 'Warning':
            bg = 'warning.25';
            color = 'warning.500';
            break;
        default:
            break;
    }

    var px, py, radii, cont;
    switch (size) {
        case 'lg':
            px = 3.5;
            py = 2;
            radii = '3xl';
            cont = <Text14W600>{content}</Text14W600>;
            break;
        case 'md':
            px = 3;
            py = 1;
            radii = '2xl';
            cont = <Text14W500>{content}</Text14W500>;
            break;
        case 'sm':
            px = 2;
            py = 0.5;
            radii = '2xl';
            cont = <Text12W500>{content}</Text12W500>;
            break;

        default:
            break;
    }


    return (
        visible
            ? <Tooltip label={tooltip} placement='top'>
                <Flex bg={bg} color={color} px={px} py={py} borderRadius={radii} gap={2} alignItems="center" onClick={onClick} cursor={onClick || tooltip ? 'pointer' : 'auto'} {...props}>
                    {lefticon}
                    {cont}
                    {righticon}
                </Flex>
            </Tooltip>
            : null
    );
}

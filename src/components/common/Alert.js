import { Flex } from '@chakra-ui/react';
import { Text14W600 } from '@/components/elements/Text14';

export default function Alert(props) {

    var bg, color;
    switch (props.colorScheme) {
        case 'Danger':
            bg = 'error.100';
            color = 'error.700';
            break;
        case 'Warning':
            bg = 'warning.25';
            color = 'warning.500';
            break;
        default:
            break;
    }

    var px, py, radii, content;
    switch (props.size) {
        case 'lg':
            px = 2;
            py = 2;
            radii = 'xl';
            content = <Text14W600>{props.content}</Text14W600>;
            break;

        default:
            break;
    }

    return (
        <Flex bg={bg} color={color} px={px} py={py} borderRadius={radii} gap={2} w="100%" alignItems="center" {...props}>
            {props.lefticon}
            {content}
            {props.righticon}
        </Flex>
    );
}
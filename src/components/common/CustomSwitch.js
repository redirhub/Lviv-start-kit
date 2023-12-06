import { Flex }  from '@chakra-ui/react';
import { Text14W500 } from '@/components/elements/Text14';

export default function CustomSwitch({ size, options, value, onChangeDRT }) {
    var w;
    switch (size) {
        case 'lg':
            w = '177px';
            break;
        default:
            break;
    }

    return (
        <Flex w={w} textAlign="center" borderWidth="1px" borderColor="gray.300" shadow="xs" borderRadius="lg">
            {options?.map((option, index) => (
                <Text14W500
                    key={option.value}
                    w={`${100/options.length}%`}
                    px={4}
                    py={2.5}
                    bg={value === option.value ? 'gray.50' : 'white'}
                    borderRightWidth={index === options.length - 1 ? '0px' : '1px'}
                    borderLeftRadius={index === 0 ? 'lg' : '0px'}
                    borderRightRadius={index === options.length - 1 ? 'lg' : '0px'}
                    cursor="pointer"
                    onClick={() => {onChangeDRT(option.value);}}
                >
                    {option.label}
                </Text14W500>
            ))}
        </Flex>
    );
}

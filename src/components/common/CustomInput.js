import { useState, useRef, useEffect } from 'react';
import { Flex, Input, Box } from '@chakra-ui/react';
import CheckIcon from '@/icons/check';

export default function CustomInput({
    colorScheme,
    value,
    lefticon,
    righticon,
    isDisable,
    isReadonly,
    icontype,
    width,
    onChange,
    handleIconButton,
    ...props
}) {

    const [icon, setIcon] = useState(righticon);
    const iconRef = useRef(null);

    var bg, color, bc;
    switch (colorScheme) {
        case 'Gray':
            bg = isDisable ? 'gray.50' : 'white';
            color = isDisable ? 'gray.500' : 'gray.900';
            bc = 'gray.300';
            break;

        default:
            break;
    }

    const handleClick = handleIconButton ? handleIconButton : (e) => {
        navigator.clipboard.writeText(value);
        setIcon(<CheckIcon size="16px" />);
        iconRef.current.style.cursor = 'auto';

        setTimeout(() => {
            if (!iconRef.current) return;
            setIcon(righticon);
            iconRef.current.style.cursor = 'pointer';
        }, 2000);
    };

    useEffect(() => {
        if (righticon) setIcon(righticon);
    }, [righticon]);

    return (
        <Flex
            borderColor={bc}
            bg={bg}
            color={color}
            shadow="xs"
            gap={icon || lefticon ? 2 : 0}
            pl={lefticon ? 3.5 : 0}
            pr={icon ? 3.5 : 0}
            borderWidth="1px"
            borderRadius="lg"
            alignItems="center"
            maxWidth={(icontype === 'button' && width !== 'full') ? '80%' : '100%'}
            w={(icontype === 'button' && width !== 'full') ? 'fit-content' : '100%'}
        >
            <Box>
                {lefticon}
            </Box>
            <Input
                bg={bg}
                color={color}
                value={value}
                onChange={onChange}
                isDisabled={isDisable}
                readOnly={isReadonly}
                border="none"
                w={(icontype === 'button' && width !== 'full' && value) ? `${value.length + 1}ch` : '100%'}
                ml={lefticon ? -2 : 0}
                {...props}
            />
            <Box
                onClick={icontype === 'button' ? handleClick : null}
                cursor={icontype === 'button' ? 'pointer' : 'auto'}
                ref={iconRef}
            >
                {icon}
            </Box>
        </Flex>
    );
}

import { Flex, Box, Spinner } from '@chakra-ui/react';
import CustomInput from '@/components/common/CustomInput';
import Button from '@/components/common/Button';
import { Text14W500, Text14W400 } from '@/components/elements/Text14';

export const InputWithButton = ({
    btnLabel,
    onClick,
    showBtn = false,
    rightIcon,
    value,
    onChange,
    heading,
    info,
    inputWidth = { base: '100%', md: '50%' },
    isLoading,
    ...props
}) => {

    return (
        <>
            {heading && (
                <Text14W500 color='gray.700' w="100%">
                    {heading}
                </Text14W500>
            )}
            <Flex gap={2}>
                <Box w={inputWidth}>
                    <CustomInput
                        colorScheme='Gray'
                        value={value}
                        onChange={onChange}
                        icontype='icon'
                        righticon={rightIcon}
                        {...props}
                    />
                </Box>
                <Button
                    righticon={isLoading && <Spinner size='sm' />}
                    colorScheme="Primary1"
                    text={btnLabel}
                    size="lg"
                    onClick={onClick}
                    hidden={!showBtn}
                    disabled={isLoading}
                />
            </Flex>
            {info && (
                <Text14W400 color='gray.500' w="100%">
                    {info}
                </Text14W400>
            )}
        </>
    );
};

export default InputWithButton;

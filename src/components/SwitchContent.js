import { Box, Flex, FormLabel, Switch, useId } from '@chakra-ui/react';

export function SwitchContent({ children, checked, onChange, name }) {
    const id = useId();
    return (
        <Box px={4} borderWidth="1px" borderRadius={8} borderColor="gray.300">
            <Flex height="56px" alignItems="center">
                <Switch isChecked={ checked } onChange={ () => onChange( checked => ! checked )} id={ id } />
                <FormLabel cursor="pointer" mb={0} htmlFor={ id } ml={3} fontSize="16px" fontWeight="600" color="gray.700">{ name }</FormLabel>
            </Flex>
            { !! checked && children }
        </Box>
    );
}

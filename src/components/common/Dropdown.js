import { Stack, Select } from '@chakra-ui/react';
import { Text14W500 } from '@/components/elements/Text14';

const Dropdown = ({ label, selected, onChange, options = [], isLoading, placeholder = '', dropdownWidth }) => {
    return (
        <Stack spacing={1.5} w={{ base: '100%', md: '50%' }} {...dropdownWidth}>
            {label && <Text14W500 color='gray.700'>{label}</Text14W500>}
            <Select
                defaultValue={selected}
                value={selected}
                onChange={onChange}
                disabled={!options?.length || isLoading}
                placeholder={placeholder}
            >
                {options?.map(({ label, value, text, id, name }) => (
                    <option
                        key={value || id}
                        value={value || id}
                    >
                        {label || text || name}
                    </option>
                ))}
            </Select>
        </Stack>
    );
};

export default Dropdown;

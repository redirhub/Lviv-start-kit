import { useEffect, useMemo, useRef, useState } from 'react';
import { Flex, FormControl, FormLabel, Stack, Text, Box, Menu, Button, MenuItem, MenuOptionGroup, MenuList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ChevronDown from '@/icons/chevron-down';
import ChevronUp from '@/icons/chevron-up';
import CheckIcon from '@/icons/check';
import { Text15W600 } from '@/components/elements/Text15';
import { useGetTypesQuery } from '@/store/service/redirects';

function SelectComponent({ onChange, hosts, value = 301, disabled }) {
    const [isOpen, setIsOpen]= useState(false);
    const displayValue = useMemo(()=> (hosts.find((host)=> host.id=== value)?.label), [hosts, value]);

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, isOpen]);

    return (
        <Box position='relative' >
            <Menu closeOnSelect={true} isOpen={isOpen}>
                <Button
                    onClick={()=> {
                        if(!disabled) {
                            setIsOpen(prev=> !prev);}}
                    }
                    sx={{ textAlign:'start', _hover:'none', height:45 }} rightIcon={isOpen?<ChevronUp size={5} color='gray.700'/>:<ChevronDown size={5} color='gray.700'/>}>
                    <Text width={240} fontSize={16} fontWeight={500} color='gray.600'>{displayValue ?? 'Select Method'}</Text>
                </Button>
                <MenuList width={300} position='absolute' top={47} p={0} ref={menuRef}>
                    <MenuOptionGroup defaultValue='asc' p={0}
                    >
                        {
                            hosts.map( m => (
                                <MenuItem
                                    sx={{ display:'flex', flexDirection:'row', alignItems:'start', justifyContent:'space-between' }}
                                    iconPlacement="end"
                                    iconSpacing={0}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setIsOpen(false);
                                        onChange(m.id);
                                    } }
                                    value={m.id}
                                    key={m.id}>
                                    <Stack direction='column' gap={0} pl={1}>
                                        <Text15W600 sx={{ color: 'gray.700', py: 1 }}>
                                            {m.label}
                                        </Text15W600>
                                        <Text pb='2px' color='gray.500'>
                                            {m.description}
                                        </Text>
                                    </Stack>
                                    <Box px={1} pt={0.5}>
                                        {value===m.id&&  <CheckIcon size={3} color='gray.700'/>}
                                    </Box>
                                </MenuItem>
                            ))
                        }
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </Box>
    );
}

export function RedirectsMethod({ value, onChange, flex, disabled = false }) {

    const { data, isLoading, isFetching } = useGetTypesQuery();
    const hosts = data?.data || [];

    const { t } = useTranslation();
    if ( flex ) {

        const lvl = {
            flexBasis: '64px',
            minW: '64px',
            color: 'gray.500',
            mb: 0,
            mr: 0
        };

        return (
            <FormControl>
                <Flex alignItems="center">
                    <FormLabel {...lvl}>
                        {t('shared.method', 'Method')}
                    </FormLabel>
                    <SelectComponent disabled={ disabled } value={ value} hosts={ hosts } onChange={ onChange } />
                </Flex>
            </FormControl>
        );
    }


    return (
        <FormControl>
            <FormLabel>
                {t('shared.type', 'Type')}
            </FormLabel>
            <SelectComponent value={ value} hosts={ hosts } onChange={ onChange } />
        </FormControl>
    );
}

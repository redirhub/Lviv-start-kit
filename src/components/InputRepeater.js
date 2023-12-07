import { Box, Button, Flex, FormControl, FormLabel, IconButton, Input, Stack } from '@chakra-ui/react';
import { useRef, useState, memo, useEffect } from 'react';
import PlusCircleIcon from '@/icons/plus-circle';
import TrashIcon from '@/icons/Trash';


const LocalInput = memo(function LocalInput({ index, flex, placeholder, labelStyle, label, onBlur, values, removeValueAt, flexDirection }) {
    const [ value, setValue ] = useState( values[index] || '' );
    const ref = useRef( null );

    function onChange( event ) {
        setValue( event.target.value );
    }

    function withFlex( elem ) {
        if ( flex ) {
            return <Flex alignItems="center">{elem}</Flex>;
        }
        return elem;
    }
    useEffect(() => {
        setValue(values[index] || '');
    }, [values]);

    return withFlex(
        <Stack direction={flexDirection} gap={flexDirection==='column'? 1: 0 }>
            <FormLabel {...labelStyle}>{ label }</FormLabel>
            <Flex width='100%' alignItems="center">
                <Input
                    ref={ ref }
                    onBlur={ onBlur.bind( null, index, value ) }
                    onMouseLeave={ onBlur.bind( null, index, value )  }
                    onChange={ onChange }
                    value={ value }
                    placeholder={placeholder}
                />
                {
                    values.length > 1 && (
                        <IconButton
                            onClick={ removeValueAt.bind( null, index ) }
                            ml={4}
                            minW="0"
                            p="0"
                            variant="link"
                            color="gray.500"
                            icon={ <TrashIcon size="20px" /> }
                            aria-label="Delete"
                        />
                    )
                }
            </Flex>
        </Stack>
    );
});

export function InputRepeater({ label, buttonText, placeholder = 'https://example.com/', repeat = true, flex = false, values = [], setValues, flexDirection = 'row' }) {
    function addValues() {
        setValues( [ ...values, ''] );
    }


    let labelStyle = {};
    let buttonStyle = {};

    if ( flex ) {
        labelStyle = {
            minW: '64px',
            color: 'gray.500',
            mb: 0,
            mr: 0
        };

        buttonStyle = {
            ml: '64px'
        };
    }

    function onBlur( index, value ) {
        const __values = [...values];
        __values.splice( index, 1, value );
        setValues( __values );
    }



    function removeValueAt( index ) {
        if ( values.length > 1 ) {
            const __values = [...values];
            __values.splice( index, 1 );
            setValues( __values );
        }
    }

    if ( ! values?.length ) {
        values = [''];
    }


    return (
        <Box>
            <Stack spacing={ 4 } direction="column">
                {
                    values.map( (source, index) => (
                        <FormControl key={ index }>
                            <LocalInput
                                placeholder={placeholder}
                                labelStyle={labelStyle}
                                index={ index }
                                values={ values }
                                onBlur={ onBlur }
                                label={ label }
                                flexDirection={flexDirection}
                                removeValueAt={ removeValueAt }/>
                        </FormControl>
                    ) )
                }
            </Stack>

            {
                repeat && (
                    <Button
                        onClick={ addValues }
                        colorScheme="primary"
                        mt="25px"
                        leftIcon={<PlusCircleIcon size="20px" />}
                        size="lg"
                        variant="link"
                        { ...buttonStyle }
                    >
                        { buttonText }
                    </Button>
                )
            }
        </Box>
    );
}

import { useMemo, useState } from 'react';
import {
    Box,
    Button,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuList,
    Stack,
    Text
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useGetTagsQuery } from '@/store/service/links';
import TagIcon from '@/icons/tag';
import CloseIcon from '@/icons/close';
import CheckIcon from '@/icons/check';

export function CreateTagsMenu({ tags, setTags, boxProps = {} }) {
    const { data } = useGetTagsQuery(null);

    const hintTags= useMemo(()=> {
        if(data?.data && tags) {
            const hintTags= data?.data?.filter((hint)=> !tags.includes(hint?.slug));
            return hintTags;
        }
    }, [tags, data]);

    const { t } = useTranslation();
    const [ tag, setTag ] = useState('');

    function onAddTag() {
        if ( tag && ! tags.includes( tag ) ) {
            const _t = [ ...tags ];
            _t.push( tag );
            setTags( _t );
            setTag('');
        }
    }

    function onAddHintTag(hint) {
        if ( hint && ! tags.includes( hint ) ) {
            const _t = [ ...tags ];
            _t.push( hint );
            setTags( _t );
        }
    }

    function removeTag( index ) {
        const _t = [ ...tags ];
        _t.splice(index, 1);
        setTags(_t);
    }

    function onKeyUp( event ) {
        if ( event.code === 'Enter' ) {
            onAddTag();
        }
    }

    return (
        <Flex mt={-3} ml={-2} flexWrap="wrap" alignItems="center" {...boxProps}>

            <Flex mt={3} ml={2} alignItems="center">

                <TagIcon color="primary.700" size="20px" />
                {
                    !! tags?.length && (
                        <Stack flexWrap="wrap" mr={2} ml={2} direction="row" spacing={ 2 }>
                            {
                                tags?.map((tag, index) => (
                                    <Flex alignItems="center" as={ Box } borderRadius={16} px="10px" color="orange.700" bg="orange.50" key={ tag }>
                                        <Text lineHeight="24px">{ tag }</Text>
                                        <IconButton
                                            onClick={ removeTag.bind( null, index ) }
                                            color="orange.500"
                                            variant="ghost"
                                            minW="0"
                                            py={0}
                                            pr={0}
                                            pl="7px"
                                            height="auto"
                                            icon={ <CloseIcon size="12px" /> }
                                            aria-label="Remove tag"
                                            _hover={{
                                                bg: 'none'
                                            }}
                                        />
                                    </Flex>
                                ) )
                            }
                        </Stack>
                    )
                }
            </Flex>

            <Menu>
                <MenuButton mt={3} ml={2} colorScheme="primary" variant="link" as={Button}>
                    {t('shared.add-tag', 'Create tag')}
                </MenuButton>
                <MenuList p={0}>
                    <Box p={4}>
                        <InputGroup>
                            <Input
                                onKeyUp={ onKeyUp }
                                value={ tag }
                                onChange={ e => setTag( e.target.value ) }
                                placeholder="Tag"
                            />
                            <InputRightElement>
                                <IconButton color="primary" onClick={ onAddTag } variant="ghost" icon={ <CheckIcon size="16px" /> } aria-label="Add tag" />
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                    {
                        !! hintTags?.length && (
                            <Stack flexWrap="wrap" maxWidth={320} px={3} pb={3} direction="row" spacing={ 2 }>
                                {
                                    hintTags?.map((tag, index) => (
                                        <Flex alignItems="center" as={ Box } borderRadius={16} px="10px" color="orange.700" bg="orange.50" key={ index }>
                                            <Text
                                                variant="ghost"
                                                onClick={ ()=> onAddHintTag(tag?.slug) }
                                                cursor='pointer' lineHeight="24px">{ tag?.slug }</Text>
                                        </Flex>
                                    ))
                                }
                            </Stack>
                        )
                    }
                </MenuList>
            </Menu>
        </Flex>
    );
}

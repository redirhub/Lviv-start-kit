import { useEffect, useState } from 'react';
import {
    Stack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    ButtonGroup,
    Flex,
    Box
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InlineEdit } from '@/components/InlineEdit';
import { Text16 } from '@/components/elements/Text16';
import { Text12 } from '@/components/elements/Text12';
import { noop } from '@/utils';

export function InlineEditTitle({ title, content, titleProps = {}, contentProps = {}, onUpdate, applyText = 'Apply', placeholder }) {
    const [ _title, setTitle ] = useState('');
    const [_content, setContent] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        setTitle( title );
    }, [ title ]);

    useEffect(() => {
        setContent( content );
    }, [ content ]);

    function onCancel( cb = noop ) {
        setTitle( title );
        setContent( content );
        cb();
    }

    function onSave( cb = noop ) {
        onUpdate({ title: _title, content: _content });
        cb();
    }

    function TitleComponent({ children }) {
        return (
            <Box>
                <Flex alignItems="center">

                    {
                        title ? (
                            <Text16 mr={3} {...titleProps}>{ title }</Text16>
                        ) : (
                            <Text16 mr={3} {...titleProps} opacity="0.5">{placeholder?.title || t('shared.title-placeholder', 'Enter title here')}</Text16>
                        )
                    }

                    { children }
                </Flex>
                {
                    title ? (
                        <Text12 {...contentProps}>{ content }</Text12>
                    ) : (
                        <Text12 {...contentProps} opacity="0.5">{placeholder?.content || t('shared.description-placeholder', 'Enter description here')}</Text12>
                    )
                }

            </Box>
        );
    }

    return (
        <InlineEdit title={ TitleComponent }>
            {
                ( onClose ) => (
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>
                                {t('shared.title', 'Title')}
                            </FormLabel>
                            <Input
                                value={ _title }
                                onChange={ ( e ) => setTitle( e.target.value  ) }
                                placeholder={t('shared.title-placeholder', 'Enter title here')}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                {t('shared.description', 'Description')}
                            </FormLabel>
                            <Textarea
                                value={ _content }
                                placeholder={t('shared.description-placeholder', 'Enter description here')}
                                onChange={ ( e ) => setContent( e.target.value  ) }
                            />
                        </FormControl>
                        <ButtonGroup justifyContent="flex-end">
                            <Button onClick={onCancel.bind(null, onClose)}>
                                {t('shared.cancel', 'Cancel')}
                            </Button>
                            <Button onClick={ onSave.bind( null, onClose ) } colorScheme="primary">{ applyText }</Button>
                        </ButtonGroup>
                    </Stack>
                )
            }
        </InlineEdit>
    );
}

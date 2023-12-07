import { Box, Button, ButtonGroup, Flex, FormLabel, Input, Spacer, Stack, Textarea } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { t } from 'i18next';
import { toUnicode } from 'punycode';
import ArrowLeftIcon from '@/icons/arrow-left';
import { whiteBoxShadow } from '@/common-styles';
import { LAYOUT_STD_WIDTH } from '@/config/constant';
import { InlineEditTitle } from '@/components/InlineEditTitle';
import { Favicon } from '@/components/Favicon';
import { InputRepeater } from '@/components/InputRepeater';
import { ForwardedOptions } from '@/components/shared/ForwardedOptions';
import { UTMBuilder } from '@/components/shared/UTMBuilder';
import { RedirectsAdvancedSettings } from '@/components/shared/RedirectsAdvancedSettings';
import { useGetRedirectByIdQuery, useUpdateRedirectMutation } from '@/store/service/redirects';
import { ContentSpinner } from '@/components/ContentSpinner';
import useAppResponsive from '@/hooks/useAppResponsive';
import { handleGoBack, isValidUrls } from '@/utils';
import { RedirectsMethod } from '@/components/shared/RedirectsMethod';
import { AppLink } from '@/components/AppLink';


export function ScreenRedirectsEdit(){
    const router = useRouter();
    const id = router.query.edit;
    const { isLoading, isFetching, data, isError } = useGetRedirectByIdQuery(id);
    const [ destinations, setDestinations ] = useState([]);
    const [plugins, setPlugins] = useState([]);
    const [ destination, setDestination ] = useState('');
    const [url, setUrl] = useState('');
    const [ forwardPath, setForwardPath ] = useState();
    const [ forwardQuery, setForwardQuery ] = useState();
    const [ tags, setTags ] = useState([]);
    const [ isNotify, setIsNotify ] = useState( false );
    const [ isSwitchUnbroken, setIsSwitchUnbroken ] = useState( false );
    const [ updateRedirect, { isLoading: isLoadingUpdate } ] = useUpdateRedirectMutation();
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const { isDesktop } = useAppResponsive();
    const [ utm, setUtm ] = useState({});
    const [type, setType] = useState();

    useEffect(( ) => {
        setDestinations( data?.destinations || [] );
        setPlugins(data?.plugins || []);
        setDestination( data?.destination || '' );
        setType( data?.type || '' );
        setUrl(toUnicode(data?.url || ''));
        setForwardPath( data?.forward_path );
        setForwardQuery( data?.forward_query );
        setTags( data?.tags || [] );
        setIsNotify( !! data?.is_notify );
        setIsSwitchUnbroken( !! data?.is_switch_unbroken_destination );
        setTitle( data?.title );
        setDescription( data?.description );
        setUtm( data?.utm || {} );
    }, [ data ]);

    if ( isLoading || isFetching ) {
        return <ContentSpinner />;
    }

    if ( ! data || isError ) {
        router.push( '/redirects' );
        return null;
    }

    const textType = type === 'txt';

    function save() {
        const data = {
            id,
            destinations: textType ? [] : destinations,
            url,
            type,
            forward_path: forwardPath,
            forward_query: forwardQuery,
            tags,
            plugins,
            is_notify: isNotify ? 1 : 0,
            is_switch_unbroken_destination: isSwitchUnbroken ? 1 : 0,
            title,
            description,
            destination: ! textType ? '' : destination,
            utm
        };

        console.log( data );

        updateRedirect(data);
    }

    function goBackToRedirect() {
        router.push('/redirects');
    }

    const dest = data.destination || data?.destinations?.[0] || '';

    return (
        <Box mx="auto">
            <AppLink onClick={handleGoBack}>
                <Button
                    leftIcon={ <ArrowLeftIcon /> }
                    colorScheme="primary"
                    variant="link"
                    mt="-4px"
                    mb="26px"
                >
                    {t('shared.goback', 'Go back')}
                </Button>
            </AppLink>
            <Box
                width={LAYOUT_STD_WIDTH} maxWidth="full"
                overflow="hidden"
                position='relative'
                { ...whiteBoxShadow }
            >
                {
                    isLoadingUpdate && (
                        <Box
                            left="0"
                            top="0"
                            background="rgba(255, 255, 255, 0.5)"
                            height="full"
                            width="full"
                            zIndex="2"
                            position="absolute"
                        >
                            <ContentSpinner/>
                        </Box>
                    )
                }
                <Flex>
                    <Flex alignItems="center">
                        <Box mr={4}>
                            <Favicon h="48px" w="48px" host={ dest } https={ data.https }  />
                        </Box>
                        <InlineEditTitle
                            titleProps={{ fontSize: '20px', mb: '2px', lineHeight: '30px' }}
                            title={ title }
                            content={ description }
                            onUpdate={ ( { title, content } ) => {
                                setTitle( title );
                                setDescription( content );
                            } }
                        />
                    </Flex>
                    {
                        isDesktop && (
                            <>
                                <Spacer />
                                <ButtonGroup spacing={ 4 }>
                                    <Button
                                        onClick={ goBackToRedirect }
                                        size="lg"
                                    >
                                        {t('shared.cancel', 'Cancel')}
                                    </Button>
                                    <Button onClick={save} size="lg" colorScheme="primary">
                                        {t('shared.update', 'Update')}
                                    </Button>
                                </ButtonGroup>
                            </>
                        )
                    }
                </Flex>
                <Box mt="36px">
                    <Flex>
                        <Box minW="0" flexGrow={1}>
                            <Stack spacing={ isDesktop ? '40px' : '20px' }>

                                <Box>
                                    <RedirectsMethod
                                        flex
                                        value={ type }
                                        onChange={ setType }
                                    />
                                </Box>

                                <Flex alignItems="center">
                                    <FormLabel {...{
                                        flexBasis: '64px',
                                        minW: '64px',
                                        color: 'gray.500',
                                        mb: 0,
                                        mr: 0
                                    }}>
                                        {t('redirect.from', 'Redirect from')}
                                    </FormLabel>
                                    <Input
                                        onChange={event => setUrl(event.target.value)}
                                        value={url}
                                    />
                                </Flex>
                                {
                                    textType ? (
                                        <Flex alignItems="center">
                                            <FormLabel {...{
                                                flexBasis: '64px',
                                                minW: '64px',
                                                color: 'gray.500',
                                                mb: 0,
                                                mr: 0
                                            }}>
                                                HTML
                                            </FormLabel>
                                            <Textarea
                                                onChange={ event => setDestination( event.target.value ) }
                                                value={ destination }
                                            />
                                        </Flex>
                                    ) : (
                                        <InputRepeater
                                            setValues={ setDestinations }
                                            values={ destinations || [] }
                                            flex={ isDesktop }
                                            label={t('shared.destination', 'Destination')}
                                            buttonText={t('shared.add-destination', 'Add destination')}
                                        />
                                    )
                                }

                            </Stack>
                            <Box mt="32px" ml={ isDesktop ? '64px' : ''}>
                                <ForwardedOptions
                                    forwardPath={forwardPath}
                                    setForwardPath={setForwardPath}
                                    forwardQuery={forwardQuery}
                                    setForwardQuery={setForwardQuery}
                                />
                                <Stack mt={ 6 } spacing={4}>
                                    <UTMBuilder utm={ utm } onChange={ setUtm } />
                                    <RedirectsAdvancedSettings
                                        disableSwitchUnbroken={ isValidUrls( destinations )?.length < 2 }
                                        tags={ tags }
                                        setTags={ setTags }
                                        isNotify={ isNotify }
                                        setIsNotify={ setIsNotify }
                                        isSwitchUnbroken={ isSwitchUnbroken }
                                        setIsSwitchUnbroken={ setIsSwitchUnbroken }
                                        plugins={plugins}
                                        setPlugins={setPlugins}
                                    />
                                </Stack>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                {
                    ! isDesktop && (
                        <>
                            <ButtonGroup mt={8} spacing={ 4 }>
                                <Button onClick={goBackToRedirect} size="md">
                                    {t('shared.cancel', 'Cancel')}
                                </Button>
                                <Button onClick={save} size="md" colorScheme="primary">
                                    {t('shared.update', 'Update')}
                                </Button>
                            </ButtonGroup>
                        </>
                    )
                }
            </Box>
        </Box>
    );
}

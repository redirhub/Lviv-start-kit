import { useRouter } from 'next/router';
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spacer,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react';
import { forwardRef, memo, useEffect, useMemo, useState } from 'react';
import ReactSelect from 'react-select';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '@/store';
import FilterIcon from '@/icons/filter';
import { UI_STYLE_LIST, UI_STYLE_LIST_SM } from '@/config/constant';
import JustifyIcon from '@/icons/justify';
import SidebarIcon from '@/icons/sidebar';
import { noop } from '@/utils';
import { useGetTagsQuery } from '@/store/service/links';
import { useGetTagsQuery as useGetRedirectTagsQuery } from '@/store/service/redirects';
import { updateFilters } from '@/store/slices/options';
import RotateIcon from '@/icons/rotate';
import { Text16 } from '@/components/elements/Text16';
import useAppResponsive from '@/hooks/useAppResponsive';


export const TagsSelect=({ onChange, values, isRedirect }) => {

    const { data, isLoading, isFetching } = useGetTagsQuery(null, {
        skip: isRedirect
    });
    const { data: dataRedirects, isLoading: isLoadingRedirects, isFetching: isFetchingRedirects } = useGetRedirectTagsQuery(null, {
        skip: ! isRedirect
    });

    const loading = isRedirect ? ( isLoadingRedirects || isFetchingRedirects ) : (isLoading || isFetching);
    const [ value, _setValue ] = useState();
    const tags = (isRedirect ? dataRedirects?.data : data?.data) || [];
    const tagsOptions = tags?.flatMap( tag =>  tag.count ? ({ value: tag.slug, label: tag.name }) : [] );

    function setValue( values ) {
        _setValue( values );
        onChange( values );
    }

    useEffect(() => {
        const defaultValues = tagsOptions?.filter( tag => values.includes( tag.value ) );
        _setValue( defaultValues );
        onChange( defaultValues );
    }, [ data ]);

    return (
        <FormControl>
            <FormLabel>
                {t('shared.filter-tags', 'Tags')}
            </FormLabel>
            <ReactSelect
                value={ value }
                onChange={ setValue }
                placeholder={t('shared.filter-tags-placeholder', 'Select tags')}
                isMulti
                isLoading={ loading }
                options={ tagsOptions }
                styles={{
                    control: ( provided ) => ({
                        ...provided,
                        height: '44px',
                        fontSize: '16px',
                        borderRadius: '8px'
                    })
                }}
            />
        </FormControl>
    );

};

const CustomInput = forwardRef( function InputRef({ value, onClick, onChange }, ref) {
    return (
        <div>
            <Input onClick={ onClick } ref={ ref } size="md" value={ value } onChange={ onChange } />
        </div>
    );
});

function DateRangeFilter({ startDate, setStartDate, endDate, setEndDate }) {
    const { t } = useTranslation();

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <FormControl>
            <FormLabel>
                {t('shared.filter-date', 'Date filter')}
            </FormLabel>
            <DatePicker
                style={{ width: '100%' }}
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                excludeDates={[
                    dayjs(new Date()).add(1),
                    dayjs(new Date()).add(5)
                ]}
                selectsRange
                selectsDisabledDaysInRange
                customInput={ <CustomInput /> }
            />
        </FormControl>
    );
}

function useGetFilters({ isRedirect }) {
    const options = useAppSelector( state => state.options.filters );
    return isRedirect ? options.redirects : options.links;
}

function UrlFilter({ isRedirect }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ selectedTags, setTags ] = useState();
    const [ destination, setDestination ] = useState('');
    const [startDate, setStartDate] = useState( null );
    const [endDate, setEndDate] = useState(null);
    const dispatch = useAppDispatch();
    const filters = useGetFilters({ isRedirect });

    const hasFilters = useMemo(() => {
        return filters?.tags?.length || filters.start_date || filters.end_date || filters.destination;
    }, [filters]);

    useEffect(() => {
        const start_date = dayjs( filters.start_date || '' );
        const end_date = dayjs( filters.end_date || '' );
        setStartDate( start_date?.isValid() ? start_date?.$d : '' );
        setEndDate( end_date?.isValid() ? end_date?.$d : '' );
        setDestination( filters.destination );
    }, [ isOpen ]);

    function onApplyTags() {

        const start_date = dayjs( startDate );
        const end_date = dayjs( endDate );

        const query = {
            tags: selectedTags.map( t => t.value ),
            start_date: start_date?.isValid() ? start_date.format('YYYY-MM-DD') : '',
            end_date: end_date?.isValid() ? end_date.format('YYYY-MM-DD') : '',
            destination: destination
        };
        dispatch( updateFilters( {
            path: isRedirect ? 'redirects' : 'links',
            object: query
        } ) );
        onClose();
    }

    function clearFilters() {

        dispatch( updateFilters( {
            path: isRedirect ? 'redirects' : 'links',
            object: {
                tags: [],
                start_date: '',
                end_date: '',
                destination: ''
            }
        } ) );

        onClose();
    }


    return (
        <>
            <Button
                position="relative"
                onClick={ onOpen }
                rightIcon={ <FilterIcon size="20px" /> }
            >
                <Text>
                    {t('shared.filter', 'Filter')}
                </Text>
                {
                    hasFilters && (
                        <Box
                            as="span"
                            position={'absolute'}
                            top="-3px"
                            right="-3px"
                            bgColor="red"
                            borderRadius="50%"
                            zIndex={2}
                            p={'5px'}
                        />
                    )
                }
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width="460px" maxWidth="calc(100% - 40px)">
                    <ModalHeader>
                        {t('shared.filter', 'Filter')}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <TagsSelect isRedirect={ isRedirect } values={ filters.tags || [] } onChange={ setTags } />
                            <FormControl>
                                <FormLabel>
                                    {t('shared.filter-destination', 'Destination')}
                                </FormLabel>
                                <Input placeholder="https://example.com/" value={destination} onChange={e => setDestination(e.target.value)} />
                            </FormControl>

                            <DateRangeFilter
                                startDate={ startDate }
                                setStartDate={ setStartDate }
                                endDate={ endDate }
                                setEndDate={ setEndDate }
                            />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={ clearFilters } variant="outline" colorScheme="primary" leftIcon={ <RotateIcon size="16px" /> } mr="auto">
                            {t('shared.filter-reset', 'Reset')}
                        </Button>
                        <Button onClick={onClose} mr={3}>
                            {t('shared.filter-cancel', 'Cancel')}
                        </Button>
                        <Button onClick={onApplyTags} colorScheme="primary">
                            {t('shared.filter-apply', 'Apply')}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


function _ListFilterBar({ path, isRedirect, children, boxProps = {} }) {

    const router = useRouter();
    const style = useAppSelector( state => state.options.UIListStyle );
    const dispatch = useAppDispatch();
    const { isDesktop } = useAppResponsive();
    const _filters = useGetFilters({ isRedirect });
    const hasFilters = useMemo(() => {
        return _filters?.tags?.length || _filters.start_date || _filters.end_date || router.query.host || _filters.destination;
    }, [_filters]);

    const filters = useMemo( () => {
        const { tags, start_date, end_date, destination } = _filters;
        return {
            get domain() {
                return router.query.host ? (
                    <Flex>
                        <Text16>Domain: &nbsp;</Text16>
                        <Text16 fontWeight="400">{ router.query.host }</Text16>
                    </Flex>
                ) : null;
            },
            get tags() {
                return tags?.length ? (
                    <Flex>
                        <Text16>Tags: &nbsp;</Text16>
                        <Text16 fontWeight="400">{tags.join(', ')}</Text16>
                    </Flex>
                ) : null;
            },
            get start_date() {
                return start_date ? (
                    <Flex>
                        <Text16>From date: &nbsp;</Text16>
                        <Text16 fontWeight="400">{ start_date }</Text16>
                    </Flex>
                ) : null;
            },
            get end_date() {
                return end_date ? (
                    <Flex>
                        <Text16>To date: &nbsp;</Text16>
                        <Text16 fontWeight="400">{ end_date }</Text16>
                    </Flex>
                ) : null;
            },
            get destination() {
                return destination ? (
                    <Flex>
                        <Text16>Destination: &nbsp;</Text16>
                        <Text16 fontWeight="400">{ destination }</Text16>
                    </Flex>
                ) : null;
            },
        };
    }, [ _filters, router.query.host ] );

    function updateStyle() {
        router.replace( path ).then( noop );
    }

    function clearHost() {
        const q = JSON.parse(JSON.stringify( router.query ));
        delete q.host;
        router.push({
            path: router.pathname,
            query: q
        });
    }

    function clearFilters() {
        dispatch( updateFilters( {
            path: isRedirect ? 'redirects' : 'links',
            object: {
                tags: [],
                start_date: '',
                end_date: '',
                destination: ''
            }
        } ) );
    }


    return (
        <>
            <Flex zIndex="2" {...boxProps}>
                { children }
                <UrlFilter isRedirect={ isRedirect } />
                <Spacer />

                {
                    isDesktop && (
                        <Flex  alignItems="center">
                            <Text mr={4} fontWeight="500" lineHeight="24px" fontSize="16px" color="gray.700">
                                {t('shared.appearance', 'Appearance')}
                            </Text>
                            <ButtonGroup spacing={0}>
                                <IconButton
                                    isActive={ style === UI_STYLE_LIST }
                                    onClick={ updateStyle }
                                    colorScheme="primary"
                                    variant="outline"
                                    px={ 3 }
                                    borderRightRadius={0}
                                    icon={ <JustifyIcon size="20px" /> }
                                    aria-label="Default Style"
                                />
                                <IconButton
                                    isActive={ style === UI_STYLE_LIST_SM }
                                    onClick={ updateStyle }
                                    colorScheme="primary"
                                    variant="outline"
                                    px={ 3 }
                                    borderLeftRadius={0}
                                    borderLeftWidth={0}
                                    icon={ <SidebarIcon size="20px" /> }
                                    aria-label="Compat Style"
                                />
                            </ButtonGroup>
                        </Flex>
                    )
                }
            </Flex>
            {
                hasFilters && (
                    <Stack flexWrap={ isDesktop ? 'nowrap' : 'wrap' } alignItems="center" mt={4} direction="row" spacing={3}>
                        {
                            isDesktop && (
                                <Button
                                    size="sm"
                                    onClick={ () => {
                                        clearFilters();
                                        clearHost();
                                    } }
                                    variant="outline" colorScheme="primary" leftIcon={ <RotateIcon size="16px" /> }>
                                    {t('shared.filter-reset', 'Reset')}
                                </Button>
                            )
                        }
                        {
                            Object.keys( filters ).map( key => (
                                filters[key] ? (
                                    <Box key={ key }>
                                        { filters[key] }
                                    </Box>
                                ) : null
                            ) )
                        }
                    </Stack>
                )
            }
        </>
    );
}

export const ListFilterBar = memo( _ListFilterBar );

import { useRouter } from 'next/router';
import { Button, ButtonGroup, Flex, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/store';
import { checkAllToggle, uncheckAll } from '@/store/slices/options';
import CheckIcon from '@/icons/check';
import ArrowUpRightIcon from '@/icons/arrow-up-right';
import { AppAlertDialog } from '@/components/shared/AlertDialog';
import { useBulkDeleteRedirectMutation, useBulkExportMutation } from '@/store/service/redirects';
import { useBulkDeleteLinksMutation } from '@/store/service/links';
import useAppResponsive from '@/hooks/useAppResponsive';
import { paginationReset } from '@/store/slices/redirects';
import { paginationReset as paginationResetLink } from '@/store/slices/links';
import { noop } from '@/utils';
import DownloadIcon from '@/icons/download';
import { DestinationModal } from '@/components/redirects/DestinationModal';
import { MonitoringModal } from '@/components/redirects/MonitoringModal';
import { TagsModal } from '@/components/redirects/TagsModal';

export function ListSelectActions({ total, optionPath, settings, list, boxProps = {}, onDeleteCb = noop }) {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const checkAll = settings.checked_all;
    const checked = settings.checked;

    const checkedFiles= useMemo(()=> {
        if(checkAll) {
            return list.map((item)=> item.file);
        }
        if(checked?.length >0) {
            return list.filter((item)=> checked.includes(item.id))?.map((filteredItem)=> filteredItem.file);
        }
    }, [list, checked, checkAll]);

    const { onOpen, onClose, isOpen } = useDisclosure();
    const [bulkDelete, { isLoading }] = useBulkDeleteRedirectMutation();
    const [bulkExport, { isLoading: exporting }] = useBulkExportMutation();
    const [bulkDeleteLinks, { isLoading: isLoadingLinks }] = useBulkDeleteLinksMutation();
    const loading = isLoading || isLoadingLinks;
    const { isMobile } = useAppResponsive();

    const destination = useDisclosure();
    const monitoring = useDisclosure();
    const tags = useDisclosure();

    const isHidden = !checked?.length && !checkAll;
    const countTotal = checkAll ? total : checked.length;

    const redirectFilters = useAppSelector( state => state.options.filters.redirects );
    const linkFilters = useAppSelector( state => state.options.filters.links );

    const filters= useMemo(()=> {
        return (optionPath === 'links' ? linkFilters : redirectFilters);
    }, [redirectFilters, linkFilters, optionPath]);

    const obj = {
        tags: filters.tags,
        created_before: filters.end_date,
        created_after: filters.start_date,
        destination: filters.destination
    };

    async function onDelete() {

        if (loading) return;

        const fnc = optionPath === 'links' ? bulkDeleteLinks : bulkDelete;
        const ftr = {
            filter: {
                id: checkAll ? null : checked,
                handler: optionPath === 'links' ? 'short-url' : 'redirect',
                ...obj
            }
        };

        const reset = optionPath === 'links' ? paginationResetLink : paginationReset;

        await fnc(ftr).then(() => {
            dispatch(uncheckAll({ path: optionPath }));
            dispatch(reset());
            onDeleteCb();
        });

        onClose();
    }

    const onExport = () => {
        try {
            const ftr = {
                filter: {
                    id: checkAll ? null : checked,
                    handler: optionPath === 'links' ? 'short-url' : 'redirect',
                    ...obj
                }
            };
            bulkExport(ftr).then(({ data }) => {
                // Create a Blob object from the data
                const blob = new Blob([data], { type: 'application/octet-stream' });

                // Create a link element and trigger a download
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'exportedRecords.csv'; // Set the desired file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        } catch (error) {
            console.error('Error exporting data:', error);
        }
    };

    const moveToStatistic= ()=> {
        router.push(`/statistics?files=${checkedFiles}`);
        dispatch(uncheckAll({ path: optionPath }));
    };

    return (
        <>
            <Flex flexWrap="wrap" mb={6} alignItems="center" {...boxProps} display={isHidden ? 'none' : 'flex'}>
                <Text color="gray.700" fontSize={isMobile ? '14px' : '16px'} fontWeight="500">
                    <Trans i18nKey={'shared.selected-' + optionPath} t={t}>
                        <Text as="strong" fontWeight="700">{{ n: countTotal }}</Text> {optionPath} selected
                    </Trans>
                </Text>
                <Button
                    onClick={() => dispatch(checkAllToggle({ path: optionPath }))}
                    ml="2px"
                    fontWeight="600"
                    fontSize={isMobile ? '13px' : '16px'}
                    color="primary.700"
                    leftIcon={<CheckIcon size={isMobile ? '15px' : '20px'} />}
                    size="sm"
                    variant="ghost"
                >
                    {
                        checkAll ?
                            t('shared.unselect-all', 'Unselect all') :
                            t('shared.select-all-' + optionPath, 'Select all {{n}} ' + optionPath, { n: total })
                    }
                </Button>
                <Spacer />
                <ButtonGroup spacing={4} size="sm">
                    {
                        !isMobile && (
                            <>
                                <Button colorScheme="warning" rightIcon={<DownloadIcon size="20px" />} onClick={onExport}>
                                    {exporting ? t('shared.exporting', 'Exporting...') : t('shared.export', 'Export')}
                                </Button>
                                <Button
                                    onClick={()=> moveToStatistic()}
                                    rightIcon={<ArrowUpRightIcon size="20px" />}>
                                    {t('shared.statistics', 'Statistics')}
                                </Button>
                                <Button onClick={() => destination.onOpen()}>
                                    {t('shared.destination', 'Destination')}
                                </Button>
                                <Button onClick={() => monitoring.onOpen()}>
                                    {t('shared.monitoring', 'Monitoring')}
                                </Button>
                                <Button onClick={() => tags.onOpen()}>
                                    {t('shared.tags', 'Tags')}
                                </Button>
                            </>
                        )
                    }
                    <Button onClick={onOpen} colorScheme="error">
                        {t('shared.delete', 'Delete')}
                    </Button>
                </ButtonGroup>
                <AppAlertDialog
                    {...{
                        title: t('shared.are-you-sure', 'Are you sure?'),
                        content: t('shared.are-you-sure-content', 'Your visitors can\'t access these url more once you deleted these records?\n'),
                        onOpen,
                        isOpen,
                        onClose,
                        onConfirm: onDelete,
                        confirmText: loading ? t('shared.deleting', 'Deleting...') : t('shared.delete', 'Delete'),
                    }}
                />
            </Flex>
            <DestinationModal disclosure={destination} checked={checked} checkedAll={checkAll} optionPath={optionPath} obj={obj}/>
            <MonitoringModal disclosure={monitoring} checked={checked} checkedAll={checkAll} optionPath={optionPath} obj={obj}/>
            <TagsModal disclosure={tags} checked={checked} checkedAll={checkAll} optionPath={optionPath} obj={obj}/>
        </>
    );
}

import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useClipboard, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { DNSUrl, ensureHttp, noop } from '@/utils';
import MonitorIcon from '@/icons/monitor';
import Settings2Icon from '@/icons/Settings2';
import Settings3Icon from '@/icons/Settings3';
import SwitchIcon from '@/icons/Switch';
import TrashIcon from '@/icons/Trash';
import { AppAlertDialog } from '@/components/shared/AlertDialog';
import { useBulkDeleteRedirectMutation, useUpdateRedirectMutation } from '@/store/service/redirects';
import EditIcon from '@/icons/edit';
import useAppResponsive from '@/hooks/useAppResponsive';
import { useAppDispatch, useAppSelector } from '@/store';
import { LINK_CHECK_URL, REDIRECT_CHECK_URL, UI_STYLE_LIST } from '@/config/constant';
import useAppToast from '@/hooks/useAppToast';
import CopyIcon from '@/icons/copy';
import { paginationReset } from '@/store/slices/redirects';
import { updateIds } from '@/store/slices/options';
import { useBulkDeleteLinksMutation } from '@/store/service/links';

export default function useRecordMenu({ data: { id = '', url, https, status, host }, path = 'redirects' }) {

    const { t } = useTranslation();
    const router = useRouter();
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [bulkDelete, { isLoading: loading1 }] = useBulkDeleteRedirectMutation();
    const [bulkDeleteLinks, { isLoading: loading2 }] = useBulkDeleteLinksMutation();
    const loading = loading1 || loading2;
    const style = useAppSelector(state => state.options.UIListStyle);
    const { onCopy, setValue, hasCopied } = useClipboard();
    const { isMobile } = useAppResponsive();
    const { deleteRecord, copied } = useAppToast();
    const isViewPath = !!router.query.view;
    const dispatch = useAppDispatch();
    const [updateRedirect] = useUpdateRedirectMutation();

    useEffect(() => {
        setValue(ensureHttp(url, https));
    }, [url]);


    useEffect(() => {
        if (hasCopied) copied();
    }, [hasCopied]);

    const items = useMemo(() => {

        const viewPath = style === UI_STYLE_LIST ? '/' + path + '?view=' + id : '/' + path + '/c?view=' + id;
        const editPath = '/' + path + '?edit=' + id;


        return [
            ...(
                isViewPath ? [] : [
                    {
                        action: () => {
                            router.push(viewPath).then(noop);
                        },
                        Icon: MonitorIcon,
                        text: t('shared.view', 'View')
                    }
                ]
            ),

            ...(
                isMobile ? [
                    {
                        action: () => {
                            router.push(editPath).then(noop);
                        },
                        Icon: EditIcon,
                        text: t('shared.edit', 'Edit')
                    },
                    {
                        action: onCopy,
                        Icon: CopyIcon,
                        text: t('shared.copy', 'Copy')
                    },
                ] : []
            ),
            {
                linkProps: {
                    href: DNSUrl(host)
                },
                Icon: Settings2Icon,
                text: t('shared.dns-settings', 'DNS Settings')
            },
            {
                linkProps: {
                    rel: 'noopener noreferrer',
                    target: '_blank',
                    href: (path === 'redirects' ? REDIRECT_CHECK_URL : LINK_CHECK_URL) + ensureHttp(url, https)
                },
                Icon: Settings3Icon,
                text: t('shared.tester', 'Run on Tester')
            },
            ...(status === 'paused' ? [
                {
                    action: () => {
                        updateRedirect({ id, status: 'active' });
                    },
                    Icon: SwitchIcon,
                    text: t('shared.resume', 'Resume')
                }
            ] : []),
            ...(status === 'active' ? [
                {
                    action: () => {
                        updateRedirect({ id, status: 'paused' });
                    },
                    Icon: SwitchIcon,
                    text: t('shared.pause', 'Pause')
                }
            ] : []),
            {
                divider: true,
                action: onOpen,
                Icon: TrashIcon,
                text: t('shared.delete', 'Delete')
            }
        ];
    }, [isMobile, style, isViewPath, status]);


    async function onDelete() {
        if (loading) return;
        const fn = path === 'redirects' ? bulkDelete : bulkDeleteLinks;
        fn({ filter: { id: [id] } }).then((response) => {
            dispatch(updateIds({ path: 'redirects', ids: [] }));
            dispatch(paginationReset());
            deleteRecord(response);
            onClose();
        });
    }

    return {
        items,
        children: (
            <AppAlertDialog
                {...{
                    title: t('shared.are-you-sure', 'Are you sure?'),
                    content: t('shared.delete-record', 'Your visitors can\'t access this url more once you deleted the record?\n'),
                    onOpen,
                    isOpen,
                    onClose,
                    onConfirm: onDelete,
                    confirmText: loading ? t('shared.deleting', 'Deleting...') : t('shared.delete', 'Delete'),
                }}
            />
        )
    };
}

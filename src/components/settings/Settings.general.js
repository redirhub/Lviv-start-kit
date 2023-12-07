import useGetWorkspaceByIdApi from '@/hooks/useGetWorkspaceByIdApi';
import { ContentSpinner } from '@/components/ContentSpinner';
import Name from '@/components/settings/general/Name';
import Id from '@/components/settings/general/Id';
import SummaryAnalytics from '@/components/settings/general/SummaryAnalytics';
import { WORKSPACE_SUMMARY } from '@/config/constant';

export function SettingsGeneral() {
    const { isLoading, isFetching } = useGetWorkspaceByIdApi();
    const loading = isLoading || isFetching;

    return (loading ? (<ContentSpinner />) : (
        <>
            <Name />
            <Id />
            {WORKSPACE_SUMMARY && <SummaryAnalytics />}
        </>
    ));
}

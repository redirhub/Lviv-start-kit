import { resetWorkspacesList } from '@/store/slices/workspaces';
import { workspacesApi } from '@/store/service/workspaces';

export function clearWorkspacesApiCache() {
    return async (dispatch) => {
        try {
            dispatch(workspacesApi.util.resetApiState());
            dispatch(resetWorkspacesList());
        } catch (error) {
            console.error('Workspaces API cache clear Error', error);
        }
    };
}

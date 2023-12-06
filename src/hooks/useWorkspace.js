import { useSelector } from 'react-redux';

const useWorkspace = () => {
    return useSelector(state => state.workspaces.selectedWorkspace || {});
};

export default useWorkspace;

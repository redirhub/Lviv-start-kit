import { createSlice } from '@reduxjs/toolkit';

const workspacesSlice = createSlice({
    name: 'workspaces',
    initialState: {
        workspacesList: [],
        currentWorkspace: {},
        workspaceName: '',
    },
    reducers: {
        setWorkspacesList(state, { payload }) {
            state.workspacesList = payload;
        },
        setCurrentWorkspace(state, { payload }) {
            state.currentWorkspace = payload;
        },
        resetWorkspacesList(state) {
            state.workspacesList = [];
        },
        setWorkspaceName(state, { payload }) {
            state.workspaceName = payload;
        }
    }
});


export const {
    setWorkspacesList,
    setCurrentWorkspace,
    resetWorkspacesList,
    setWorkspaceName
} = workspacesSlice.actions;
export default workspacesSlice.reducer;

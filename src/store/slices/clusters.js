import { createSlice } from '@reduxjs/toolkit';

const clustersSlice = createSlice({
    name: 'clusters',
    initialState: {
        clusters: {},
        options: {
            cached: {},
            cluster: {},
        },
    },
    reducers: {
        paginationReset(state) {
            state.options.cached = {};
            state.options.cluster = {};
            state.clusters = {};
            return state;
        },
        setClusters(state, { payload }) {
            state.clusters = payload;
        },
        updateCache(state, { payload: { key, value } }) {
            state.options.cached = Object.assign(state.options.cached, { [key]: value });
        },
        updateClustersOptions(state, { payload: { key, value } }) {
            if (typeof state.options[key] === 'undefined') {
                console.warn('Invalid option key!');
                return;
            }
            state.options[key] = value;
        },
    },
});

export const {
    paginationReset,
    setClusters,
    updateCache,
    updateClustersOptions,
} = clustersSlice.actions;

export default clustersSlice.reducer;

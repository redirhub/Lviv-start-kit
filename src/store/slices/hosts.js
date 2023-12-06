import { createSlice } from '@reduxjs/toolkit';

import { INITIALIZE_FILTERS } from '@/config/hostnames';
import { extractQueryString } from '@/utils';

const hostsSlice = createSlice({
    name: 'hosts',
    initialState: {
        options: {
            cached: {},
            cursor: '',
            filters: INITIALIZE_FILTERS,
            pagination: {},
            hostByName: {},
        },
    },
    reducers: {
        goNext(state) {
            if (state.options.pagination.next) {
                state.options.cursor = extractQueryString(state.options.pagination.next, 'cursor');
            }
            return state;
        },
        goPrev(state) {
            if (state.options.pagination.prev) {
                state.options.cursor = extractQueryString(state.options.pagination.prev, 'cursor');
            }
            return state;
        },
        paginationReset(state) {
            state.options.cached = {};
            state.options.cursor = '';
            state.options.pagination = {};
            return state;
        },
        updateCache(state, { payload: { key, value } }) {
            state.options.cached = Object.assign(state.options.cached, { [key]: value });
        },
        updateHostsOptions(state, { payload: { key, value } }) {
            if (typeof state.options[key] === 'undefined') {
                console.warn('Invalid option key!');
                return;
            }
            state.options[key] = value;
        },
        updateHostNewData(state, { payload }) {
            state.newDataObject = { ...state.newDataObject, ...payload };
        },
    },
});

export const {
    goNext,
    goPrev,
    paginationReset,
    updateCache,
    updateHostsOptions,
    updateHostNewData,
} = hostsSlice.actions;

export default hostsSlice.reducer;

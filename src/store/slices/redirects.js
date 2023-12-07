import { createSlice } from '@reduxjs/toolkit';
import { uniqBy } from 'lodash';
import { extractQueryString } from '@/utils';

const redirectsSlice = createSlice({
    name: 'redirects',
    initialState: {
        listClicks: [],
        newDataObject: {
            type: '301',
            tags: [],
            plugins: [],
            utm: {
                source: '',
                medium: '',
                campaign: '',
                term: '',
                content: ''
            }
        },
        options: {
            cached: {},
            importPreviews: [],
            importTotal: 0,
            fileObject: null,
            pagination: {},
            cursor: ''
        }
    },
    reducers: {
        goNext( state ) {
            if ( state.options.pagination.next ) {
                state.options.cursor = extractQueryString( state.options.pagination.next, 'cursor' );
            }
            return state;
        },
        updateCache( state, { payload: { key, value } } ){
            state.options.cached = Object.assign( state.options.cached, { [key]: value } );
        },
        paginationReset( state ) {
            state.options.cursor = '';
            state.options.pagination = {};
            state.options.cached = {};
            return state;
        },
        goPrev( state ) {
            if ( state.options.pagination.prev ) {
                state.options.cursor = extractQueryString( state.options.pagination.prev, 'cursor' );
            }
            return state;
        },
        updateRedirectsOptions( state, { payload: { key, value } } ) {
            if ( typeof state.options[key] === 'undefined') {
                console.warn('Invalid option key!');
                return;
            }
            state.options[key] = value;
        },
        updateRedirectNewData( state, { payload }) {
            state.newDataObject = Object.assign({}, state.newDataObject, payload );
        },
        updateListClicks( state, { payload }) {
            const newBuckets = payload?.data?.buckets;
            if (newBuckets?.length) {
                state.listClicks = uniqBy([...state?.listClicks, ...newBuckets ], 'key');
            }
        }
    }
});


export const {
    goPrev,
    goNext,
    updateListClicks,
    updateRedirectsOptions,
    updateRedirectNewData,
    paginationReset,
    updateCache,
} = redirectsSlice.actions;
export default redirectsSlice.reducer;

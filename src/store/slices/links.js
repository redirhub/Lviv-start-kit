import { createSlice } from '@reduxjs/toolkit';
import { extractQueryString } from '@/utils';

const linksSlice = createSlice({
    name: 'links',
    initialState: {
        options: {
            cached: {},
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
        updateLinksOptions( state, { payload: { key, value } } ) {
            if ( typeof state.options[key] === 'undefined') {
                console.warn('Invalid option key!');
                return;
            }
            state.options[key] = value;
        },
    }
});


export const {
    goNext,
    paginationReset,
    updateCache,
    updateLinksOptions
} = linksSlice.actions;
export default linksSlice.reducer;

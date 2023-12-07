import { createSlice } from '@reduxjs/toolkit';
import { UI_STYLE_LIST } from '@/config/constant';

const optionsSlice = createSlice({
    name: 'options',
    initialState: {
        
        // general
        sidebar: false,
        UIListStyle: UI_STYLE_LIST,
        
        // redirects
        redirects: {
            checked_all: false,
            checked: [],
            ids: [],
        },
        
        // links
        links: {
            checked_all: false,
            checked: [],
            ids: [],
        },
        
        filters: {
            links: {
                tags: [],
                start_date: '',
                end_date: '',
                destination: ''
            },
            redirects: {
                tags: [],
                start_date: '',
                end_date: '',
                destination: ''
            }
        },
        
        // domains
        domains: [],
    },
    reducers: {
        setDomains( state, { payload }) {
            state.domains = payload;
        },
        updateFilters( state, {  payload: { path, object = {} } } ) {
            state['filters'][path] = {
                ...state['filters'][path],
                ...object
            };
        },
        updateOption( state, { payload: { key, value } } ) {
            if ( typeof state[key] === 'undefined') {
                console.log( key, value );
                console.warn('Invalid option key!');
                return;
            }
            state[key] = value;
        },
        updateIds( state, { payload: { path, ids } } ){
            state[path].ids = ids;
            return state;
        },
        uncheckAll( state, { payload: { path } } ) {
            state[path].checked_all = false;
            state[path].checked = [];
            return state;
        },
        checkAllToggle( state, { payload: { path } } ) {
            state[path].checked_all = ! state[path].checked_all;
            state[path].checked = [];
            return state;
        },
        checkToggle( state, { payload: { path, value } } ) {
            const ids = [...state[path].checked];
            const index = ids.findIndex( i => i === value );
            
            if ( index === -1 ) {
                ids.push( value );
            } else {
                ids.splice( index, 1 );
            }
            
            state[path].checked_all = false;
            state[path].checked = ids;
            return state;
        },
    }
});


export const {
    updateFilters,
    setDomains,
    updateIds,
    updateOption,
    checkAllToggle,
    checkToggle,
    uncheckAll
} = optionsSlice.actions;
export default optionsSlice.reducer;

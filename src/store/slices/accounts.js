import { createSlice } from '@reduxjs/toolkit';

const accountsSlice = createSlice({
    name: 'workspaces',
    initialState: {
        currentAccount: {},
        platforms: {},
        countries: {},
        connections: [],
        tokens: [],
        isPasswordConfirmed: false,
    },
    reducers: {
        setCurrentAccount( state, { payload } ) {
            state.currentAccount = payload;
        },
        setPlatforms( state, { payload } ) {
            state.platforms = payload;
        },
        setCountries ( state, { payload } ) {
            state.countries = payload;
        },
        setConnections ( state, { payload } ) {
            state.connections = payload;
        },
        setTokens ( state, { payload } ) {
            state.tokens = payload;
        },
        setIsPasswordConfirmed ( state, { payload } ) {
            state.isPasswordConfirmed = payload;
        },
        resetCurrentAccount ( state ) {
            state.currentAccount = {};
        },
    }
});


export const {
    setCurrentAccount,
    setPlatforms,
    setCountries,
    setConnections,
    setTokens,
    setIsPasswordConfirmed,
    resetCurrentAccount
} = accountsSlice.actions;
export default accountsSlice.reducer;

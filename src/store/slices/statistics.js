import { createSlice } from '@reduxjs/toolkit';

const statisticsSlice = createSlice({
    name: 'redirects',
    initialState: {
        currentRange:'today',
        currentHomeRange: 'today',
    },
    reducers: {
        updateCurrentRange( state, { payload } ){
            state.currentRange = payload.range;
        },
        updateCurrentHomeRange( state, { payload } ){
            state.currentHomeRange = payload.range;
        },

    }
});

export const {
    updateCurrentHomeRange,
    updateCurrentRange
} = statisticsSlice.actions;
export default statisticsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
    name: 'error',
    initialState: { message: null },
    reducers: {
        addError: (state, { payload }) => {
            state.message = payload;
        },
        clearErrors: (state) => {
            state.message = null;
        },
    },
});

export const { addError, clearErrors } = errorSlice.actions;

export default errorSlice.reducer;

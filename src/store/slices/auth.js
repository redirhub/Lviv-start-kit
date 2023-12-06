import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginUser: {},
    },
    reducers: {
        setLoginUser(state, { payload }) {
            state.loginUser = payload;
        },
    },
});

export const { setLoginUser } = authSlice.actions;
export default authSlice.reducer;

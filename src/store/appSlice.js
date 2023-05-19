import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: localStorage.getItem('access_Token') ? true : false,
    account: undefined,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
});

export const {} = appSlice.actions;
export default appSlice.reducer;

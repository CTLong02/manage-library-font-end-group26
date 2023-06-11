import { createSlice } from '@reduxjs/toolkit';
import { updateAccessToken } from '~/api/AxiosClient';

const initialState = {
    isLogin: localStorage.getItem('access_Token') ? true : false,
    account: undefined,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isLogin = true;
            updateAccessToken(action.payload);
            localStorage.setItem('access_token', action.payload);
        },
        signOut: (state) => {
            state.isLogin = false;
            localStorage.removeItem('access_token');
        },
    },
});

export const { signIn } = appSlice.actions;
export default appSlice.reducer;

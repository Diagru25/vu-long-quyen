import { createSlice } from 'adapters/redux-toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: { isShowSideBar: true },
    reducers: {
        toggleSideBar: (state) => {
            state.isShowSideBar = !state.isShowSideBar
        }
    },
});

export const { toggleSideBar } = menuSlice.actions;
export default menuSlice.reducer;

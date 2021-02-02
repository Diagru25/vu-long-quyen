import { createSlice } from 'adapters/redux-toolkit';


const authReducer = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setLoggedIn, setUser } = authReducer.actions;

export default authReducer.reducer;
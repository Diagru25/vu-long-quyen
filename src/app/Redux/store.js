import { menuReducer } from './Menu';
import { studentReducer } from './Student';
import { authReducer } from './Auth';

import { configureStore } from 'adapters/redux-toolkit';

const store = configureStore({
    reducer: {
        authReducer,
        menuReducer,
        studentReducer
    },
});

export default store;

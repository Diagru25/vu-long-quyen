import { menuReducer } from './Menu';
import { studentReducer } from './Student';

import { configureStore } from 'adapters/redux-toolkit';

const store = configureStore({
    reducer: {
        menuReducer,
        studentReducer
    },
});

export default store;

import { menuReducer } from './Menu';
import { studentReducer } from './Student';
import { authReducer } from './Auth';
import { statisticReducer } from './Statistic';

import { configureStore } from 'adapters/redux-toolkit';

const store = configureStore({
    reducer: {
        authReducer,
        menuReducer,
        studentReducer,
        statisticReducer
    },
});

export default store;

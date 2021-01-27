import { menuReducer } from './Menu';

import { configureStore } from 'adapters/redux-toolkit';

const store = configureStore({
    reducer: {
        menuReducer,
    },
});

export default store;

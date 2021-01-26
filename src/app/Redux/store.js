import menuReducer from 'src/Redux/Menu/MenuSlice';

import { configureStore } from 'adapters/redux-toolkit';

const store = configureStore({
  reducer: {
    menuReducer,
  },
});

export default store;

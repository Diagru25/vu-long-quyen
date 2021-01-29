import React from 'react';
import { Provider } from 'react-redux';

import store from 'src/Redux/store';

import StudentsManagement from 'src/StudentsManagement/StudentsManagement';

const App = () => {
    return (
        <Provider store={store}>
            <StudentsManagement />
        </Provider>
    );
};
export default App;

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

import store from 'src/Redux/store';

import StudentsManagement from 'src/StudentsManagement/StudentsManagement';
import Login from 'src/Authentication/Login';
import PrivateRoute from 'src/Authentication/requireLogin';
import Authentication from 'src/Authentication/Authentication';

const MainApp = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path='/' component={StudentsManagement} />
                <Route exact path='/login' component={Login} />
            </Switch>
        </Router>

    );

}

const App = () => {

    return (
        <Provider store={store}>
            <Authentication>
                <StudentsManagement />
            </Authentication>
        </Provider>
    );
};
export default App;

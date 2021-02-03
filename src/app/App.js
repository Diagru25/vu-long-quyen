import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { useEffect } from 'react';

import StudentsManagement from 'src/StudentsManagement/StudentsManagement';
import Dashboard from 'src/Dashboard/Dashboard';
import Login from 'src/Authentication/Login';
import firebase from 'helper/firebaseConfig';

import { setLoggedIn } from 'src/Redux/Auth';

const App = () => {
    return (
        <Switch>
            <Route exact path='/list' component={StudentsManagement} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Redirect exact from='/' to='/list' />
        </Switch>
    );
};


const MainApp = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.authReducer);

    useEffect(() => {
        firebase.auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.email);
                dispatch(setLoggedIn(true))
            }
            else {
                dispatch(setLoggedIn(false))
            }
        });
    }, [])

    if (isLoggedIn === false) {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={() => <div>Register</div>} />
                <Redirect from='/' to='/login' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route component={App} />
        </Switch>);
}

export default withRouter(MainApp);

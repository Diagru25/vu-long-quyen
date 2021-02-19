import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import { setLoggedIn } from 'src/Redux/Auth';

import firebase from 'helper/firebaseConfig';
import routes from 'shared/Routes/routes';

import Login from 'src/Authentication/Login';
import Loading from 'src/Loading/Loading';

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
                <Redirect exact from='/' to='/dashboard' />
            </Switch>
        </Suspense>
    );
};

const MainApp = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.authReducer);

    useEffect(() => {
        firebase.auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.email);
                dispatch(setLoggedIn(true));
            } else {
                dispatch(setLoggedIn(false));
            }
        });
        // note dependence dispatch
    }, [dispatch]);

    if (isLoggedIn === false) {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={() => <div>Register</div>} />
                <Redirect from='/' to='/login' />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route component={App} />
        </Switch>
    );
};

export default withRouter(MainApp);

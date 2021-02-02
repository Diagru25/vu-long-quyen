import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const RequireLogin = ({ component: Component, ...rest }) => {

    const { isLoggedIn } = useSelector(state => state.authReducer);

    return (
        <Route
            {...rest}
            render={routeProps =>
                !!isLoggedIn ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect to='/login' />
                    )}
        />
    )
}

export default RequireLogin;
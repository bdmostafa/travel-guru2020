import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    // Get loggedInUser data name or email to approve to enter PrivateRoute
    const { loggedUser } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;

    // Executes children components when loggedInUser email or name (some FB account have only name) is found
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email || loggedInUser.name ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;
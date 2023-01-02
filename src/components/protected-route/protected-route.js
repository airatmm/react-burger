import { Redirect, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const isLoggedState = (store) => store.user.isLogged;

export function ProtectedRoute({ children, isAuth = true, redirectPath = '/login', ...rest }) {
    const isLogged = useSelector(isLoggedState);

    return (
        <Route
            { ...rest }
            render={ ({ location }) =>
                isLogged === isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={ {
                            pathname: redirectPath,
                            state: { from: location }
                        } }
                    />
                )
            }
        />
    );
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

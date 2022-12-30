import { Redirect, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export function ProtectedRoute({ children, ...rest }) {
    const { isLogged } = useSelector(store => store.user);

    return (
        <Route
            { ...rest }
            render={ ({ location }) =>
                isLogged ? (
                    children
                ) : (
                    <Redirect
                        to={ {
                            pathname: '/login',
                            state: { from: location }
                        } }
                    />
                )
            }
        />
    );
}

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

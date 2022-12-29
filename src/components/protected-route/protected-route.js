import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../services/slices/get-user-data-slice";

export function ProtectedRoute({ children, ...rest }) {
    const dispatch = useDispatch();
    const { isLogged } = useSelector(store => store.user);
    console.log('ProtectedRoute isLogged', isLogged)
    // useEffect(() => {
    //     if (!isLogged && localStorage.getItem('refreshToken')) {
    //         dispatch(getUserData());
    //     }
    // }, [isLogged, dispatch]);

//    useEffect(() => {
//         if (refreshToken) {
//             dispatch(updateToken());
//         }
//     }, [dispatch, refreshToken]);

    const [isUserLoaded, setUserLoaded] = useState(false);

    const init = async () => {
        await dispatch(getUserData());
        setUserLoaded(true);
    };

    useEffect(() => {
        init();
    }, []);

    if (!isUserLoaded) {
        return null;
    }

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

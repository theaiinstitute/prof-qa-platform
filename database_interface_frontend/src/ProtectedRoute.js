import React from 'react';
import { Route, Redirect } from 'react-router-dom';



export const ProtectedRoute = ({ component: Component, credentials, refreshToken, logout, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (credentials.isAuthenticated){
                    return (<Component {...props} refreshToken={refreshToken} logout={logout} credentials={credentials}> </Component>);}
                else{
                    return(<Redirect to={{ pathname: "/login", state:{from:props.location}}}></Redirect>)
                }
            }
        } />

    );
}



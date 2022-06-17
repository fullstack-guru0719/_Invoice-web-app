import React, { useState, useCallback, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation, withRouter } from 'react-router-dom';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
// We will create these two pages in a moment
//Authendication
import LoginPage from './loginpage'
import RegistrationPage from './RegistrationPage'
import ForgotPassword from './forgotpassword'
import OTP from './otp'
import LockScreen from './lockscreen'

import ApplyJobs from './ApplyJob';

//Main App
import DefaultLayout from './Sidebar/DefaultLayout';
import Settinglayout from './Sidebar/Settinglayout';
import Tasklayout from './Sidebar/tasklayout';
import Emaillayout from './Sidebar/emaillayout';
import chatlayout from './Sidebar/chatlayout';

import uicomponents from '../MainPage/UIinterface/components';
//Error Page
import Error404 from '../MainPage/Pages/ErrorPage/error404';
import Error500 from '../MainPage/Pages/ErrorPage/error500';


// import 'Assets/css/font-awesome.min.css';

import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// import UserPage from './pages/UserPage'
/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */

import { userActions } from '../store/actions';

const InitialPath = ({ component: Component, authUser, ...rest }) =>
    (<Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />}
    />)

const App = (props) => {
    const location = useLocation();
    const user = useSelector(state => state.user, shallowEqual)
    const alert = useSelector(state => state.alert, shallowEqual)


    useEffect(
        () => {
            console.log('component did mount')
            if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
                || location.pathname.includes("otp") || location.pathname.includes("lockscreen")) {
                $('body').addClass('account-page');
            } else if (location.pathname.includes("error-404") || location.pathname.includes("error-500")) {
                $('body').addClass('error-page');
            }
        },
        [],
    )

    // if (location.pathname === '/login') {
    //     if (user.data !== null) {
    //         return (<Redirect to={'/app/main/dashboard'} />);
    //     }
    // } else if (location.pathname !== '/register') {
    //     if (user.data === null) {
    //         return (<Redirect to={'/login'} />);
    //     }
    // }

    return (
        <div>
            <div className={''}>

            </div>
            <Switch location={location}>
                {/*<>*/}
                {/* <InitialPath
                    path={`${match.url}app`}
                    authUser={user}
                    component={DefaultLayout}
                /> */}
                {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} /> */}
                <Route path="/login" component={LoginPage} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/register" component={RegistrationPage} />
                <Route path="/otp" component={OTP} />
                <Route path="/lockscreen" component={LockScreen} />
                <Route path="/applyjob" component={ApplyJobs} />

                <Route path="/app" component={DefaultLayout} />
                <Route path="/settings" component={Settinglayout} />
                <Route path="/tasks" component={Tasklayout} />
                <Route path="/email" component={Emaillayout} />
                <Route path="/conversation" component={chatlayout} />

                <Route path="/ui-components" component={uicomponents} />
                <Route path="/error-404" component={Error404} />
                <Route path="/error-500" component={Error500} />
                {/* </> */}
            </Switch>

        </div>)
};

export default App;
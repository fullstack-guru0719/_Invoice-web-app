/**
 * Signin Firebase
 */

import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  MicrosoftLoginButton,
} from "react-social-login-buttons";
import AppleLoginButton from "../components/AppleLoginButton";
import { Applogo } from "../Entryfile/imagepath.jsx";
import { loginActions, userActions } from "../store/actions";

const Loginpage = () => {
  const dispatch = useDispatch();
  /** Redux store **/
  const loginStatus = useSelector((state) => state.login, shallowEqual);

  /** component local states **/
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;

  /** component form handlers **/
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const loginWithJWT = useCallback(() => {
    setSubmitted(true);
    if (email && password) {
      dispatch(loginActions.submitLogin({ email, password }));
      dispatch({
        type: loginActions.LOGIN_ERROR,
        payload: "",
      });
    }
  }, [email, password]);

  const loginWithGoogle = useCallback(
    () => dispatch(loginActions.submitLoginWithFireBase("google")),
    []
  );
  const loginWithApple = useCallback(
    () => dispatch(loginActions.submitLoginWithFireBase("apple")),
    []
  );
  const loginWithMicrosoft = useCallback(
    () => dispatch(loginActions.submitLoginWithFireBase("microsoft")),
    []
  );
  const loginWithFacebook = useCallback(
    () => dispatch(loginActions.submitLoginWithFireBase("facebook")),
    []
  );

  // render
  return (
    <div className="main-wrapper">
      {/** Meta Content **/}
      <Helmet>
        <title>Login - Invoice App</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <a href="/purple/app/main/dashboard">
              <img src={Applogo} alt="Dreamguy's Technologies" />
            </a>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="email"
                  />
                  {submitted && !email && (
                    <div className="text-danger">Email is required</div>
                  )}
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                    <div className="col-auto">
                      <a className="text-muted" href="/purple/forgotpassword">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="password"
                    name="password"
                  />
                  {submitted && !password && (
                    <div className="text-danger">Password is required</div>
                  )}
                  {submitted &&
                    loginStatus &&
                    !loginStatus.success &&
                    loginStatus.error &&
                    loginStatus.error.map((error, idx) => (
                      <div key={idx} className="text-danger">
                        {error}
                      </div>
                    ))}
                </div>
                <div className="form-group text-center">
                  <a
                    className="btn btn-primary account-btn"
                    onClick={loginWithJWT}
                  >
                    Login
                  </a>
                  <div className="row social-button-wrapper">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <GoogleLoginButton onClick={loginWithGoogle}>
                        <span>Google</span>
                      </GoogleLoginButton>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <AppleLoginButton onClick={loginWithApple} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <MicrosoftLoginButton onClick={loginWithMicrosoft}>
                        <span>Microsoft</span>
                      </MicrosoftLoginButton>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <FacebookLoginButton onClick={loginWithFacebook}>
                        <span>Facebook</span>
                      </FacebookLoginButton>
                    </div>
                  </div>
                </div>
                <div className="account-footer">
                  <p>
                    Don't have an account yet?{" "}
                    <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Loginpage);

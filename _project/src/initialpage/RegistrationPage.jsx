/**
 * Signin Firebase
 */

import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link, withRouter, useHistory } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { Applogo } from "../Entryfile/imagepath.jsx";
import { registerActions } from "../store/actions";

const Registrationpage = (props) => {
  /** Redux Store **/
  const dispatch = useDispatch();
  const registerStatus = useSelector((state) => state.register, shallowEqual);

  /** component states **/
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    repeatpassword: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const { email, password, repeatpassword, firstName, lastName, phone } = state;
  const isvalid =
    email &&
    password &&
    password === repeatpassword &&
    firstName &&
    lastName &&
    phone;

  /** form handlers **/
  const registerClick = useCallback(
    (e) => {
      e.preventDefault();

      setSubmitted(true);
      if (isvalid) {
        dispatch({ type: registerActions.REGISTER_ERROR, payload: [] });
        dispatch(
          registerActions.submitRegister({
            email,
            password,
            firstName,
            lastName,
            phone,
          })
        );
      }
    },
    [state]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const { loading } = props;
  return (
    <div className="main-wrapper">
      <Helmet>
        <title>Register - Invoice App</title>
        <meta name="description" content="Register page" />
      </Helmet>
      <div className="account-content">
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <img src={Applogo} alt="Dreamguy's Technologies" />
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Create Account</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    onChange={handleChange}
                    name="firstName"
                    className="form-control"
                    type="text"
                  />
                  {submitted && !firstName && (
                    <div className="text-danger">First Name is required</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    onChange={handleChange}
                    name="lastName"
                    className="form-control"
                    type="text"
                  />
                  {submitted && !lastName && (
                    <div className="text-danger">Last Name is required</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    className="form-control"
                    type="email"
                  />
                  {submitted && !email && (
                    <div className="text-danger">Email is required</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    onChange={handleChange}
                    name="phone"
                    className="form-control"
                    type="text"
                  />
                  {submitted && !phone && (
                    <div className="text-danger">Phone is required</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={handleChange}
                    name="password"
                    className="form-control"
                    type="password"
                  />
                  {submitted && !password && (
                    <div className="text-danger">Password is required</div>
                  )}
                </div>
                <div className="form-group">
                  <label>Password Confirm</label>
                  <input
                    onChange={handleChange}
                    name="repeatpassword"
                    className="form-control"
                    type="password"
                  />
                  {submitted &&
                    (!repeatpassword || password !== repeatpassword) && (
                      <div className="text-danger">Password is incorrect</div>
                    )}
                  {submitted &&
                    registerStatus &&
                    !registerStatus.success &&
                    registerStatus.error &&
                    registerStatus.error.map((error, idx) => (
                      <div key={idx} className="text-danger">
                        {error}
                      </div>
                    ))}
                </div>
                <div className="form-group text-center">
                  <button
                    className={
                      "btn btn-primary account-btn" +
                      (!isvalid ? " disabled" : "")
                    }
                    onClick={registerClick}
                    disabled={!isvalid}
                  >
                    Create Account
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
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

export default withRouter(Registrationpage);

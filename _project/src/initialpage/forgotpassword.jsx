/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'

class ForgotPassword extends Component {

   render() {
      return (
          <div className="main-wrapper">
            <Helmet>
                    <title>Forgot Password - HRMS Admin Template</title>
                    <meta name="description" content="Login page"/>					
            </Helmet>
          <div className="account-content">
            <a href="/purple/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a>
            <div className="container">
              {/* Account Logo */}
              <div className="account-logo">
                <a href="/purple/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
              </div>
              {/* /Account Logo */}
              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">Forgot Password?</h3>
                  <p className="account-subtitle">Enter your email to get a password reset link</p>
                  {/* Account Form */}
                  <form>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
                    </div>
                    <div className="account-footer">
                      <p>Remember your password? <a href="/purple/login">Login</a></p>
                    </div>
                  </form>
                  {/* /Account Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
   }
}


export default ForgotPassword;

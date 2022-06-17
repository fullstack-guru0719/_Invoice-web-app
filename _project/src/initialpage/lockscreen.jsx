/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo,Avatar_02} from '../Entryfile/imagepath.jsx'

class Lockscreen extends Component {

   render() {
     
      return (
        <div className="main-wrapper">
            <Helmet>
               <title>Lockscreen - HRMS Admin Template</title>
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
                  {/* Lock User Img */}
                  <div className="lock-user">
                    <img alt="" src={Avatar_02} className="rounded-circle" />
                    <h4>John Doe</h4>
                  </div>
                  {/* /Lock User Img */}
                  {/* Account Form */}
                  <form action="/purple/app/main/dashboard">
                    <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" type="password" />
                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-primary account-btn" type="submit">Enter</button>
                    </div>
                    <div className="account-footer">
                      <p>Sign in as a different user? <a href="/purple/register">Login</a></p>
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

export default Lockscreen;

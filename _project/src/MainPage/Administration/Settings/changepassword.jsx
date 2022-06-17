/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class ChangePassword extends Component {

   render() {
     
      return ( 
       
      <div className="page-wrapper">
      <Helmet>
          <title>Change Password - HRMS Admin Template</title>
          <meta name="description" content="Login page"/>					
      </Helmet>
      <div className="content container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Change Password</h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <form>
              <div className="form-group">
                <label>Old password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label>New password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label>Confirm password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
      );
   }
}

export default ChangePassword;

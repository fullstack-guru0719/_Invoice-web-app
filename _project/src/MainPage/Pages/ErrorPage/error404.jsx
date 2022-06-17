/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Error404 extends Component {

    render() {
     
      return (
         <div className="main-wrapper">
            <Helmet>
                <title>Error 404 - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
         <div className="error-box">
           <h1>404</h1>
           <h3><i className="fa fa-warning" /> Oops! Page not found!</h3>
           <p>The page you requested was not found.</p>
           <a onclick={()=>localStorage.setItem("firstload","true")} href="/purple/app/main/dashboard" className="btn btn-custom">Back to Home</a>
         </div>
       </div>
        
      );
   }
}

export default Error404;

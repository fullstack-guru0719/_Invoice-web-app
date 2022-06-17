/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_11} from '../../../Entryfile/imagepath'

class IncomingCall extends Component {
  
   render() {
      return (
      <div className="page-wrapper">
          <Helmet>
            <title>Incoming Call - HRMS Admin Template</title>
            <meta name="description" content="Incoming Call"/>					
        </Helmet>
      {/* Incoming Call */}
      <div className="call-box incoming-box">
        <div className="call-wrapper">
          <div className="call-inner">
            <div className="call-user">
              <img className="call-avatar" src={Avatar_11} alt="" />
              <h4>Wilmer Deluna</h4>
              <span>Calling ...</span>
            </div>							
            <div className="call-items">
              <a href="/purple/conversation/chat" className="btn call-item call-end"><i className="material-icons">call_end</i></a>
              <a href="/purple/conversation/video-call" className="btn call-item call-start"><i className="material-icons">call</i></a>
            </div>
          </div>
        </div>
      </div>
      {/* /Incoming Call */}
    </div>
       );
   }
}

export default IncomingCall;

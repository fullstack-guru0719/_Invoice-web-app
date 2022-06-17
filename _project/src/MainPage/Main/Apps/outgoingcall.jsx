/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02} from '../../../Entryfile/imagepath'

class OutgoingCall extends Component {
  
   render() {
      return (
      <div className="page-wrapper">
          <Helmet>
            <title>Outgoing Call - HRMS Admin Template</title>
            <meta name="description" content="Outgoing Call"/>					
        </Helmet>
      {/* Outgoing Call */}
      <div className="call-box outgoing-box">
        <div className="call-wrapper">
          <div className="call-inner">
            <div className="call-user">
              <img alt="" src={Avatar_02} className="call-avatar" />
              <h4>John Doe</h4>
              <span>Connecting...</span>
            </div>							
            <div className="call-items">
              <a href="" className="btn call-item"><i className="material-icons">mic</i></a>
              <a href="" className="btn call-item"><i className="material-icons">videocam</i></a>
              <a href="/purple/conversation/chat" className="btn call-item call-end"><i className="material-icons vcend">call_end</i></a>
              <a href="" className="btn call-item"><i className="material-icons">person_add</i></a>
              <a href="" className="btn call-item"><i className="material-icons">volume_up</i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Outgoing Call */}
    </div>
       );
   }
}

export default OutgoingCall;

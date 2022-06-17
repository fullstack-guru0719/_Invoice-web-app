/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li> 
                <a href="/purple/app/main/dashboard"><i className="la la-home" /> <span>Back to Home</span></a>
              </li>
              <li className="active"> 
                <a href="/purple/email/inbox">Inbox <span className="mail-count">(21)</span></a>
              </li>
              <li> 
                <a href="#">Starred</a>
              </li>
              <li> 
                <a href="#">Sent Mail</a>
              </li>
              <li> 
                <a href="#">Trash</a>
              </li>
              <li> 
                <a href="#">Draft <span className="mail-count">(8)</span></a>
              </li>
              <li className="menu-title">Label <a href="#"><i className="fa fa-plus" /></a></li>
              <li> 
                <a href="#"><i className="fa fa-circle text-success mail-label" /> Work</a>
              </li>
              <li> 
                <a href="#"><i className="fa fa-circle text-danger mail-label" /> Office</a>
              </li>
              <li> 
                <a href="#"><i className="fa fa-circle text-warning mail-label" /> Personal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);

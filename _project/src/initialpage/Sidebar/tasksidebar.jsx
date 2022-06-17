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
              <li className="menu-title">Projects <a href="#" data-toggle="modal" data-target="#create_project"><i className="fa fa-plus" /></a></li>
              <li> 
                <a href="/purple/tasks/tasks">Project Management</a>
              </li>
              <li className="active"> 
                <a href="/purple/tasks/tasks">Hospital Administration</a>
              </li>
              <li> 
                <a href="/purple/tasks/tasks">Video Calling App</a>
              </li>
              <li> 
                <a href="/purple/tasks/tasks">Office Management</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);

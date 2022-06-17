/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class NotificationsSettings extends Component {

   render() {
     
      return ( 
         <div className="page-wrapper">
         <Helmet>
             <title>Notifications Settings - HRMS Admin Template</title>
             <meta name="description" content="Login page"/>					
         </Helmet>
         {/* Page Content */}
         <div className="content container-fluid">
           <div className="row">
             <div className="col-md-6 offset-md-3">
               {/* Page Header */}
               <div className="page-header">
                 <div className="row">
                   <div className="col-sm-12">
                     <h3 className="page-title">Notifications Settings</h3>
                   </div>
                 </div>
               </div>
               {/* /Page Header */}
               <div>
                 <ul className="list-group notification-list">
                   <li className="list-group-item">
                     Employee
                     <div className="status-toggle">
                       <input type="checkbox" id="staff_module" className="check" />
                       <label htmlFor="staff_module" className="checktoggle">checkbox</label>
                     </div>
                   </li>
                   <li className="list-group-item">
                     Holidays
                     <div className="status-toggle">
                       <input type="checkbox" id="holidays_module" className="check" defaultChecked />
                       <label htmlFor="holidays_module" className="checktoggle">checkbox</label>
                     </div>
                   </li>
                   <li className="list-group-item">
                     Leaves
                     <div className="status-toggle">
                       <input type="checkbox" id="leave_module" className="check" defaultChecked />
                       <label htmlFor="leave_module" className="checktoggle">checkbox</label>
                     </div>
                   </li>
                   <li className="list-group-item">
                     Events
                     <div className="status-toggle">
                       <input type="checkbox" id="events_module" className="check" defaultChecked />
                       <label htmlFor="events_module" className="checktoggle">checkbox</label>
                     </div>
                   </li>
                   <li className="list-group-item">
                     Chat
                     <div className="status-toggle">
                       <input type="checkbox" id="chat_module" className="check" defaultChecked />
                       <label htmlFor="chat_module" className="checktoggle">checkbox</label>
                     </div>
                   </li>
                   <li className="list-group-item">
                     Jobs
                     <div className="status-toggle">
                       <input type="checkbox" id="job_module" className="check" />
                       <label htmlFor="job_module" className="checktoggle">checkbox</label>
                     </div>
                   </li>
                 </ul>
               </div>  
             </div>
           </div>
         </div>
         {/* /Page Content */}
       </div>
      );
   }
}

export default NotificationsSettings;

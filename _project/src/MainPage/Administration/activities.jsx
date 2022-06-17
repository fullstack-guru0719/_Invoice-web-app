/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_01,Avatar_16, Avatar_08, Avatar_13, Avatar_05 } from "../../Entryfile/imagepath"

class Activities extends Component {

   render() {
     
      return ( 
             <div className="page-wrapper">
             <Helmet>
                <title>Activities - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
             </Helmet>
             {/* Page Content */}
             <div className="content">
               {/* Page Header */}
               <div className="page-header">
                 <div className="row">
                   <div className="col-sm-12">
                     <h3 className="page-title">Activities</h3>
                     <ul className="breadcrumb">
                       <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                       <li className="breadcrumb-item active">Activities</li>
                     </ul>
                   </div>
                 </div>
               </div>
               {/* /Page Header */}
               <div className="row">
                 <div className="col-md-12">
                   <div className="activity">
                     <div className="activity-box">
                       <ul className="activity-list">
                         <li>
                           <div className="activity-user">
                             <a href="/purple/app/profile/employee-profile" title="Lesley Grauer" data-toggle="tooltip" className="avatar">
                               <img src={Avatar_01} alt="" />
                             </a>
                           </div>
                           <div className="activity-content">
                             <div className="timeline-content">
                               <a href="/purple/app/profile/employee-profile" className="name">Lesley Grauer</a> added new task <a href="#">Hospital Administration</a>
                               <span className="time">4 mins ago</span>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="activity-user">
                             <a href="/purple/app/profile/employee-profile" className="avatar" title="Jeffery Lalor" data-toggle="tooltip">
                               <img src={Avatar_16} alt="" />
                             </a>
                           </div>
                           <div className="activity-content">
                             <div className="timeline-content">
                               <a href="/purple/app/profile/employee-profile" className="name">Jeffery Lalor</a> added <a href="/purple/app/profile/employee-profile" className="name">Loren Gatlin</a> and <a href="/purple/app/profile/employee-profile" className="name">Tarah Shropshire</a> to project <a href="#">Patient appointment booking</a>
                               <span className="time">6 mins ago</span>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="activity-user">
                             <a href="/purple/app/profile/employee-profile" title="Catherine Manseau" data-toggle="tooltip" className="avatar">
                               <img src={Avatar_08} alt="" />
                             </a>
                           </div>
                           <div className="activity-content">
                             <div className="timeline-content">
                               <a href="/purple/app/profile/employee-profile" className="name">Catherine Manseau</a> completed task <a href="#">Appointment booking with payment gateway</a>
                               <span className="time">12 mins ago</span>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="activity-user">
                             <a href="#" title="Bernardo Galaviz" data-toggle="tooltip" className="avatar">
                               <img src={Avatar_13} alt="" />
                             </a>
                           </div>
                           <div className="activity-content">
                             <div className="timeline-content">
                               <a href="/purple/app/profile/employee-profile" className="name">Bernardo Galaviz</a> changed the task name <a href="#">Doctor available module</a>
                               <span className="time">1 day ago</span>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="activity-user">
                             <a href="/purple/app/profile/employee-profile" title="Mike Litorus" data-toggle="tooltip" className="avatar">
                               <img src={Avatar_05} alt="" />
                             </a>
                           </div>
                           <div className="activity-content">
                             <div className="timeline-content">
                               <a href="/purple/app/profile/employee-profile" className="name">Mike Litorus</a> added new task <a href="#">Patient and Doctor video conferencing</a>
                               <span className="time">2 days ago</span>
                             </div>
                           </div>
                         </li>
                         <li>
                           <div className="activity-user">
                             <a href="/purple/app/profile/employee-profile" title="Jeffery Lalor" data-toggle="tooltip" className="avatar">
                               <img src={Avatar_16} alt="" />
                             </a>
                           </div>
                           <div className="activity-content">
                             <div className="timeline-content">
                               <a href="/purple/app/profile/employee-profile" className="name">Jeffery Lalor</a> added <a href="/purple/app/profile/employee-profile" className="name">Jeffrey Warden</a> and <a href="/purple/app/profile/employee-profile" className="name">Bernardo Galaviz</a> to the task of <a href="#">Private chat module</a>
                               <span className="time">7 days ago</span>
                             </div>
                           </div>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/* /Page Content */}
           </div>

      );
   }
}
import { Form } from 'reactstrap';

export default Activities;

/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_01,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_11,Avatar_12,Avatar_13,Avatar_16 ,Avatar_19} from '../../../Entryfile/imagepath'

export default class ClientProfile extends Component {
  render() {
    return (
        <div className="page-wrapper">
            <Helmet>
              <title>Client Profile - HRMS admin Template</title>
              <meta name="description" content="Reactify Blank Page" />
            </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">Profile</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                     <li className="breadcrumb-item active">Profile</li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             <div className="card mb-0">
               <div className="card-body">
                 <div className="row">
                   <div className="col-md-12">
                     <div className="profile-view">
                       <div className="profile-img-wrap">
                         <div className="profile-img">
                           <a href="">
                             <img src={Avatar_19} alt="" />
                           </a>
                         </div>
                       </div>
                       <div className="profile-basic">
                         <div className="row">
                           <div className="col-md-5">
                             <div className="profile-info-left">
                               <h3 className="user-name m-t-0">Global Technologies</h3>
                               <h5 className="company-role m-t-0 mb-0">Barry Cuda</h5>
                               <small className="text-muted">CEO</small>
                               <div className="staff-id">Employee ID : CLT-0001</div>
                               <div className="staff-msg"><a href="/purple/conversation/chat" className="btn btn-custom">Send Message</a></div>
                             </div>
                           </div>
                           <div className="col-md-7">
                             <ul className="personal-info">
                               <li>
                                 <span className="title">Phone:</span>
                                 <span className="text"><a href=''>9876543210</a></span>
                               </li>
                               <li>
                                 <span className="title">Email:</span>
                                 <span className="text"><a href="">barrycuda@example.com</a></span>
                               </li>
                               <li>
                                 <span className="title">Birthday:</span>
                                 <span className="text">2nd August</span>
                               </li>
                               <li>
                                 <span className="title">Address:</span>
                                 <span className="text">5754 Airport Rd, Coosada, AL, 36020</span>
                               </li>
                               <li>
                                 <span className="title">Gender:</span>
                                 <span className="text">Male</span>
                               </li>
                             </ul>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="card tab-box">
               <div className="row user-tabs">
                 <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                   <ul className="nav nav-tabs nav-tabs-bottom">
                     <li className="nav-item col-sm-3"><a className="nav-link active" data-toggle="tab" href="#myprojects">Projects</a></li>
                     <li className="nav-item col-sm-3"><a className="nav-link" data-toggle="tab" href="#tasks">Tasks</a></li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-lg-12"> 
                 <div className="tab-content profile-tab-content">
                   {/* Projects Tab */}
                   <div id="myprojects" className="tab-pane fade show active">
                     <div className="row">
                       <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                         <div className="card">
                           <div className="card-body">
                             <div className="dropdown profile-action">
                               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                               <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                               </div>
                             </div>
                             <h4 className="project-title"><a href="/purple/app/projects/projects-view">Office Management</a></h4>
                             <small className="block text-ellipsis m-b-15">
                               <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                               <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                             </small>
                             <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                               typesetting industry. When an unknown printer took a galley of type and
                               scrambled it...
                             </p>
                             <div className="pro-deadline m-b-15">
                               <div className="sub-title">
                                 Deadline:
                               </div>
                               <div className="text-muted">
                                 17 Apr 2019
                               </div>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Project Leader :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                 </li>
                               </ul>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Team :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                 </li>
                                 <li className="dropdown avatar-dropdown">
                                   <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                   <div className="dropdown-menu dropdown-menu-right">
                                     <div className="avatar-group">
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_02} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_09} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_10} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_05} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_11} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_12} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_13} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_01} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_16} />
                                       </a>
                                     </div>
                                     <div className="avatar-pagination">
                                       <ul className="pagination">
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Previous">
                                             <span aria-hidden="true">«</span>
                                             <span className="sr-only">Previous</span>
                                           </a>
                                         </li>
                                         <li className="page-item"><a className="page-link" href="#">1</a></li>
                                         <li className="page-item"><a className="page-link" href="#">2</a></li>
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Next">
                                             <span aria-hidden="true">»</span>
                                             <span className="sr-only">Next</span>
                                           </a>
                                         </li>
                                       </ul>
                                     </div>
                                   </div>
                                 </li> 
                               </ul>
                             </div>
                             <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                             <div className="progress progress-xs mb-0">
                               <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{width: '40%'}} />
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                         <div className="card">
                           <div className="card-body">
                             <div className="dropdown profile-action">
                               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                               <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                               </div>
                             </div>
                             <h4 className="project-title"><a href="/purple/app/projects/projects-view">Project Management</a></h4>
                             <small className="block text-ellipsis m-b-15">
                               <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                               <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                             </small>
                             <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                               typesetting industry. When an unknown printer took a galley of type and
                               scrambled it...
                             </p>
                             <div className="pro-deadline m-b-15">
                               <div className="sub-title">
                                 Deadline:
                               </div>
                               <div className="text-muted">
                                 17 Apr 2019
                               </div>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Project Leader :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                 </li>
                               </ul>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Team :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                 </li>
                                 <li className="dropdown avatar-dropdown">
                                   <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                   <div className="dropdown-menu dropdown-menu-right">
                                     <div className="avatar-group">
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_02} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_09} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_10} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_05} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_11} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_12} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_13} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_01} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_16} />
                                       </a>
                                     </div>
                                     <div className="avatar-pagination">
                                       <ul className="pagination">
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Previous">
                                             <span aria-hidden="true">«</span>
                                             <span className="sr-only">Previous</span>
                                           </a>
                                         </li>
                                         <li className="page-item"><a className="page-link" href="#">1</a></li>
                                         <li className="page-item"><a className="page-link" href="#">2</a></li>
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Next">
                                             <span aria-hidden="true">»</span>
                                             <span className="sr-only">Next</span>
                                           </a>
                                         </li>
                                       </ul>
                                     </div>
                                   </div>
                                 </li>
                               </ul>
                             </div>
                             <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                             <div className="progress progress-xs mb-0">
                               <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{width: '40%'}} />
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                         <div className="card">
                           <div className="card-body">
                             <div className="dropdown profile-action">
                               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                               <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                               </div>
                             </div>
                             <h4 className="project-title"><a href="/purple/app/projects/projects-view">Video Calling App</a></h4>
                             <small className="block text-ellipsis m-b-15">
                               <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                               <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                             </small>
                             <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                               typesetting industry. When an unknown printer took a galley of type and
                               scrambled it...
                             </p>
                             <div className="pro-deadline m-b-15">
                               <div className="sub-title">
                                 Deadline:
                               </div>
                               <div className="text-muted">
                                 17 Apr 2019
                               </div>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Project Leader :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                 </li>
                               </ul>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Team :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                 </li>
                                 <li className="dropdown avatar-dropdown">
                                   <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                   <div className="dropdown-menu dropdown-menu-right">
                                     <div className="avatar-group">
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_02} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_09} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_10} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_05} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_11} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_12} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_13} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_01} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_16} />
                                       </a>
                                     </div>
                                     <div className="avatar-pagination">
                                       <ul className="pagination">
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Previous">
                                             <span aria-hidden="true">«</span>
                                             <span className="sr-only">Previous</span>
                                           </a>
                                         </li>
                                         <li className="page-item"><a className="page-link" href="#">1</a></li>
                                         <li className="page-item"><a className="page-link" href="#">2</a></li>
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Next">
                                             <span aria-hidden="true">»</span>
                                             <span className="sr-only">Next</span>
                                           </a>
                                         </li>
                                       </ul>
                                     </div>
                                   </div>
                                 </li>
                               </ul>
                             </div>
                             <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                             <div className="progress progress-xs mb-0">
                               <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{width: '40%'}} />
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                         <div className="card">
                           <div className="card-body">
                             <div className="dropdown profile-action">
                               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                               <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                               </div>
                             </div>
                             <h4 className="project-title"><a href="/purple/app/projects/projects-view">Hospital Administration</a></h4>
                             <small className="block text-ellipsis m-b-15">
                               <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                               <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                             </small>
                             <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                               typesetting industry. When an unknown printer took a galley of type and
                               scrambled it...
                             </p>
                             <div className="pro-deadline m-b-15">
                               <div className="sub-title">
                                 Deadline:
                               </div>
                               <div className="text-muted">
                                 17 Apr 2019
                               </div>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Project Leader :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                 </li>
                               </ul>
                             </div>
                             <div className="project-members m-b-15">
                               <div>Team :</div>
                               <ul className="team-members">
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                 </li>
                                 <li>
                                   <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                 </li>
                                 <li className="dropdown avatar-dropdown">
                                   <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                   <div className="dropdown-menu dropdown-menu-right">
                                     <div className="avatar-group">
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_02} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_09} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_10} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_05} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_11} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_12} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_13} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_01} />
                                       </a>
                                       <a className="avatar avatar-xs" href="#">
                                         <img alt="" src={Avatar_16} />
                                       </a>
                                     </div>
                                     <div className="avatar-pagination">
                                       <ul className="pagination">
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Previous">
                                             <span aria-hidden="true">«</span>
                                             <span className="sr-only">Previous</span>
                                           </a>
                                         </li>
                                         <li className="page-item"><a className="page-link" href="#">1</a></li>
                                         <li className="page-item"><a className="page-link" href="#">2</a></li>
                                         <li className="page-item">
                                           <a className="page-link" href="#" aria-label="Next">
                                             <span aria-hidden="true">»</span>
                                             <span className="sr-only">Next</span>
                                           </a>
                                         </li>
                                       </ul>
                                     </div>
                                   </div>
                                 </li>
                               </ul>
                             </div>
                             <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                             <div className="progress progress-xs mb-0">
                               <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{width: '40%'}} />
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   {/* /Projects Tab */}
                   {/* Task Tab */}
                   <div id="tasks" className="tab-pane fade">
                     <div className="project-task">
                       <ul className="nav nav-tabs nav-tabs-top nav-justified mb-0">
                         <li className="nav-item"><a className="nav-link active" href="#all_tasks" data-toggle="tab" aria-expanded="true">All Tasks</a></li>
                         <li className="nav-item"><a className="nav-link" href="#pending_tasks" data-toggle="tab" aria-expanded="false">Pending Tasks</a></li>
                         <li className="nav-item"><a className="nav-link" href="#completed_tasks" data-toggle="tab" aria-expanded="false">Completed Tasks</a></li>
                       </ul>
                       <div className="tab-content">
                         <div className="tab-pane show active" id="all_tasks">
                           <div className="task-wrapper">
                             <div className="task-list-container">
                               <div className="task-list-body">
                                 <ul id="task-list">
                                   <li className="task">
                                     <div className="task-container">
                                       <span className="task-action-btn task-check">
                                         <span className="action-circle large complete-btn" title="Mark Complete">
                                           <i className="material-icons">check</i>
                                         </span>
                                       </span>
                                       <span className="task-label" contentEditable="true" suppressContentEditableWarning={true}>Patient appointment booking</span>
                                       <span className="task-action-btn task-btn-right">
                                         <span className="action-circle large" title="Assign">
                                           <i className="material-icons">person_add</i>
                                         </span>
                                         <span className="action-circle large delete-btn" title="Delete Task">
                                           <i className="material-icons">delete</i>
                                         </span>
                                       </span>
                                     </div>
                                   </li>
                                   <li className="task">
                                     <div className="task-container">
                                       <span className="task-action-btn task-check">
                                         <span className="action-circle large complete-btn" title="Mark Complete">
                                           <i className="material-icons">check</i>
                                         </span>
                                       </span>
                                       <span className="task-label" contentEditable="true" suppressContentEditableWarning={true}>Appointment booking with payment gateway</span>
                                       <span className="task-action-btn task-btn-right">
                                         <span className="action-circle large" title="Assign">
                                           <i className="material-icons">person_add</i>
                                         </span>
                                         <span className="action-circle large delete-btn" title="Delete Task">
                                           <i className="material-icons">delete</i>
                                         </span>
                                       </span>
                                     </div>
                                   </li>
                                   <li className="completed task">
                                     <div className="task-container">
                                       <span className="task-action-btn task-check">
                                         <span className="action-circle large complete-btn" title="Mark Complete">
                                           <i className="material-icons">check</i>
                                         </span>
                                       </span>
                                       <span className="task-label">Doctor available module</span>
                                       <span className="task-action-btn task-btn-right">
                                         <span className="action-circle large" title="Assign">
                                           <i className="material-icons">person_add</i>
                                         </span>
                                         <span className="action-circle large delete-btn" title="Delete Task">
                                           <i className="material-icons">delete</i>
                                         </span>
                                       </span>
                                     </div>
                                   </li>
                                   <li className="task">
                                     <div className="task-container">
                                       <span className="task-action-btn task-check">
                                         <span className="action-circle large complete-btn" title="Mark Complete">
                                           <i className="material-icons">check</i>
                                         </span>
                                       </span>
                                       <span className="task-label" contentEditable="true" suppressContentEditableWarning={true}>Patient and Doctor video conferencing</span>
                                       <span className="task-action-btn task-btn-right">
                                         <span className="action-circle large" title="Assign">
                                           <i className="material-icons">person_add</i>
                                         </span>
                                         <span className="action-circle large delete-btn" title="Delete Task">
                                           <i className="material-icons">delete</i>
                                         </span>
                                       </span>
                                     </div>
                                   </li>
                                   <li className="task">
                                     <div className="task-container">
                                       <span className="task-action-btn task-check">
                                         <span className="action-circle large complete-btn" title="Mark Complete">
                                           <i className="material-icons">check</i>
                                         </span>
                                       </span>
                                       <span className="task-label" contentEditable="true" suppressContentEditableWarning={true}>Private chat module</span>
                                       <span className="task-action-btn task-btn-right">
                                         <span className="action-circle large" title="Assign">
                                           <i className="material-icons">person_add</i>
                                         </span>
                                         <span className="action-circle large delete-btn" title="Delete Task">
                                           <i className="material-icons">delete</i>
                                         </span>
                                       </span>
                                     </div>
                                   </li>
                                   <li className="task">
                                     <div className="task-container">
                                       <span className="task-action-btn task-check">
                                         <span className="action-circle large complete-btn" title="Mark Complete">
                                           <i className="material-icons">check</i>
                                         </span>
                                       </span>
                                       <span className="task-label" contentEditable="true" suppressContentEditableWarning={true}>Patient Profile add</span>
                                       <span className="task-action-btn task-btn-right">
                                         <span className="action-circle large" title="Assign">
                                           <i className="material-icons">person_add</i>
                                         </span>
                                         <span className="action-circle large delete-btn" title="Delete Task">
                                           <i className="material-icons">delete</i>
                                         </span>
                                       </span>
                                     </div>
                                   </li>
                                 </ul>
                               </div>
                               <div className="task-list-footer">
                                 <div className="new-task-wrapper">
                                   <textarea id="new-task" placeholder="Enter new task here. . ." defaultValue={""} />
                                   <span className="error-message hidden">You need to enter a task first</span>
                                   <span className="add-new-task-btn btn" id="add-task">Add Task</span>
                                   <span className="btn" id="close-task-panel">Close</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div className="tab-pane" id="pending_tasks" />
                         <div className="tab-pane" id="completed_tasks" />
                       </div>
                     </div>
                   </div>
                   {/* /Task Tab */}
                 </div>
               </div>
             </div>
           </div>
           {/* /Page Content */}
         </div>
       
    );
  }
}

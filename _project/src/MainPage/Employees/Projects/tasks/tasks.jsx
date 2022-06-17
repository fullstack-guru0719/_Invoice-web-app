
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

import "../../../index.css"
import {Avatar_16,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Attachment,User, Avatar_08,Avatar_26} from "../../../../Entryfile/imagepath"

class Tasks extends Component {
  onImageUpload = (fileList) => {

    const reader = new FileReader();
    reader.onloadend = () => {
      ReactSummernote.insertImage(reader.result);
    }
    reader.readAsDataURL(fileList[0]);
  
  }
   render() {
      return (  
     <div className="page-wrapper">       
        <Helmet>
            <title>Tasks - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>  
     <div className="chat-main-row">
       <div className="chat-main-wrapper">
         <div className="col-lg-7 message-view task-view task-left-sidebar">
           <div className="chat-window">
             <div className="fixed-header">
               <div className="navbar">
                 <div className="float-left mr-auto">
                   <div className="add-task-btn-wrapper">
                     <span className="add-task-btn btn btn-white btn-sm">
                       Add Task
                     </span>
                   </div>
                 </div>
                 <a className="task-chat profile-rightbar float-right" id="task_chat" href="#task_window"><i className="fa fa fa-comment" /></a>
                 <ul className="nav float-right custom-menu">
                   <li className="nav-item dropdown dropdown-action">
                     <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                     <div className="dropdown-menu dropdown-menu-right">
                       <a className="dropdown-item" href="">Pending Tasks</a>
                       <a className="dropdown-item" href="">Completed Tasks</a>
                       <a className="dropdown-item" href="">All Tasks</a>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="chat-contents">
               <div className="chat-content-wrap">
                 <div className="chat-wrap-inner">
                   <div className="chat-box">
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
                     <div className="notification-popup hide">
                       <p>
                         <span className="task" />
                         <span className="notification-text" />
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="col-lg-5 message-view task-chat-view task-right-sidebar" id="task_window">
           <div className="chat-window">
             <div className="fixed-header">
               <div className="navbar">
                 <div className="task-assign">
                   <a className="task-complete-btn" id="task_complete" href="">
                     <i className="material-icons">check</i> Mark Complete
                   </a>
                 </div>
                 <ul className="nav float-right custom-menu">
                   <li className="dropdown dropdown-action">
                     <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                     <div className="dropdown-menu dropdown-menu-right">
                       <a className="dropdown-item" href="">Delete Task</a>
                       <a className="dropdown-item" href="">Settings</a>
                     </div>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="chat-contents task-chat-contents">
               <div className="chat-content-wrap">
                 <div className="chat-wrap-inner">
                   <div className="chat-box">
                     <div className="chats">
                       <h4>Hospital Administration Phase 1</h4>
                       <div className="task-header">
                         <div className="assignee-info">
                           <a href="#" data-toggle="modal" data-target="#assignee">
                             <div className="avatar">
                               <img alt="" src={Avatar_02} />
                             </div>
                             <div className="assigned-info">
                               <div className="task-head-title">Assigned To</div>
                               <div className="task-assignee">John Doe</div>
                             </div>
                           </a>
                           <span className="remove-icon">
                             <i className="fa fa-close" />
                           </span>
                         </div>
                         <div className="task-due-date">
                           <a href="#" data-toggle="modal" data-target="#assignee">
                             <div className="due-icon">
                               <span>
                                 <i className="material-icons">date_range</i>
                               </span>
                             </div>
                             <div className="due-info">
                               <div className="task-head-title">Due Date</div>
                               <div className="due-date">Mar 26, 2019</div>
                             </div>
                           </a>
                           <span className="remove-icon">
                             <i className="fa fa-close" />
                           </span>
                         </div>
                       </div>
                       <hr className="task-line" />
                       <div className="task-desc">
                         <div className="task-desc-icon">
                           <i className="material-icons">subject</i>
                         </div>
                         <div className="task-textarea">
                           <textarea className="form-control" placeholder="Description" defaultValue={""} />
                         </div>
                       </div>
                       <hr className="task-line" />
                       <div className="task-information">
                         <span className="task-info-line"><a className="task-user" href="#">Lesley Grauer</a> <span className="task-info-subject">created task</span></span>
                         <div className="task-time">Jan 20, 2019</div>
                       </div>
                       <div className="task-information">
                         <span className="task-info-line"><a className="task-user" href="#">Lesley Grauer</a> <span className="task-info-subject">added to Hospital Administration</span></span>
                         <div className="task-time">Jan 20, 2019</div>
                       </div>
                       <div className="task-information">
                         <span className="task-info-line"><a className="task-user" href="#">Lesley Grauer</a> <span className="task-info-subject">assigned to John Doe</span></span>
                         <div className="task-time">Jan 20, 2019</div>
                       </div>
                       <hr className="task-line" />
                       <div className="task-information">
                         <span className="task-info-line"><a className="task-user" href="#">John Doe</a> <span className="task-info-subject">changed the due date to Sep 28</span> </span>
                         <div className="task-time">9:09pm</div>
                       </div>
                       <div className="task-information">
                         <span className="task-info-line"><a className="task-user" href="#">John Doe</a> <span className="task-info-subject">assigned to you</span></span>
                         <div className="task-time">9:10pm</div>
                       </div>
                       <div className="chat chat-left">
                         <div className="chat-avatar">
                           <a href="/purple/app/profile/employee-profile" className="avatar">
                             <img alt="" src={Avatar_02} />
                           </a>
                         </div>
                         <div className="chat-body">
                           <div className="chat-bubble">
                             <div className="chat-content">
                               <span className="task-chat-user">John Doe</span> <span className="chat-time">8:35 am</span>
                               <p>I'm just looking around.</p>
                               <p>Will you tell me something about yourself? </p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="completed-task-msg"><span className="task-success"><a href="#">John Doe</a> completed this task.</span> <span className="task-time">Today at 9:27am</span></div>
                       <div className="chat chat-left">
                         <div className="chat-avatar">
                           <a href="/purple/app/profile/employee-profile" className="avatar">
                             <img alt="" src={Avatar_02} />
                           </a>
                         </div>
                         <div className="chat-body">
                           <div className="chat-bubble">
                             <div className="chat-content">
                               <span className="task-chat-user">John Doe</span> <span className="file-attached">attached 3 files <i className="fa fa-paperclip" /></span> <span className="chat-time">Feb 17, 2019 at 4:32am</span>
                               <ul className="attach-list">
                                 <li><i className="fa fa-file" /> <a href="#">project_document.avi</a></li>
                                 <li><i className="fa fa-file" /> <a href="#">video_conferencing.psd</a></li>
                                 <li><i className="fa fa-file" /> <a href="#">landing_page.psd</a></li>
                               </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="chat chat-left">
                         <div className="chat-avatar">
                           <a href="/purple/app/profile/employee-profile" className="avatar">
                             <img alt="" src={Avatar_16} />
                           </a>
                         </div>
                         <div className="chat-body">
                           <div className="chat-bubble">
                             <div className="chat-content">
                               <span className="task-chat-user">Jeffery Lalor</span> <span className="file-attached">attached file <i className="fa fa-paperclip" /></span> <span className="chat-time">Yesterday at 9:16pm</span>
                               <ul className="attach-list">
                                 <li className="pdf-file"><i className="fa fa-file-pdf-o" /> <a href="#">Document_2016.pdf</a></li>
                               </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="chat chat-left">
                         <div className="chat-avatar">
                           <a href="/purple/app/profile/employee-profile" className="avatar">
                             <img alt="" src={Avatar_16} />
                           </a>
                         </div>
                         <div className="chat-body">
                           <div className="chat-bubble">
                             <div className="chat-content">
                               <span className="task-chat-user">Jeffery Lalor</span> <span className="file-attached">attached file <i className="fa fa-paperclip" /></span> <span className="chat-time">Today at 12:42pm</span>
                               <ul className="attach-list">
                                 <li className="img-file">
                                   <div className="attach-img-download"><a href="#">avatar-1.jpg</a></div>
                                   <div className="task-attach-img"><img src={User} alt="" /></div>
                                 </li>
                               </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="task-information">
                         <span className="task-info-line">
                           <a className="task-user" href="#">John Doe</a>
                           <span className="task-info-subject">marked task as incomplete</span>
                         </span>
                         <div className="task-time">1:16pm</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="chat-footer">
               <div className="message-bar">
                 <div className="message-inner">
                   <a className="link attach-icon" href="#"><img src={Attachment} alt="" /></a>
                   <div className="message-area">
                     <div className="input-group">
                       <textarea className="form-control" placeholder="Type message..." defaultValue={""} />
                       <span className="input-group-append">
                         <button className="btn btn-primary" type="button"><i className="fa fa-send" /></button>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="project-members task-followers">
                 <span className="followers-title">Followers</span>
                 <a className="avatar" href="#" data-toggle="tooltip" title="Jeffery Lalor">
                   <img alt="" src={Avatar_16} />
                 </a>
                 <a className="avatar" href="#" data-toggle="tooltip" title="Richard Miles">
                   <img alt="" src={Avatar_09} />
                 </a>
                 <a className="avatar" href="#" data-toggle="tooltip" title="John Smith">
                   <img alt="" src={Avatar_10} />
                 </a>
                 <a className="avatar" href="#" data-toggle="tooltip" title="Mike Litorus">
                   <img alt="" src={Avatar_05} />
                 </a>
                 <a href="#" className="followers-add" data-toggle="modal" data-target="#task_followers"><i className="material-icons">add</i></a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Create Project Modal */}
     <div id="create_project" className="modal custom-modal fade" role="dialog">
       <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title">Create Project</h5>
             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">×</span>
             </button>
           </div>
           <div className="modal-body">
             <form>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Project Name</label>
                     <input className="form-control" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Client</label>
                     <select className="select">
                       <option>Global Technologies</option>
                       <option>Delta Infotech</option>
                     </select>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Start Date</label>
                     <div className="cal-icon">
                       <input className="form-control datetimepicker" type="text" />
                     </div>
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>End Date</label>
                     <div className="cal-icon">
                       <input className="form-control datetimepicker" type="text" />
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-3">
                   <div className="form-group">
                     <label>Rate</label>
                     <input placeholder="$50" className="form-control" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-3">
                   <div className="form-group">
                     <label>&nbsp;</label>
                     <select className="select">
                       <option>Hourly</option>
                       <option>Fixed</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Priority</label>
                     <select className="select">
                       <option>High</option>
                       <option>Medium</option>
                       <option>Low</option>
                     </select>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Add Project Leader</label>
                     <input className="form-control" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Team Leader</label>
                     <div className="project-members">
                       <a className="avatar" href="#" data-toggle="tooltip" title="Jeffery Lalor">
                         <img alt="" src={Avatar_16} />
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Add Team</label>
                     <input className="form-control" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Team Members</label>
                     <div className="project-members">
                       <a className="avatar" href="#" data-toggle="tooltip" title="John Doe">
                         <img alt="" src={Avatar_02} />
                       </a>
                       <a className="avatar" href="#" data-toggle="tooltip" title="Richard Miles">
                         <img alt="" src={Avatar_09} />
                       </a>
                       <a className="avatar" href="#" data-toggle="tooltip" title="John Smith">
                         <img alt="" src={Avatar_10} />
                       </a>
                       <a className="avatar" href="#" data-toggle="tooltip" title="Mike Litorus">
                         <img alt="" src={Avatar_05} />
                       </a>
                       <span className="all-team">+2</span>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="form-group">
                 <label>Description</label>
                 <ReactSummernote
                      value="Default value"
                      options={{
                        lang: 'ru-RU',
                        height: 350,
                        dialogsInBody: true,
                        toolbar: [
                          ['style', ['style']],
                          ['font', ['bold', 'underline', 'clear']],
                          ['fontname', ['fontname']],
                          ['para', ['ul', 'ol', 'paragraph']],
                          ['table', ['table']],
                          ['insert', ['link', 'picture', 'video']],
                          ['view', ['fullscreen', 'codeview']]
                        ]
                      }}
                      onChange={this.onChange}
                      onImageUpload={this.onImageUpload}
                    />
                 {/* <textarea rows={4} className="form-control summernote" placeholder="Enter your message here" defaultValue={""} /> */}
               </div>
               <div className="form-group">
                 <label>Upload Files</label>
                 <input className="form-control" type="file" />
               </div>
               <div className="submit-section">
                 <button className="btn btn-primary submit-btn">Submit</button>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
     {/* /Create Project Modal */}
     {/* Assignee Modal */}
     <div id="assignee" className="modal custom-modal fade" role="dialog">
       <div className="modal-dialog modal-dialog-centered" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title">Assign to this task</h5>
             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">×</span>
             </button>
           </div>
           <div className="modal-body">
             <div className="input-group m-b-30">
               <input placeholder="Search to add" className="form-control search-input" type="text" />
               <span className="input-group-append">
                 <button className="btn btn-primary">Search</button>
               </span>
             </div>
             <div>
               <ul className="chat-user-list">
                 <li>
                   <a href="#">
                     <div className="media">
                       <span className="avatar"><img alt="" src={Avatar_09} /></span>
                       <div className="media-body align-self-center text-nowrap">
                         <div className="user-name">Richard Miles</div>
                         <span className="designation">Web Developer</span>
                       </div>
                     </div>
                   </a>
                 </li>
                 <li>
                   <a href="#">
                     <div className="media">
                       <span className="avatar"><img alt="" src={Avatar_10} /></span>
                       <div className="media-body align-self-center text-nowrap">
                         <div className="user-name">John Smith</div>
                         <span className="designation">Android Developer</span>
                       </div>
                     </div>
                   </a>
                 </li>
                 <li>
                   <a href="#">
                     <div className="media">
                       <span className="avatar">
                         <img alt="" src={Avatar_16} />
                       </span>
                       <div className="media-body align-self-center text-nowrap">
                         <div className="user-name">Jeffery Lalor</div>
                         <span className="designation">Team Leader</span>
                       </div>
                     </div>
                   </a>
                 </li>
               </ul>
             </div>
             <div className="submit-section">
               <button className="btn btn-primary submit-btn">Assign</button>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* /Assignee Modal */}
     {/* Task Followers Modal */}
     <div id="task_followers" className="modal custom-modal fade" role="dialog">
       <div className="modal-dialog modal-dialog-centered" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title">Add followers to this task</h5>
             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">×</span>
             </button>
           </div>
           <div className="modal-body">
             <div className="input-group m-b-30">
               <input placeholder="Search to add" className="form-control search-input" type="text" />
               <span className="input-group-append">
                 <button className="btn btn-primary">Search</button>
               </span>
             </div>
             <div>
               <ul className="chat-user-list">
                 <li>
                   <a href="#">
                     <div className="media">
                       <span className="avatar"><img alt="" src={Avatar_16} /></span>
                       <div className="media-body media-middle text-nowrap">
                         <div className="user-name">Jeffery Lalor</div>
                         <span className="designation">Team Leader</span>
                       </div>
                     </div>
                   </a>
                 </li>
                 <li>
                   <a href="#">
                     <div className="media">
                       <span className="avatar"><img alt="" src={Avatar_08} /></span>
                       <div className="media-body media-middle text-nowrap">
                         <div className="user-name">Catherine Manseau</div>
                         <span className="designation">Android Developer</span>
                       </div>
                     </div>
                   </a>
                 </li>
                 <li>
                   <a href="#">
                     <div className="media">
                       <span className="avatar"><img alt="" src={Avatar_26} /></span>
                       <div className="media-body media-middle text-nowrap">
                         <div className="user-name">Wilmer Deluna</div>
                         <span className="designation">Team Leader</span>
                       </div>
                     </div>
                   </a>
                 </li>
               </ul>
             </div>
             <div className="submit-section">
               <button className="btn btn-primary submit-btn">Add to Follow</button>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* /Task Followers Modal */}
   </div>
      );
   }
}

export default Tasks;

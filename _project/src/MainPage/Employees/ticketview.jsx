
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_11, Avatar_08,Avatar_09, Avatar_02, Avatar_10, Avatar_05, PlaceHolder, User,Attachment } from "../../Entryfile/imagepath"

class Tickets extends Component {
   render() {
      return ( 
         <div className="page-wrapper">
         <Helmet>
             <title>Tickets - HRMS Admin Template</title>
             <meta name="description" content="Login page"/>					
         </Helmet>
         <div className="chat-main-row">
           <div className="chat-main-wrapper">
             <div className="col-lg-8 message-view task-view">
               <div className="chat-window">
                 <div className="fixed-header">
                   <div className="navbar">
                     <div className="float-left ticket-view-details">
                       <div className="ticket-header">
                         <span>Status: </span> <span className="badge badge-warning">New</span> <span className="m-l-15 text-muted">Client: </span>
                         <a href="#">Delta Infotech</a>    
                         <span className="m-l-15 text-muted">Created: </span>
                         <span>5 Jan 2019 07:21 AM </span> 
                         <span className="m-l-15 text-muted">Created by:</span>
                         <span><a href="/purple/app/profile/employee-profile">John Doe</a></span>
                       </div>
                     </div>
                     <a className="task-chat profile-rightbar float-right" id="task_chat" href="#task_window"><i className="fa fa fa-comment" /></a>
                   </div>
                 </div>
                 <div className="chat-contents">
                   <div className="chat-content-wrap">
                     <div className="chat-wrap-inner">
                       <div className="chat-box">
                         <div className="task-wrapper">
                           <div className="card">
                             <div className="card-body">
                               <div className="project-title">
                                 <div className="m-b-20">
                                   <span className="h5 card-title ">Laptop Issue</span>
                                   <div className="float-right ticket-priority"><span>Priority:</span>
                                     <div className="btn-group">
                                       <a href="#" className="badge badge-danger dropdown-toggle" data-toggle="dropdown">Highest </a>
                                       <div className="dropdown-menu dropdown-menu-right">
                                         <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Highest priority</a>
                                         <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> High priority</a>
                                         <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-primary" /> Normal priority</a>
                                         <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low priority</a>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>
                             </div>
                           </div>
                           <div className="card">
                             <div className="card-body">
                               <h5 className="card-title m-b-20">Uploaded image files</h5>
                               <div className="row">
                                 <div className="col-md-3 col-sm-6">
                                   <div className="uploaded-box">
                                     <div className="uploaded-img">
                                       <img src={PlaceHolder} className="img-fluid" alt="" />
                                     </div>
                                     <div className="uploaded-img-name">
                                       demo.png
                                     </div>
                                   </div>
                                 </div>
                                 <div className="col-md-3 col-sm-6">
                                   <div className="uploaded-box">
                                     <div className="uploaded-img">
                                       <img src={PlaceHolder} className="img-fluid" alt="" />
                                     </div>
                                     <div className="uploaded-img-name">
                                       demo.png
                                     </div>
                                   </div>
                                 </div>
                                 <div className="col-md-3 col-sm-6">
                                   <div className="uploaded-box">
                                     <div className="uploaded-img">
                                       <img src={PlaceHolder} className="img-fluid" alt="" />
                                     </div>
                                     <div className="uploaded-img-name">
                                       demo.png
                                     </div>
                                   </div>
                                 </div>
                                 <div className="col-md-3 col-sm-6">
                                   <div className="uploaded-box">
                                     <div className="uploaded-img">
                                       <img src={PlaceHolder} className="img-fluid" alt="" />
                                     </div>
                                     <div className="uploaded-img-name">
                                       demo.png
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="card mb-0">
                             <div className="card-body">
                               <h5 className="card-title m-b-20">Uploaded files</h5>
                               <ul className="files-list">
                                 <li>
                                   <div className="files-cont">
                                     <div className="file-type">
                                       <span className="files-icon"><i className="fa fa-file-pdf-o" /></span>
                                     </div>
                                     <div className="files-info">
                                       <span className="file-name text-ellipsis"><a href="#">Ticket_document.xls</a></span>
                                       <span className="file-author"><a href="#">John Doe</a></span> <span className="file-date">May 5th at 8:21 PM</span>
                                       <div className="file-size">Size: 14.8Mb</div>
                                     </div>
                                     <ul className="files-action">
                                       <li className="dropdown dropdown-action">
                                         <a href className="dropdown-toggle btn btn-link" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
                                         <div className="dropdown-menu dropdown-menu-right">
                                           <a className="dropdown-item" href="javascript:void(0)">Download</a>
                                           <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                           <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                                         </div>
                                       </li>
                                     </ul>
                                   </div>
                                 </li>
                                 <li>
                                   <div className="files-cont">
                                     <div className="file-type">
                                       <span className="files-icon"><i className="fa fa-file-pdf-o" /></span>
                                     </div>
                                     <div className="files-info">
                                       <span className="file-name text-ellipsis"><a href="#">Issue_report.xls</a></span>
                                       <span className="file-author"><a href="#">John Doe</a></span> <span className="file-date">May 5th at 5:41 PM</span>
                                       <div className="file-size">Size: 14.8Mb</div>
                                     </div>
                                     <ul className="files-action">
                                       <li className="dropdown dropdown-action">
                                         <a href className="dropdown-toggle btn btn-link" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
                                         <div className="dropdown-menu dropdown-menu-right">
                                           <a className="dropdown-item" href="javascript:void(0)">Download</a>
                                           <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                           <a className="dropdown-item" href="javascript:void(0)">Delete</a>
                                         </div>
                                       </li>
                                     </ul>
                                   </div>
                                 </li>
                               </ul>
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
             <div className="col-lg-4 message-view task-chat-view ticket-chat-view" id="task_window">
               <div className="chat-window">
                 <div className="fixed-header">
                   <div className="navbar">
                     <div className="task-assign">
                       <span className="assign-title">Assigned to </span> 
                       <a href="#" data-toggle="tooltip" data-placement="bottom" title="John Doe" className="avatar">
                         <img src={Avatar_02} alt="" />
                       </a>
                       <a href="#" className="followers-add" title="Add Assignee" data-toggle="modal" data-target="#assignee"><i className="material-icons">add</i></a>
                     </div>
                     <ul className="nav float-right custom-menu">
                       <li className="nav-item dropdown dropdown-action">
                         <a href className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                         <div className="dropdown-menu">
                           <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_ticket">Edit Ticket</a>
                           <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_ticket">Delete Ticket</a>
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
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <a href="/purple/app/profile/employee-profile" className="avatar">
                                 <img src={Avatar_02} alt="" />
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
                           <div className="completed-task-msg">
                             <span className="task-success">
                               <a href="#">John Doe</a> closed this ticket.
                             </span> 
                             <span className="task-time">Today at 9:27am</span>
                           </div>
                           <div className="chat chat-left">
                             <div className="chat-avatar">
                               <a href="/purple/app/profile/employee-profile" className="avatar">
                                 <img src={Avatar_02} alt="" />
                               </a>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <span className="task-chat-user">John Doe</span> 
                                   <span className="file-attached">attached 3 files <i className="fa fa-paperclip" /></span> 
                                   <span className="chat-time">Feb 17, 2019 at 4:32am</span>
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
                                 <img src={Avatar_09} alt="" />
                               </a>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <span className="task-chat-user">Jeffery Lalor</span> 
                                   <span className="file-attached">attached file <i className="fa fa-paperclip" /></span> 
                                   <span className="chat-time">Yesterday at 9:16pm</span>
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
                                 <img src={Avatar_09} alt="" />
                               </a>
                             </div>
                             <div className="chat-body">
                               <div className="chat-bubble">
                                 <div className="chat-content">
                                   <span className="task-chat-user">Jeffery Lalor</span> 
                                   <span className="file-attached">attached file <i className="fa fa-paperclip" /></span> 
                                   <span className="chat-time">Today at 12:42pm</span>
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
                               <span className="task-info-subject">marked ticket as reopened</span>
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
                     <a href="#" data-toggle="tooltip" title="Richard Miles" className="avatar">
                       <img src={Avatar_09} alt="" />
                     </a>
                     <a href="#" data-toggle="tooltip" title="John Smith" className="avatar">
                       <img src={Avatar_10} alt="" />
                     </a>
                     <a href="#" data-toggle="tooltip" title="Mike Litorus" className="avatar">
                       <img src={Avatar_05} alt="" />
                     </a>
                     <a href="#" data-toggle="tooltip" title="Wilmer Deluna" className="avatar">
                       <img src={Avatar_11} alt="" />
                     </a>
                     <a href="#" className="followers-add" data-toggle="modal" data-target="#task_followers"><i className="material-icons">add</i></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* Edit Ticket Modal */}
         <div id="edit_ticket" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Ticket</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Subject</label>
                         <input className="form-control" type="text" defaultValue="Laptop Issue" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Id</label>
                         <input className="form-control" type="text" readOnly defaultValue="TKT-0001" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Assign Staff</label>
                         <select className="select">
                           <option>-</option>
                           <option >Mike Litorus</option>
                           <option>John Smith</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Client</label>
                         <select className="select">
                           <option>-</option>
                           <option>Delta Infotech</option>
                           <option >International Software Inc</option>
                         </select>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Priority</label>
                         <select className="select">
                           <option>High</option>
                           <option >Medium</option>
                           <option>Low</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>CC</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Assign</label>
                         <input type="text" className="form-control" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Assignee</label>
                         <div className="project-members">
                           <a title="John Smith" data-toggle="tooltip" href="#">
                             <img src={Avatar_10} alt="" />
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Add Followers</label>
                         <input type="text" className="form-control" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Ticket Followers</label>
                         <div className="project-members">
                           <a title="Richard Miles" data-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_09} alt="" />
                           </a>
                           <a title="John Smith" data-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_10} alt="" />
                           </a>
                           <a title="Mike Litorus" data-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_05} alt="" />
                           </a>
                           <a title="Wilmer Deluna" data-toggle="tooltip" href="#" className="avatar">
                             <img src={Avatar_11} alt="" />
                           </a>
                           <span className="all-team">+2</span>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-12">
                       <div className="form-group">
                         <label>Description</label>
                         <textarea className="form-control" rows={4} defaultValue={""} />
                       </div>
                       <div className="form-group">
                         <label>Upload Files</label>
                         <input className="form-control" type="file" />
                       </div>
                     </div>
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Save</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Edit Ticket Modal */}
         {/* Delete Ticket Modal */}
         <div className="modal custom-modal fade" id="delete_ticket" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Ticket</h3>
                   <p>Are you sure want to delete?</p>
                 </div>
                 <div className="modal-btn delete-action">
                   <div className="row">
                     <div className="col-6">
                       <a href="" className="btn btn-primary continue-btn">Delete</a>
                     </div>
                     <div className="col-6">
                       <a href="" data-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* /Delete Ticket Modal */}
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
                           <span className="avatar">
                             <img src={Avatar_09} alt="" />
                           </span>
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
                           <span className="avatar">
                             <img src={Avatar_10} alt="" />
                           </span>
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
                             <img src={Avatar_10} alt="" />
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
                           <span className="avatar">
                             <img src={Avatar_10} alt="" />
                           </span>
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
                           <span className="avatar">
                             <img src={Avatar_08} alt="" />
                           </span>
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
                           <span className="avatar">
                             <img src={Avatar_11} alt="" />
                           </span>
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

export default Tickets;

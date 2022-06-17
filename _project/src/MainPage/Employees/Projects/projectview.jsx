
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_16,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_11,Avatar_01,PlaceHolder} from "../../../Entryfile/imagepath"

class Projects extends Component {
  
   render() {
      return (         
      <div className="page-wrapper" >
        <Helmet>
            <title>Projects - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Hospital Admin</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Project</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#edit_project"><i className="fa fa-plus" /> Edit Project</a>
              <a href="/purple/app/projects/task-board" className="btn btn-white float-right m-r-10" data-toggle="tooltip" title="Task Board"><i className="fa fa-bars" /></a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                <div className="project-title">
                  <h5 className="card-title">Hospital Administration</h5>
                  <small className="block text-ellipsis m-b-15"><span className="text-xs">2</span> <span className="text-muted">open tasks, </span><span className="text-xs">5</span> <span className="text-muted">tasks completed</span></small>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at. </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-b-20">Uploaded image files</h5>
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img src={PlaceHolder} className="img-fluid" alt="" />
                      </div>
                      <div className="uploaded-img-name">
                        demo.png
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img src={PlaceHolder} className="img-fluid" alt="" />
                      </div>
                      <div className="uploaded-img-name">
                        demo.png
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div className="uploaded-box">
                      <div className="uploaded-img">
                        <img src={PlaceHolder} className="img-fluid" alt="" />
                      </div>
                      <div className="uploaded-img-name">
                        demo.png
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-lg-4 col-xl-3">
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
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-b-20">Uploaded files</h5>
                <ul className="files-list">
                  <li>
                    <div className="files-cont">
                      <div className="file-type">
                        <span className="files-icon"><i className="fa fa-file-pdf-o" /></span>
                      </div>
                      <div className="files-info">
                        <span className="file-name text-ellipsis"><a href="#">AHA Selfcare Mobile Application Test-Cases.xls</a></span>
                        <span className="file-author"><a href="#">John Doe</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                        <div className="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul className="files-action">
                        <li className="dropdown dropdown-action">
                          <a href="" className="dropdown-toggle btn btn-link" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="">Download</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                            <a className="dropdown-item" href="">Delete</a>
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
                        <span className="file-name text-ellipsis"><a href="#">AHA Selfcare Mobile Application Test-Cases.xls</a></span>
                        <span className="file-author"><a href="#">Richard Miles</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                        <div className="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul className="files-action">
                        <li className="dropdown dropdown-action">
                          <a href="" className="dropdown-toggle btn btn-link" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="">Download</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                            <a className="dropdown-item" href="">Delete</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
          <div className="col-lg-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title m-b-15">Project details</h6>
                <table className="table table-striped table-border">
                  <tbody>
                    <tr>
                      <td>Cost:</td>
                      <td className="text-right">$1200</td>
                    </tr>
                    <tr>
                      <td>Total Hours:</td>
                      <td className="text-right">100 Hours</td>
                    </tr>
                    <tr>
                      <td>Created:</td>
                      <td className="text-right">25 Feb, 2019</td>
                    </tr>
                    <tr>
                      <td>Deadline:</td>
                      <td className="text-right">12 Jun, 2019</td>
                    </tr>
                    <tr>
                      <td>Priority:</td>
                      <td className="text-right">
                        <div className="btn-group">
                          <a href="#" className="badge badge-danger dropdown-toggle" data-toggle="dropdown">Highest </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Highest priority</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> High priority</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-primary" /> Normal priority</a>
                            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low priority</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Created by:</td>
                      <td className="text-right"><a href="/purple/app/profile/employee-profile">Barry Cuda</a></td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td className="text-right">Working</td>
                    </tr>
                  </tbody>
                </table>
                <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                <div className="progress progress-xs mb-0">
                  <div className="progress-bar bg-success" role="progressbar" data-toggle="tooltip" title="40%" style={{width: '40%'}} />
                </div>
              </div>
            </div>
            <div className="card project-user">
              <div className="card-body">
                <h6 className="card-title m-b-20">Assigned Leader <button type="button" className="float-right btn btn-primary btn-sm" data-toggle="modal" data-target="#assign_leader"><i className="fa fa-plus" /> Add</button></h6>
                <ul className="list-box">
                  <li>
                    <a href="/purple/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar"><img alt="" src={Avatar_11} /></span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Wilmer Deluna</span>
                          <div className="clearfix" />
                          <span className="message-content">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/purple/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar"><img alt="" src={Avatar_01} /></span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Lesley Grauer</span>
                          <div className="clearfix" />
                          <span className="message-content">Team Leader</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card project-user">
              <div className="card-body">
                <h6 className="card-title m-b-20">
                  Assigned users 
                  <button type="button" className="float-right btn btn-primary btn-sm" data-toggle="modal" data-target="#assign_user"><i className="fa fa-plus" /> Add</button>
                </h6>
                <ul className="list-box">
                  <li>
                    <a href="/purple/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar"><img alt="" src={Avatar_02} /></span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <div className="clearfix" />
                          <span className="message-content">Web Designer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/purple/app/profile/employee-profile">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar"><img alt="" src={Avatar_09} /></span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles</span>
                          <div className="clearfix" />
                          <span className="message-content">Web Developer</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Assign Leader Modal */}
      <div id="assign_leader" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign Leader to this project</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input placeholder="Search to add a leader" className="form-control search-input" type="text" />
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
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assign Leader Modal */}
      {/* Assign User Modal */}
      <div id="assign_user" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Assign the user to this project</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input placeholder="Search a user to assign" className="form-control search-input" type="text" />
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
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Assign User Modal */}
      {/* Edit Project Modal */}
      <div id="edit_project" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Project</h5>
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
                      <input className="form-control" defaultValue="Project Management" type="text" />
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
                      <input placeholder="$50" className="form-control" defaultValue="$5000" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>&nbsp;</label>
                      <select className="select">
                        <option>Hourly</option>
                        <option >Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option >High</option>
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
                  <textarea rows={4} className="form-control" placeholder="Enter your message here" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Project Modal */}
    </div>
      );
   }
}

export default Projects;

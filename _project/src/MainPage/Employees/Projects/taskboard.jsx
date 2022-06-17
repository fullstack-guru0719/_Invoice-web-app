
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_16,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_11,Avatar_12,Avatar_01} from "../../../Entryfile/imagepath"

class TaskBoard extends Component {
   render() {
      return (         
      <div className="page-wrapper">
        <Helmet>
            <title>Task Board - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Hospital Admin</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Task Board</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row board-view-header">
          <div className="col-4">
            <div className="pro-teams">
              <div className="pro-team-lead">
                <h4>Lead</h4>
                <div className="avatar-group">
                  <div className="avatar">
                    <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_11} />
                  </div>
                  <div className="avatar">
                    <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_01} />
                  </div>
                  <div className="avatar">
                    <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_16} />
                  </div>
                  <div className="avatar">
                    <a href="" className="avatar-title rounded-circle border border-white" data-toggle="modal" data-target="#assign_leader"><i className="fa fa-plus" /></a>
                  </div>
                </div>
              </div>
              <div className="pro-team-members">
                <h4>Team</h4>
                <div className="avatar-group">
                  <div className="avatar">
                    <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_02} />
                  </div>
                  <div className="avatar">
                    <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_09} />
                  </div>
                  <div className="avatar">
                    <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_12} />
                  </div>
                  <div className="avatar">
                    <a href="" className="avatar-title rounded-circle border border-white" data-toggle="modal" data-target="#assign_user"><i className="fa fa-plus" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 text-right">
            <a href="#" className="btn btn-white float-right ml-2" data-toggle="modal" data-target="#add_task_board"><i className="fa fa-plus" /> Create List</a>
            <a href="/purple/app/projects/projects-view" className="btn btn-white float-right" title="View Board"><i className="fa fa-link" /></a>
          </div>
          <div className="col-12">
            <div className="pro-progress">
              <div className="pro-progress-bar">
                <h4>Progress</h4>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: '20%'}} />
                </div>
                <span>20%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="kanban-board card mb-0">
          <div className="card-body">
            <div className="kanban-cont">
              <div className="kanban-list kanban-danger">
                <div className="kanban-header">
                  <span className="status-title">Pending</span>
                  <div className="dropdown kanban-action">
                    <a href="" data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_board">Edit</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
                <div className="kanban-wrap">
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-danger">High</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Make a wireframe</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-success">Low</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                            <span className="task-user-count">+2</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-warning">Normal</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                            <span className="task-user-count">+2</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-new-task">
                  <a href="" data-toggle="modal" data-target="#add_task_modal">Add New Task</a>
                </div>
              </div>
              <div className="kanban-list kanban-info">
                <div className="kanban-header">
                  <span className="status-title">Progress</span>
                  <div className="dropdown kanban-action">
                    <a href="" data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_board">Edit</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
                <div className="kanban-wrap">
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-warning">Normal</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-danger">High</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                            <span className="task-user-count">+2</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-new-task">
                  <a href="" data-toggle="modal" data-target="#add_task_modal">Add New Task</a>
                </div>
              </div>
              <div className="kanban-list kanban-success">
                <div className="kanban-header">
                  <span className="status-title">Completed</span>
                  <div className="dropdown kanban-action">
                    <a href="" data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_board">Edit</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
                <div className="kanban-wrap ks-empty">
                </div>
                <div className="add-new-task">
                  <a href="" data-toggle="modal" data-target="#add_task_modal">Add New Task</a>
                </div>
              </div>
              <div className="kanban-list kanban-warning">
                <div className="kanban-header">
                  <span className="status-title">Inprogress</span>
                  <div className="dropdown kanban-action">
                    <a href="" data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Edit</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
                <div className="kanban-wrap">
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-success">Low</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                            <span className="task-user-count">+2</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-new-task">
                  <a href="" data-toggle="modal" data-target="#add_task_modal">Add New Task</a>
                </div>
              </div>
              <div className="kanban-list kanban-purple">
                <div className="kanban-header">
                  <span className="status-title">On Hold</span>
                  <div className="dropdown kanban-action">
                    <a href="" data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_board">Edit</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
                <div className="kanban-wrap">
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-danger">High</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                            <span className="task-user-count">+2</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-new-task">
                  <a href="" data-toggle="modal" data-target="#add_task_modal">Add New Task</a>
                </div>
              </div>
              <div className="kanban-list kanban-primary">
                <div className="kanban-header">
                  <span className="status-title">Review</span>
                  <div className="dropdown kanban-action">
                    <a href="" data-toggle="dropdown">
                      <i className="fa fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_board">Edit</a>
                      <a className="dropdown-item" href="#">Delete</a>
                    </div>
                  </div>
                </div>
                <div className="kanban-wrap">
                  <div className="card panel">
                    <div className="kanban-box">
                      <div className="task-board-header">
                        <span className="status-title"><a href="task-view.html">Website redesign</a></span>
                        <div className="dropdown kanban-task-action">
                          <a href="" data-toggle="dropdown">
                            <i className="fa fa-angle-down" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_task_modal">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div className="task-board-body">
                        <div className="kanban-info">
                          <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <span>70%</span>
                        </div>
                        <div className="kanban-footer">
                          <span className="task-info-cont">
                            <span className="task-date"><i className="fa fa-clock-o" /> Sep 26</span>
                            <span className="task-priority badge bg-inverse-danger">High</span>
                          </span>
                          <span className="task-users">
                            <img src={Avatar_12} className="task-avatar" width={24} height={24} />
                            <span className="task-user-count">+2</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-new-task">
                  <a href="" data-toggle="modal" data-target="#add_task_modal">Add New Task</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <div id="add_task_board" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Task Board</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Task Board Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group task-board-color">
                  <label>Task Board Color</label>
                  <div className="board-color-list">
                    <label className="board-control board-primary">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="primary" defaultChecked />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-success">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="success" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-info">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="info" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-purple">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="purple" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-warning">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="warning" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-danger">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="danger" />
                      <span className="board-indicator" />
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="edit_task_board" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task Board</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Task Board Name</label>
                  <input type="text" className="form-control" defaultValue="Pending" />
                </div>
                <div className="form-group task-board-color">
                  <label>Task Board Color</label>
                  <div className="board-color-list">
                    <label className="board-control board-primary">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="primary" defaultChecked />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-success">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="success" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-info">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="info" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-purple">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="purple" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-warning">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="warning" />
                      <span className="board-indicator" />
                    </label>
                    <label className="board-control board-danger">
                      <input name="radio" type="radio" className="board-control-input" defaultValue="danger" />
                      <span className="board-indicator" />
                    </label>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="new_project" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create New Project</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Project Name</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Create Project</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
      {/* Add Task Modal */}
      <div id="add_task_modal" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Task</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Task Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Task Priority</label>
                  <select className="form-control select">
                    <option>Select</option>
                    <option>High</option>
                    <option>Normal</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                </div>
                <div className="form-group">
                  <label>Task Followers</label>
                  <input type="text" className="form-control" placeholder="Search to add" />
                  <div className="task-follower-list">
                    <span data-toggle="tooltip" title="John Doe">
                      <img src={Avatar_02} className="avatar" alt="John Doe" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                    <span data-toggle="tooltip" title="Richard Miles">
                      <img src={Avatar_09} className="avatar" alt="Richard Miles" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                    <span data-toggle="tooltip" title="John Smith">
                      <img src={Avatar_10} className="avatar" alt="John Smith" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                    <span data-toggle="tooltip" title="Mike Litorus">
                      <img src={Avatar_05} className="avatar" alt="Mike Litorus" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Task Modal */}
      {/* Edit Task Modal */}
      <div id="edit_task_modal" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Task Name</label>
                  <input type="text" className="form-control" defaultValue="Website Redesign" />
                </div>
                <div className="form-group">
                  <label>Task Priority</label>
                  <select className="form-control select">
                    <option>Select</option>
                    <option >High</option>
                    <option>Normal</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" type="text" defaultValue="20/08/2019" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Task Followers</label>
                  <input type="text" className="form-control" placeholder="Search to add" />
                  <div className="task-follower-list">
                    <span data-toggle="tooltip" title="John Doe">
                      <img src={Avatar_02} className="avatar" alt="John Doe" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                    <span data-toggle="tooltip" title="Richard Miles">
                      <img src={Avatar_09} className="avatar" alt="Richard Miles" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                    <span data-toggle="tooltip" title="John Smith">
                      <img src={Avatar_10} className="avatar" alt="John Smith" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                    <span data-toggle="tooltip" title="Mike Litorus">
                      <img src={Avatar_05} className="avatar" alt="Mike Litorus" width={20} height={20} />
                      <i className="fa fa-times" />
                    </span>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Task Modal */}
    </div>
      );
   }
}

export default TaskBoard;

/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_01,Avatar_02,Avatar_05,Avatar_06,Avatar_07,Avatar_09,Avatar_10,Avatar_11,Avatar_12,Avatar_13,Avatar_14,Avatar_16,Avatar_18,
  Avatar_19,Avatar_21,Avatar_28,Avatar_29} from '../../../Entryfile/imagepath'


export default class TermsCondition extends Component {
  render() {
    return (
        <div className="page-wrapper">
        <Helmet>
            <title>Search - HRMS admin Template</title>
            <meta name="description" content="Subscriptions" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Search</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                  <li className="breadcrumb-item active">Search</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Content Starts */}
          <div className="row">
            <div className="col-12">
              {/* Search Form */}
              <div className="main-search">
                <form action="#">
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">Search</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* /Search Form */}
              <div className="search-result">
                <h3>Search Result Found For: <u>Keyword</u></h3>
                <p>215 Results found</p>
              </div>
              <div className="search-lists">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item"><a className="nav-link active" href="#results_projects" data-toggle="tab">Projects</a></li>
                  <li className="nav-item"><a className="nav-link" href="#results_clients" data-toggle="tab">Clients</a></li>
                  <li className="nav-item"><a className="nav-link" href="#results_users" data-toggle="tab">Users</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane show active" id="results_projects">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                        <div className="card">
                          <div className="card-body">
                            <div className="dropdown dropdown-action profile-action">
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
                            <div className="dropdown dropdown-action profile-action">
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
                            <div className="dropdown dropdown-action profile-action">
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
                                  <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05}/></a>
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
                            <div className="dropdown dropdown-action profile-action">
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
                  <div className="tab-pane" id="results_clients">
                    <div className="row staff-grid-row">
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_19} /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Global Technologies</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Barry Cuda</a></h5>
                          <div className="small text-muted">CEO</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_29} /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Delta Infotech</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Tressa Wexler</a></h5>
                          <div className="small text-muted">Manager</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_07} alt="" /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Cream Inc</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Ruby Bartlett</a></h5>
                          <div className="small text-muted">CEO</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_06} alt="" /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Wellware Company</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Misty Tison</a></h5>
                          <div className="small text-muted">CEO</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_14} /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Mustang Technologies</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Daniel Deacon</a></h5>
                          <div className="small text-muted">CEO</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_18} /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">International Software Inc</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Walter Weaver</a></h5>
                          <div className="small text-muted">CEO</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_28} /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Mercury Software Inc</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Amanda Warren</a></h5>
                          <div className="small text-muted">CEO</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                        <div className="profile-widget">
                          <div className="profile-img">
                            <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_13} /></a>
                          </div>
                          <div className="dropdown profile-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Carlson Tech</a></h4>
                          <h5 className="user-name m-t-10 mb-0 text-ellipsis"><a href="/purple/app/profile/client-profile">Betty Carlson</a></h5>
                          <div className="small text-muted">CEO</div>
                          <a href="/purple/conversation/chat" className="btn btn-white btn-sm m-t-10 mr-1">Message</a>
                          <a href="/purple/app/profile/client-profile" className="btn btn-white btn-sm m-t-10">View Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="results_users">
                    <div className="table-responsive">
                      <table className="table table-striped custom-table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Created Date</th>
                            <th>Role</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img src={Avatar_21} alt="" /></a>
                                <a href="/purple/app/profile/employee-profile">Daniel Porter <span>Admin</span></a>
                              </h2>
                            </td>
                            <td>danielporter@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-danger">Admin</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02} /></a>
                                <a href="/purple/app/profile/employee-profile">John Doe <span>Web Designer</span></a>
                              </h2>
                            </td>
                            <td>johndoe@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_09} /></a>
                                <a href="/purple/app/profile/employee-profile">Richard Miles <span>Admin</span></a>
                              </h2>
                            </td>
                            <td>richardmiles@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_10} /></a>
                                <a href="/purple/app/profile/employee-profile">John Smith <span>Android Developer</span></a>
                              </h2>
                            </td>
                            <td>johnsmith@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_05} /></a>
                                <a href="/purple/app/profile/employee-profile">Mike Litorus <span>IOS Developer</span></a>
                              </h2>
                            </td>
                            <td>mikelitorus@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_11} /></a>
                                <a href="/purple/app/profile/employee-profile">Wilmer Deluna <span>Team Leader</span></a>
                              </h2>
                            </td>
                            <td>wilmerdeluna@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img src={Avatar_19}
                                 alt="" /></a>
                                <a href="/purple/app/profile/employee-profile">Barry Cuda <span>Global Technologies</span></a>
                              </h2>
                            </td>
                            <td>barrycuda@example.com</td>
                            <td>Global Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-info">Client</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Content End */}
        </div>
        {/* /Page Content */}
      </div>
    );
  }
}

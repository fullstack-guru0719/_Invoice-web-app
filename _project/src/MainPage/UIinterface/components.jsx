/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {headerlogo,lnEnglish,lnFrench,lnSpanish,lnGerman,Avatar_02,Avatar_03,Avatar_17,Avatar_06,
    Avatar_13,Avatar_09,Avatar_05,Avatar_08,Avatar_21,Img_01} from '../../Entryfile/imagepath';

// import "Assets/js/bootstrap.min.js"
// import "Assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"
// import "Assets/plugins/sticky-kit-master/dist/sticky-kit.js"
// import "Assets/js/sticky.js"

class UIComponents extends Component {
  
   render() {

    return (
         <div >
            <Helmet>
               <title>Components - HRMS Admin Template</title>
               <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Header */}
          <div className="header">
            {/* Logo */}
            <div className="header-left">
              <a href="/purple/app/main/dashboard" className="logo">
                <img src={headerlogo} width={40} height={40} alt="" />
              </a>
            </div>
            {/* /Logo */}
            {/* Header Title */}
            <div className="page-title-box">
              <h3>Dreamguy's Technologies</h3>
            </div>
            {/* /Header Title */}
            <a id="mobile_btn" className="mobile_btn" href="#sidebar"><i className="fa fa-bars" /></a>
            {/* Header Menu */}
            <ul className="nav user-menu">
              {/* Search */}
              <li className="nav-item">
                <div className="top-nav-search">
                  <a href="" className="responsive-search">
                    <i className="fa fa-search" />
                  </a>
                  <form action="/purple/app/pages/search">
                    <input className="form-control" type="text" placeholder="Search here" />
                    <button className="btn" type="submit"><i className="fa fa-search" /></button>
                  </form>
                </div>
              </li>
              {/* /Search */}
              {/* Flag */}
              <li className="nav-item dropdown has-arrow flag-nav">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">
                  <img src={lnEnglish} alt="" height={20} /> <span>English</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="" className="dropdown-item">
                    <img src={lnEnglish} alt="" height={16} /> English
                  </a>
                  <a href="" className="dropdown-item">
                    <img src={lnFrench} alt="" height={16} /> French
                  </a>
                  <a href="" className="dropdown-item">
                    <img src={lnSpanish} alt="" height={16} /> Spanish
                  </a>
                  <a href="" className="dropdown-item">
                    <img src={lnGerman} alt="" height={16} /> German
                  </a>
                </div>
              </li>
              {/* /Flag */}
              {/* Notifications */}
              <li className="nav-item dropdown">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <i className="fa fa-bell-o" /> <span className="badge badge-pill">3</span>
                </a>
                <div className="dropdown-menu notifications">
                  <div className="topnav-dropdown-header">
                    <span className="notification-title">Notifications</span>
                    <a href="" className="clear-noti"> Clear All </a>
                  </div>
                  <div className="noti-content">
                    <ul className="notification-list">
                      <li className="notification-message">
                        <a href="/purple/app/administrator/activities">
                          <div className="media">
                            <span className="avatar">
                              <img alt="" src={Avatar_02} />
                            </span>
                            <div className="media-body">
                              <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                              <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/app/administrator/activities">
                          <div className="media">
                            <span className="avatar">
                              <img alt="" src={Avatar_03} />
                            </span>
                            <div className="media-body">
                              <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                              <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/app/administrator/activities">
                          <div className="media">
                            <span className="avatar">
                              <img alt="" src={Avatar_06} />
                            </span>
                            <div className="media-body">
                              <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                              <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/app/administrator/activities">
                          <div className="media">
                            <span className="avatar">
                              <img alt="" src={Avatar_17} />
                            </span>
                            <div className="media-body">
                              <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                              <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/app/administrator/activities">
                          <div className="media">
                            <span className="avatar">
                              <img alt="" src={Avatar_13} />
                            </span>
                            <div className="media-body">
                              <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                              <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="topnav-dropdown-footer">
                    <a href="/purple/app/administrator/activities">View all Notifications</a>
                  </div>
                </div>
              </li>
              {/* /Notifications */}
              {/* Message Notifications */}
              <li className="nav-item dropdown">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <i className="fa fa-comment-o" /> <span className="badge badge-pill">8</span>
                </a>
                <div className="dropdown-menu notifications">
                  <div className="topnav-dropdown-header">
                    <span className="notification-title">Messages</span>
                    <a href="" className="clear-noti"> Clear All </a>
                  </div>
                  <div className="noti-content">
                    <ul className="notification-list">
                      <li className="notification-message">
                        <a href="/purple/conversation/chat">
                          <div className="list-item">
                            <div className="list-left">
                              <span className="avatar">
                                <img alt="" src={Avatar_09} />
                              </span>
                            </div>
                            <div className="list-body">
                              <span className="message-author">Richard Miles </span>
                              <span className="message-time">12:28 AM</span>
                              <div className="clearfix" />
                              <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/conversation/chat">
                          <div className="list-item">
                            <div className="list-left">
                              <span className="avatar">
                                <img alt="" src={Avatar_02} />
                              </span>
                            </div>
                            <div className="list-body">
                              <span className="message-author">John Doe</span>
                              <span className="message-time">6 Mar</span>
                              <div className="clearfix" />
                              <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/conversation/chat">
                          <div className="list-item">
                            <div className="list-left">
                              <span className="avatar">
                                <img alt="" src={Avatar_03} />
                              </span>
                            </div>
                            <div className="list-body">
                              <span className="message-author"> Tarah Shropshire </span>
                              <span className="message-time">5 Mar</span>
                              <div className="clearfix" />
                              <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/conversation/chat">
                          <div className="list-item">
                            <div className="list-left">
                              <span className="avatar">
                                <img alt="" src={Avatar_05} />
                              </span>
                            </div>
                            <div className="list-body">
                              <span className="message-author">Mike Litorus</span>
                              <span className="message-time">3 Mar</span>
                              <div className="clearfix" />
                              <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="notification-message">
                        <a href="/purple/conversation/chat">
                          <div className="list-item">
                            <div className="list-left">
                              <span className="avatar">
                                <img alt="" src={Avatar_08} />
                              </span>
                            </div>
                            <div className="list-body">
                              <span className="message-author"> Catherine Manseau </span>
                              <span className="message-time">27 Feb</span>
                              <div className="clearfix" />
                              <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="topnav-dropdown-footer">
                    <a href="/purple/conversation/chat">View all Messages</a>
                  </div>
                </div>
              </li>
              {/* /Message Notifications */}
              <li className="nav-item dropdown has-arrow main-drop">
                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                  <span className="user-img"><img src={Avatar_21} alt="" />
                    <span className="status online" /></span>
                  <span>Admin</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/purple/app/profile/employee-profile">My Profile</a>
                  <a className="dropdown-item" href="/purple/settings/companysetting">Settings</a>
                  <a className="dropdown-item" href="/purple/login">Logout</a>
                </div>
              </li>
            </ul>
            {/* /Header Menu */}
            {/* Mobile Menu */}
            <div className="dropdown mobile-user-menu">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/purple/app/profile/employee-profile">My Profile</a>
                <a className="dropdown-item" href="/purple/settings/companysetting">Settings</a>
                <a className="dropdown-item" href="/purple/login">Logout</a>
              </div>
            </div>
            {/* /Mobile Menu */}
          </div>
          {/* /Header */}
          {/* Sidebar */}
            <div className="sidebar stickyside" id="sidebar">
              <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                  <ul>
                    <li className="menu-title"> 
                      Components
                    </li>
                    <li> 
                      <a href="#comp_alerts" className="active">Alerts</a>
                    </li>
                    <li> 
                      <a href="#comp_breadcrumbs">Breadcrumbs</a>
                    </li>
                    <li> 
                      <a href="#comp_buttons">Buttons</a>
                    </li>
                    <li> 
                      <a href="#comp_cards">Cards</a>
                    </li>
                    <li> 
                      <a href="#comp_dropdowns">Dropdowns</a>
                    </li>
                    <li> 
                      <a href="#comp_pagination">Pagination</a>
                    </li>
                    <li> 
                      <a href="#comp_progress">Progress</a>
                    </li>
                    <li> 
                      <a href="#comp_tabs">Tabs</a>
                    </li>
                    <li> 
                      <a href="#comp_typography">Typography</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
          {/* /Sidebar */}
          {/* Page Wrapper */}
          <div className="page-wrapper">
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Components</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item active">Components</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              {/* Alerts */}
              <section className="comp-section" id="comp_alerts">
                <h3 className="section-title">Alerts</h3>
                <div>
                  <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Warning!</strong> There was a problem with your <a href="#" className="alert-link">network connection</a>.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> A <a href="#" className="alert-link">problem</a> has been occurred while submitting your data.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your <a href="#" className="alert-link">message</a> has been sent successfully.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="alert alert-info alert-dismissible fade show" role="alert">
                    <strong>Note!</strong> Please read the <a href="#" className="alert-link">comments</a> carefully.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="alert alert-light alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="alert alert-dark alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
              </section>
              {/* /Alerts */}
              {/* Breadcrumbs */}
              <section className="comp-section" id="comp_breadcrumbs">
                <h3 className="section-title">Breadcrumbs</h3>
                <div>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Products</li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item"><a href="#">Products</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Accessories</li>
                    </ol>
                  </nav>
                </div>
              </section>
              {/* /Breadcrumbs */}
              {/* Buttons */}
              <section className="comp-section comp-buttons" id="comp_buttons">
                <h3 className="section-title">Buttons</h3>
                <div>
                  <h4 className="card-title">Default Button</h4>
                  <button type="button" className="btn btn-primary mr-1">Primary</button>
                  <button type="button" className="btn btn-secondary mr-1">Secondary</button>
                  <button type="button" className="btn btn-success mr-1">Success</button>
                  <button type="button" className="btn btn-danger mr-1">Danger</button>
                  <button type="button" className="btn btn-warning mr-1">Warning</button>
                  <button type="button" className="btn btn-info mr-1">Info</button>
                  <button type="button" className="btn btn-light mr-1">Light</button>
                  <button type="button" className="btn btn-dark mr-1">Dark</button>
                  <button type="button" className="btn btn-link mr-1">Link</button>
                  <hr />
                  <h4 className="card-title">Button Sizes</h4>
                  <p>
                    <button type="button" className="btn btn-primary btn-lg mr-1">Primary</button>
                    <button type="button" className="btn btn-secondary btn-lg mr-1">Secondary</button>
                    <button type="button" className="btn btn-success btn-lg mr-1">Success</button>
                    <button type="button" className="btn btn-danger btn-lg mr-1">Danger</button>
                    <button type="button" className="btn btn-warning btn-lg mr-1">Warning</button>
                    <button type="button" className="btn btn-info btn-lg mr-1">Info</button>
                    <button type="button" className="btn btn-light btn-lg mr-1">Light</button>
                    <button type="button" className="btn btn-dark btn-lg mr-1">Dark</button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary mr-1">Primary</button>
                    <button type="button" className="btn btn-secondary mr-1">Secondary</button>
                    <button type="button" className="btn btn-success mr-1">Success</button>
                    <button type="button" className="btn btn-danger mr-1">Danger</button>
                    <button type="button" className="btn btn-warning mr-1">Warning</button>
                    <button type="button" className="btn btn-info mr-1">Info</button>
                    <button type="button" className="btn btn-light mr-1">Light</button>
                    <button type="button" className="btn btn-dark mr-1">Dark</button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary btn-sm mr-1">Primary</button>
                    <button type="button" className="btn btn-secondary btn-sm mr-1">Secondary</button>
                    <button type="button" className="btn btn-success btn-sm mr-1">Success</button>
                    <button type="button" className="btn btn-danger btn-sm mr-1">Danger</button>
                    <button type="button" className="btn btn-warning btn-sm mr-1">Warning</button>
                    <button type="button" className="btn btn-info btn-sm mr-1">Info</button>
                    <button type="button" className="btn btn-light btn-sm mr-1">Light</button>
                    <button type="button" className="btn btn-dark btn-sm mr-1">Dark</button>
                  </p>
                  <hr />
                  <h4 className="card-title">Button Groups</h4>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-lg">
                      <button type="button" className="btn btn-primary">Left</button>
                      <button type="button" className="btn btn-primary">Middle</button>
                      <button type="button" className="btn btn-primary">Right</button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">Left</button>
                      <button type="button" className="btn btn-primary">Middle</button>
                      <button type="button" className="btn btn-primary">Right</button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-primary">Left</button>
                      <button type="button" className="btn btn-primary">Middle</button>
                      <button type="button" className="btn btn-primary">Right</button>
                    </div>
                  </div>
                </div>
              </section>
              {/* Buttons */}
              {/* Cards */}
              <section className="comp-section comp-cards" id="comp_cards">
                <h3 className="section-title">Cards</h3>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <img alt="" src={Img_01} className="card-img-top" />
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with image and links</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="card-link" href="#">Card link</a>
                        <a className="card-link" href="#">Another link</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <img alt="" src={Img_01} className="card-img-top" />
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with image and button</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary" href="#">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <img alt="" src={Img_01} className="card-img-top" />
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with image and list</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with links</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="card-link" href="#">Card link</a>
                        <a className="card-link" href="#">Another link</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with button</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary" href="#">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Card with list</h5>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        This is my header
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                      <div className="card-footer text-muted">
                        This is my footer
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <ul role="tablist" className="nav nav-tabs card-header-tabs float-right">
                          <li className="nav-item">
                            <a href="#tab-1" data-toggle="tab" className="nav-link active">Active</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-2" data-toggle="tab" className="nav-link">Link</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-3" data-toggle="tab" className="nav-link disabled">Disabled</a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content pt-0">
                          <div role="tabpanel" id="tab-1" className="tab-pane fade show active">
                            <h5 className="card-title">Card with tabs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-2" className="tab-pane fade text-center">
                            <h5 className="card-title">Card with tabs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-3" className="tab-pane fade">
                            <h5 className="card-title">Card with tabs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <ul role="tablist" className="nav nav-pills card-header-pills float-right">
                          <li className="nav-item">
                            <a href="#tab-4" data-toggle="tab" className="nav-link active">Active</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-5" data-toggle="tab" className="nav-link">Link</a>
                          </li>
                          <li className="nav-item">
                            <a href="#tab-6" data-toggle="tab" className="nav-link disabled">Disabled</a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content">
                          <div role="tabpanel" id="tab-4" className="tab-pane fade show active">
                            <h5 className="card-title">Card with pills</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-5" className="tab-pane fade text-center">
                            <h5 className="card-title">Card with pills</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                          <div role="tabpanel" id="tab-6" className="tab-pane fade">
                            <h5 className="card-title">Card with pills</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a className="btn btn-primary" href="#">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Cards */}
              {/* Dropdowns */}
              <section className="comp-section comp-dropdowns" id="comp_dropdowns">
                <h3 className="section-title">Dropdowns</h3>
                <div>
                  <h4 className="card-title">Dropdowns within Text</h4>
                  <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false"> Dropdown </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                    </div>
                  </div>
                  <hr />
                  <h4 className="card-title">Dropdowns within Buttons</h4>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-info dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-warning dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <hr />
                  <h4 className="card-title">Split button dropdowns</h4>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary">Action</button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-secondary">Action</button>
                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-info">Action</button>
                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-success">Action</button>
                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-warning">Action</button>
                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-danger">Action</button>
                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Dropdowns */}
              {/* Pagination */}
              <section className="comp-section" id="comp_pagination">
                <h3 className="section-title">Pagination</h3>
                <div className="pagination-box">
                  <div>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active">
                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-lg">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active">
                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-sm">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active">
                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* /Pagination */}
              {/* Progress */}
              <section className="comp-section" id="comp_progress">
                <h3 className="section-title">Progress</h3>
                <div className="progress-example">
                  <h5 className="text-muted">Large Progress Bars</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-lg">
                          <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-lg">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-lg">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-lg">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-lg">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-lg">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-lg">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <h5 className="text-muted">Default Progress Bars</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <h5 className="text-muted">Medium Progress Bars</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-md">
                          <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-md">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-md">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-md">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <h5 className="text-muted">Small Progress Bars</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-sm">
                          <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-sm">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-sm">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-sm">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-sm">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-sm">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-sm">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <h5 className="text-muted">Extra Small Progress Bars</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-xs">
                          <div className="progress-bar w-75" role="progressbar" style={{width: '10%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Progress */}
              {/* Tabs */}
              <section className="comp-section" id="comp_tabs">
                <h3 className="section-title">Tabs</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Basic tabs</h4>
                        <ul className="nav nav-tabs">
                          <li className="nav-item"><a className="nav-link active" href="#basictab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#basictab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#basictab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="basictab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="basictab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="basictab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Basic justified tabs</h4>
                        <ul className="nav nav-tabs nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#basic-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#basic-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item dropdown">
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">Dropdown</a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#basic-justified-tab3" data-toggle="tab">Dropdown 1</a>
                              <a className="dropdown-item" href="#basic-justified-tab4" data-toggle="tab">Dropdown 2</a>
                            </div>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="basic-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="basic-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="basic-justified-tab3">
                            Tab content 3
                          </div>
                          <div className="tab-pane" id="basic-justified-tab4">
                            Tab content 4
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Top line tabs</h4>
                        <ul className="nav nav-tabs nav-tabs-top">
                          <li className="nav-item"><a className="nav-link active" href="#top-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="top-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="top-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="top-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Top line justified</h4>
                        <ul className="nav nav-tabs nav-tabs-top nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#top-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#top-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="top-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="top-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="top-justified-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6 className="card-title">Bottom line tabs</h6>
                        <ul className="nav nav-tabs nav-tabs-bottom">
                          <li className="nav-item"><a className="nav-link active" href="#bottom-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="bottom-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="bottom-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="bottom-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6 className="card-title">Bottom line justified</h6>
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#bottom-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bottom-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="bottom-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="bottom-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="bottom-justified-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Solid tabs</h4>
                        <ul className="nav nav-tabs nav-tabs-solid">
                          <li className="nav-item"><a className="nav-link active" href="#solid-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Solid justified</h4>
                        <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#solid-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-justified-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Solid Rounded</h4>
                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                          <li className="nav-item"><a className="nav-link active" href="#solid-rounded-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-rounded-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-rounded-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-rounded-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Rounded justified</h4>
                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                          <li className="nav-item"><a className="nav-link active" href="#solid-rounded-justified-tab1" data-toggle="tab">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab2" data-toggle="tab">Profile</a></li>
                          <li className="nav-item"><a className="nav-link" href="#solid-rounded-justified-tab3" data-toggle="tab">Messages</a></li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane show active" id="solid-rounded-justified-tab1">
                            Tab content 1
                          </div>
                          <div className="tab-pane" id="solid-rounded-justified-tab2">
                            Tab content 2
                          </div>
                          <div className="tab-pane" id="solid-rounded-justified-tab3">
                            Tab content 3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Tabs */}
              {/* Typography */}
              <section className="comp-section" id="comp_typography">
                <h3 className="section-title">Typography</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Headings</h4>
                        <h1>h1. Bootstrap heading</h1>
                        <h2>h2. Bootstrap heading</h2>
                        <h3>h3. Bootstrap heading</h3>
                        <h4>h4. Bootstrap heading</h4>
                        <h5>h5. Bootstrap heading</h5>
                        <h6>h6. Bootstrap heading</h6>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Blockquotes</h4>
                        <blockquote>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                        <blockquote className="blockquote">
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Text elements</h4>
                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                        <p><u>This line of text will render as underlined</u></p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p><strong>This line rendered as bold text.</strong></p>
                        <p><em>This line rendered as italicized text.</em></p>
                        <p className="text-monospace">This is in monospace</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Coloured Link</h4>
                        <p className="text-primary">.text-primary</p>
                        <p className="text-secondary">.text-secondary</p>
                        <p className="text-success">.text-success</p>
                        <p className="text-danger">.text-danger</p>
                        <p className="text-warning">.text-warning</p>
                        <p className="text-info">.text-info</p>
                        <p className="text-light bg-dark">.text-light</p>
                        <p className="text-dark">.text-dark</p>
                        <p className="text-muted">.text-muted</p>
                        <p className="text-white bg-dark">.text-white</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Coloured text</h4>
                        <p><a href="#" className="text-primary">Primary link</a></p>
                        <p><a href="#" className="text-secondary">Secondary link</a></p>
                        <p><a href="#" className="text-success">Success link</a></p>
                        <p><a href="#" className="text-danger">Danger link</a></p>
                        <p><a href="#" className="text-warning">Warning link</a></p>
                        <p><a href="#" className="text-info">Info link</a></p>
                        <p><a href="#" className="text-light bg-dark">Light link</a></p>
                        <p><a href="#" className="text-dark">Dark link</a></p>
                        <p><a href="#" className="text-muted">Muted link</a></p>
                        <p><a href="#" className="text-white bg-dark">White link</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bullet Lists</h4>
                        <ul>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bullet Lists</h4>
                        <ol>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Unstyled Lists</h4>
                        <ul className="list-unstyled">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Typography */}
            </div>
            {/* /Page Content */}
          </div>
          
          {/* /Page Wrapper */}
        </div>
      );
   }
}

export default UIComponents;

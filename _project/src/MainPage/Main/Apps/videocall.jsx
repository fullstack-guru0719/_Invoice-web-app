/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {User,Attachment,Avatar_01,Avatar_05,Avatar_02,Avatar_09,Avatar_13,Avatar_16,Video_Call} from '../../../Entryfile/imagepath'

class VideoCall extends Component {
  
   render() {
      return (        
      <div className="page-wrapper">
        <Helmet>
            <title>Video Call - HRMS Admin Template</title>
            <meta name="description" content="Chat"/>					
        </Helmet>
      {/* Main Row */}
      <div className="chat-main-row">
        <div className="chat-main-wrapper">
          <div className="col-lg-9 message-view task-view">
            <div className="chat-window">
              <div className="fixed-header">
                <div className="navbar">
                  <div className="user-details">
                    <div className="float-left user-img">
                      <a className="avatar" href="/purple/app/profile/employee-profile" title="Mike Litorus">
                        <img src={Avatar_05} alt="" className="rounded-circle" />
                        <span className="status online" />
                      </a>
                    </div>
                    <div className="user-info float-left">
                      <a href="/purple/app/profile/employee-profile"><span>Mike Litorus</span></a>
                      <span className="last-seen">Online</span>
                    </div>
                  </div>
                  <ul className="nav float-right custom-menu">
                    <li className="nav-item">
                      <a href="#task_window" id="task_chat" className="task-chat profile-rightbar float-right"><i className="fa fa-comments" /></a>
                    </li>
                    <li className="nav-item dropdown dropdown-action">
                      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="" className="dropdown-item">Settings</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="chat-contents">
                <div className="chat-content-wrap">
                  <div className="user-video">
                    <img src={Video_Call} alt="" />
                  </div>
                  <div className="my-video">
                    <ul>
                      <li>
                        <img src={Avatar_01} className="img-fluid" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chat-footer">
                <div className="call-icons">
                  <span className="call-duration">00:59</span>
                  <ul className="call-items">
                    <li className="call-item">
                      <a href="" title="Enable Video" data-placement="top" data-toggle="tooltip">
                        <i className="fa fa-video-camera camera" />
                      </a>
                    </li>
                    <li className="call-item">
                      <a href="" title="Mute Audio" data-placement="top" data-toggle="tooltip">
                        <i className="fa fa-microphone microphone" />
                      </a>
                    </li>
                    <li className="call-item">
                      <a href="" title="Add User" data-placement="top" data-toggle="tooltip">
                        <i className="fa fa-user-plus" />
                      </a>
                    </li>
                    <li className="call-item">
                      <a href="" title="Full Screen" data-placement="top" data-toggle="tooltip">
                        <i className="fa fa-arrows-v full-screen" />
                      </a>
                    </li>
                  </ul>
                  <div className="end-call">
                    <a href="">
                      <i className="material-icons">call_end</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 message-view chat-profile-view chat-sidebar" id="task_window">
            <div className="chat-window video-window">
              <div className="fixed-header">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item"><a className="nav-link active" href="#calls_tab" data-toggle="tab">Calls</a></li>
                  <li className="nav-item"><a className="nav-link" href="#chats_tab" data-toggle="tab">Chats</a></li>
                  <li className="nav-item"><a className="nav-link" href="#profile_tab" data-toggle="tab">Profile</a></li>
                </ul>
              </div>
              <div className="tab-content chat-contents">
                <div className="content-full tab-pane show active" id="calls_tab">
                  <div className="chat-wrap-inner">
                    <div className="chat-box">
                      <div className="chats">
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/purple/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_02} />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                <div className="call-details">
                                  <i className="material-icons">phone_missed</i>
                                  <div className="call-info">
                                    <div className="call-user-details">
                                      <span className="call-description">Jeffrey Warden missed the call</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                <div className="call-details">
                                  <i className="material-icons">call_end</i>
                                  <div className="call-info">
                                    <div className="call-user-details"><span className="call-description">This call has ended</span></div>
                                    <div className="call-timing">Duration: <strong>5 min 57 sec</strong></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat-line">
                          <span className="chat-date">January 29th, 2019</span>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/purple/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_09} className="img-fluid rounded-circle" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">Richard Miles</span> <span className="chat-time">8:35 am</span>
                                <div className="call-details">
                                  <i className="material-icons">phone_missed</i>
                                  <div className="call-info">
                                    <div className="call-user-details">
                                      <span className="call-description">You missed the call</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a href="/purple/app/profile/employee-profile" className="avatar">
                              <img alt="" src={Avatar_09} />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-bubble">
                              <div className="chat-content">
                                <span className="task-chat-user">You</span> <span className="chat-time">8:35 am</span>
                                <div className="call-details">
                                  <i className="material-icons">ring_volume</i>
                                  <div className="call-info">
                                    <div className="call-user-details">
                                      <a href="#" className="call-description call-description--linked" data-qa="call_attachment_link">Calling John Smith ...</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-full tab-pane" id="chats_tab">
                  <div className="chat-window">
                    <div className="chat-contents">
                      <div className="chat-content-wrap">
                        <div className="chat-wrap-inner">
                          <div className="chat-box">
                            <div className="chats">
                              <div className="chat chat-left">
                                <div className="chat-avatar">
                                  <a href="/purple/app/profile/employee-profile" className="avatar">
                                    <img alt="" src={Avatar_09} />
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
                              <div className="chat chat-left">
                                <div className="chat-avatar">
                                  <a href="/purple/app/profile/employee-profile" className="avatar">
                                    <img alt="" src={Avatar_09} />
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
                              <div className="chat-line">
                                <span className="chat-date">January 29th, 2019</span>
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-footer">
                      <div className="message-bar">
                        <div className="message-inner">
                          <a className="link attach-icon" href="#" data-toggle="modal" data-target="#drag_files"><img src={Attachment} alt="" /></a>
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
                    </div>
                  </div>
                </div>
                <div className="content-full tab-pane" id="profile_tab">
                  <div className="display-table">
                    <div className="table-row">
                      <div className="table-body">
                        <div className="table-content">
                          <div className="chat-profile-img">
                            <div className="edit-profile-img">
                              <img src={Avatar_09} alt="" />
                              <span className="change-img">Change Image</span>
                            </div>
                            <h3 className="user-name m-t-10 mb-0">John Doe</h3>
                            <small className="text-muted">Web Designer</small>
                            <a href="" className="btn btn-primary edit-btn"><i className="fa fa-pencil" /></a>
                          </div>
                          <div className="chat-profile-info">
                            <ul className="user-det-list">
                              <li>
                                <span>Username:</span>
                                <span className="float-right text-muted">johndoe</span>
                              </li>
                              <li>
                                <span>DOB:</span>
                                <span className="float-right text-muted">24 July</span>
                              </li>
                              <li>
                                <span>Email:</span>
                                <span className="float-right text-muted">johndoe@example.com</span>
                              </li>
                              <li>
                                <span>Phone:</span>
                                <span className="float-right text-muted">9876543210</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                              <li className="nav-item"><a className="nav-link active" href="#all_files" data-toggle="tab">All Files</a></li>
                              <li className="nav-item"><a className="nav-link" href="#my_files" data-toggle="tab">My Files</a></li>
                            </ul>
                            <div className="tab-content">
                              <div className="tab-pane show active" id="all_files">
                                <ul className="files-list">
                                  <li>
                                    <div className="files-cont">
                                      <div className="file-type">
                                        <span className="files-icon"><i className="fa fa-file-pdf-o" /></span>
                                      </div>
                                      <div className="files-info">
                                        <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                        <span className="file-author"><a href="#">Loren Gatlin</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                      </div>
                                      <ul className="files-action">
                                        <li className="dropdown dropdown-action">
                                          <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item" href="">Download</a>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="tab-pane" id="my_files">
                                <ul className="files-list">
                                  <li>
                                    <div className="files-cont">
                                      <div className="file-type">
                                        <span className="files-icon"><i className="fa fa-file-pdf-o" /></span>
                                      </div>
                                      <div className="files-info">
                                        <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                        <span className="file-author"><a href="#">John Doe</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                      </div>
                                      <ul className="files-action">
                                        <li className="dropdown dropdown-action">
                                          <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_horiz</i></a>
                                          <div className="dropdown-menu">
                                            <a className="dropdown-item" href="">Download</a>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Row */}
      {/* Dragfiles Modal */}
      <div id="drag_files" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Drag and drop files upload</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="js-upload-form">
                <div className="upload-drop-zone" id="drop-zone">
                  <i className="fa fa-cloud-upload fa-2x" /> <span className="upload-text">Just drag and drop files here</span>
                </div>
                <h4>Uploading</h4>
                <ul className="upload-list">
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-photo" />
                        photo.png
                      </div>
                      <div className="file-size">1.07 gb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                    </div>
                    <div className="upload-process">37% done</div>
                  </li>
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-file" />
                        task.doc
                      </div>
                      <div className="file-size">5.8 kb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                    </div>
                    <div className="upload-process">37% done</div>
                  </li>
                  <li className="file-list">
                    <div className="upload-wrap">
                      <div className="file-name">
                        <i className="fa fa-photo" />
                        dashboard.png
                      </div>
                      <div className="file-size">2.1 mb</div>
                      <button type="button" className="file-close">
                        <i className="fa fa-close" />
                      </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}} />
                    </div>
                    <div className="upload-process">Completed</div>
                  </li>
                </ul>
              </form>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Dragfiles Modal */}
      {/* Add Group Modal */}
      <div id="add_group" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create a group</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Groups are where your team communicates. They’re best when organized around a topic — #leads, for example.</p>
              <form>
                <div className="form-group">
                  <label>Group Name <span className="text-danger">*</span></label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Send invites to: <span className="text-muted-light">(optional)</span></label>
                  <input className="form-control" type="text" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Group Modal */}
      {/* Add Chat User Modal */}
      <div id="add_chat_user" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Direct Chat</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input placeholder="Search to start a chat" className="form-control search-input" type="text" />
                <span className="input-group-append">
                  <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <h5>Recent Conversations</h5>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar align-self-center"><img alt="" src={Avatar_16} /></span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                        <div className="text-nowrap align-self-center">
                          <div className="online-date">1 day ago</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media ">
                        <span className="avatar align-self-center"><img alt="" src={Avatar_13} /></span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Bernardo Galaviz</div>
                          <span className="designation">Web Developer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">3 days ago</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar align-self-center">
                          <img alt="" src={Avatar_02} />
                        </span>
                        <div className="media-body text-nowrap align-self-center">
                          <div className="user-name">John Doe</div>
                          <span className="designation">Web Designer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">7 months ago</div>
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
      {/* /Add Chat User Modal */}
      {/* Share Files Modal */}
      <div id="share_files" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Share File</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="files-share-list">
                <div className="files-cont">
                  <div className="file-type">
                    <span className="files-icon"><i className="fa fa-file-pdf-o" /></span>
                  </div>
                  <div className="files-info">
                    <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                    <span className="file-author"><a href="#">Bernardo Galaviz</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Share With</label>
                <input className="form-control" type="text" />
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Share Files Modal */}
    </div>
       );
   }
}

export default VideoCall;

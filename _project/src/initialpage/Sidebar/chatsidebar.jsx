/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { User, Avatar_02, Avatar_05, Avatar_09, Avatar_10 } from "../../Entryfile/imagepath"

class Sidebar extends Component {
  render() {

    const { location } = this.props
    let pathname = location.pathname

    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li>
                <Link to="/app"><i className="la la-home" /> <span>Back to Home</span></Link>
              </li>
              <li className="menu-title"><span>My Questions</span> <a href="#" data-toggle="modal" data-target="#add_group"><i className="fa fa-plus" /></a></li>
              <li>
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span>
                  <span className="chat-user">Name of Question 1</span>
                </a>
              </li>
              <li>
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span>
                  <span className="chat-user">Name of Question 2</span>
                </a>
              </li>
              <li>
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span>
                  <span className="chat-user">Name of Question 3</span>
                </a>
              </li>
              <li>
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={User} />
                  </span>
                  <span className="chat-user">Name of Question 4</span>
                </a>
              </li>
              {/* <li className="menu-title">Direct Chats <a href="#" data-toggle="modal" data-target="#add_chat_user"><i className="fa fa-plus" /></a></li>
              <li>
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_02} /><span className="status online" />
                  </span> 
                  <span className="chat-user">John Doe</span> <span className="badge badge-pill bg-danger">1</span>
                </a>
              </li>
              <li>
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_09} /><span className="status offline" />
                  </span> 
                  <span className="chat-user">Richard Miles</span> <span className="badge badge-pill bg-danger">7</span>
                </a>
              </li>
              <li>
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_10} /><span className="status away" />
                  </span> 
                  <span className="chat-user">John Smith</span>
                </a>
              </li>
              <li className="active">
                <a href="/purple/conversation/chat">
                  <span className="chat-avatar-sm user-img">
                    <img className="rounded-circle" alt="" src={Avatar_05} /><span className="status online" />
                  </span> 
                  <span className="chat-user">Mike Litorus</span> <span className="badge badge-pill bg-danger">2</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Sidebar);

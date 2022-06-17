/**
 * App Header
 */
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const { location } = this.props;
    let pathname = location.pathname;

    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className={pathname.includes("invoices") ? "active" : ""}>
                <Link to="/app/accounts/invoices">
                  <i className="la la-file-text" /> <span> Invoices </span>
                </Link>
              </li>
              <li className={pathname.includes("payments") ? "active" : ""}>
                <Link to="/app/accounts/payments">
                  <i className="la la-money" /> <span> Payments </span>
                </Link>
              </li>
              <li className={pathname.includes("messages") ? "active" : ""}>
                <Link to="/app/accounts/messages">
                  <i className="la la-comment" /> <span> Messages </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);

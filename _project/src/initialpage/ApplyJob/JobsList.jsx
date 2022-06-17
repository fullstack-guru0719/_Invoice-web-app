import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {headerlogo,lnEnglish,lnFrench,lnSpanish,lnGerman} from '../../Entryfile/imagepath.jsx'

class JobsList extends Component
{
     
  UNSAFE_componentWillMount()
    {
      localStorage.removeItem('jobview')
        // this.fetchfolders()
    }
    onclickviewjobs(){
        localStorage.setItem("jobview","true")
        this.props.history.push('/horizontal')
        // window.location.reload()
        // this.props.history.push('/horizontal/jobview')
   }
    
    render(){
        return (
          <div className="main-wrapper">
          <Helmet>
                <title>Jobs - HRMS Admin Template</title>
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
            <div className="page-title-box float-left">
              <h3>Dreamguy's Technologies</h3>
            </div>
            {/* /Header Title */}
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
              <li className="nav-item">
                <a className="nav-link" href="/purple/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/purple/register">Register</a>
              </li>
            </ul>
            {/* /Header Menu */}
            {/* Mobile Menu */}
            <div className="dropdown mobile-user-menu">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/purple/login">Login</a>
                <a className="dropdown-item" href="/purple/register">Register</a>
              </div>
            </div>
            {/* /Mobile Menu */}
          </div>
          {/* /Header */}
          {/* Page Wrapper */}
          <div className="page-wrapper job-wrapper">
            {/* Page Content */}
            <div className="content container">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Jobs</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item active">Jobs</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Web Devloper</h3>
                        <h4 className="job-department">Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Full Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Android Devloper</h3>
                        <h4 className="job-department">App Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Part Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Web Devloper</h3>
                        <h4 className="job-department">Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Full Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Android Devloper</h3>
                        <h4 className="job-department">App Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Part Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Web Devloper</h3>
                        <h4 className="job-department">Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Full Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Android Devloper</h3>
                        <h4 className="job-department">App Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Part Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Web Devloper</h3>
                        <h4 className="job-department">Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Full Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="job-list" href="/purple/applyjob/jobdetail">
                    <div className="job-list-det">
                      <div className="job-list-desc">
                        <h3 className="job-list-title">Android Devloper</h3>
                        <h4 className="job-department">App Development</h4>
                      </div>
                      <div className="job-type-info">
                        <span className="job-types">Part Time</span>
                      </div>
                    </div>
                    <div className="job-list-footer">
                      <ul>
                        <li><i className="fa fa-map-signs" /> California</li>
                        <li><i className="fa fa-money" /> $35000-$38000</li>
                        <li><i className="fa fa-clock-o" /> 2 days ago</li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
        </div>
          
        );
    }
       
}

  
  
export default JobsList;
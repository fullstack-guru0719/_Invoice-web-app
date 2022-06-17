
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_11, Avatar_09, Avatar_02, Avatar_10, Avatar_05, Avatar_08 } from "../../../Entryfile/imagepath"

class Attendance extends Component {
   render() {
      return ( 
          <div className="page-wrapper">
          <Helmet>
              <title>Attendance - HRMS Admin Template</title>
              <meta name="description" content="Login page"/>					
          </Helmet>
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Attendance</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                    <li className="breadcrumb-item active">Attendance</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-4">
                <div className="card punch-status">
                  <div className="card-body">
                    <h5 className="card-title">Timesheet <small className="text-muted">11 Mar 2019</small></h5>
                    <div className="punch-det">
                      <h6>Punch In at</h6>
                      <p>Wed, 11th Mar 2019 10.00 AM</p>
                    </div>
                    <div className="punch-info">
                      <div className="punch-hours">
                        <span>3.45 hrs</span>
                      </div>
                    </div>
                    <div className="punch-btn-section">
                      <button type="button" className="btn btn-primary punch-btn">Punch Out</button>
                    </div>
                    <div className="statistics">
                      <div className="row">
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box">
                            <p>Break</p>
                            <h6>1.21 hrs</h6>
                          </div>
                        </div>
                        <div className="col-md-6 col-6 text-center">
                          <div className="stats-box">
                            <p>Overtime</p>
                            <h6>3 hrs</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card att-statistics">
                  <div className="card-body">
                    <h5 className="card-title">Statistics</h5>
                    <div className="stats-list">
                      <div className="stats-info">
                        <p>Today <strong>3.45 <small>/ 8 hrs</small></strong></p>
                        <div className="progress">
                          <div className="progress-bar bg-primary" role="progressbar" style={{width: '31%'}} aria-valuenow={31} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>This Week <strong>28 <small>/ 40 hrs</small></strong></p>
                        <div className="progress">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: '31%'}} aria-valuenow={31} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>This Month <strong>90 <small>/ 160 hrs</small></strong></p>
                        <div className="progress">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '62%'}} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>Remaining <strong>90 <small>/ 160 hrs</small></strong></p>
                        <div className="progress">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '62%'}} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                      <div className="stats-info">
                        <p>Overtime <strong>4</strong></p>
                        <div className="progress">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: '22%'}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card recent-activity">
                  <div className="card-body">
                    <h5 className="card-title">Today Activity</h5>
                    <ul className="res-activity-list">
                      <li>
                        <p className="mb-0">Punch In at</p>
                        <p className="res-activity-time">
                          <i className="fa fa-clock-o" />
                          10.00 AM.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">Punch Out at</p>
                        <p className="res-activity-time">
                          <i className="fa fa-clock-o" />
                          11.00 AM.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">Punch In at</p>
                        <p className="res-activity-time">
                          <i className="fa fa-clock-o" />
                          11.15 AM.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">Punch Out at</p>
                        <p className="res-activity-time">
                          <i className="fa fa-clock-o" />
                          1.30 PM.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">Punch In at</p>
                        <p className="res-activity-time">
                          <i className="fa fa-clock-o" />
                          2.00 PM.
                        </p>
                      </li>
                      <li>
                        <p className="mb-0">Punch Out at</p>
                        <p className="res-activity-time">
                          <i className="fa fa-clock-o" />
                          7.30 PM.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-3">  
                <div className="form-group form-focus">
                  <div className="cal-icon">
                    <input type="text" className="form-control floating datetimepicker" />
                  </div>
                  <label className="focus-label">Date</label>
                </div>
              </div>
              <div className="col-sm-3"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option>-</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                  </select>
                  <label className="focus-label">Select Month</label>
                </div>
              </div>
              <div className="col-sm-3"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option>-</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                  </select>
                  <label className="focus-label">Select Year</label>
                </div>
              </div>
              <div className="col-sm-3">  
                <a href="#" className="btn btn-success btn-block"> Search </a>  
              </div>     
            </div>
            {/* /Search Filter */}
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date </th>
                        <th>Punch In</th>
                        <th>Punch Out</th>
                        <th>Production</th>
                        <th>Break</th>
                        <th>Overtime</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>19 Feb 2019</td>
                        <td>10 AM</td>
                        <td>7 PM</td>
                        <td>9 hrs</td>
                        <td>1 hrs</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>20 Feb 2019</td>
                        <td>10 AM</td>
                        <td>7 PM</td>
                        <td>9 hrs</td>
                        <td>1 hrs</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </div>
        );
   }
}

export default Attendance;

/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02, Avatar_05, Avatar_13, Avatar_12, Avatar_11} from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

class PerformanceAppraisal extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:Avatar_02,name:"John Doe",designation:"IOS Developer",department:"IOS",creatat:"1 Jan 2013",status:"Active"},
         {id:2,image:Avatar_05,name:"Richard Miles",designation:"Web Designer",department:"Design",creatat:"18 Mar 2014",status:"Active"},
         {id:3,image:Avatar_11,name:"John Smith",designation:"Android Developer",department:"Android",creatat:"1 Apr 2014",status:"Inactive"},
         {id:4,image:Avatar_13,name:"Jeffrey Warden",designation:"Web Designer",department:"Design",creatat:"16 Jun 2013",status:"Active"},
         {id:5,image:Avatar_12,name:"Bernardo Galaviz",designation:"Web Designer",department:"Design",creatat:"1 Jan 2013",status:"Active"},
       ],          
    };
  }

   render() {
    const{data} = this.state
    const columns = [
      
      {
        title: '#',
        dataIndex: 'id',
          sorter: (a, b) => a.id.length - b.id.length,
      },  
      {
        title: 'Employee',
        dataIndex: 'name',
        render: (text, record) => (            
            <h2 className="table-avatar">
              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></a>
              <a href="/purple/app/profile/employee-profile">{text} <span>{record.role}</span></a>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },      
      {
        title: 'Designation',
        dataIndex: 'designation',
        sorter: (a, b) => a.designation.length - b.designation.length,
      },

      {
        title: 'Department',
        dataIndex: 'department', 
        sorter: (a, b) => a.department.length - b.department.length,
      },  
      {
        title: 'Appraisal Date',
        dataIndex: 'creatat',
        sorter: (a, b) => a.creatat.length - b.creatat.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
          <div className="dropdown action-label">
              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className={text==="Inactive" ?"fa fa-dot-circle-o text-danger" : "fa fa-dot-circle-o text-success"} /> {text}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
              </div>
          </div>
          ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_appraisal"><i className="fa fa-pencil m-r-5" /> Edit</a>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appraisal"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                  </div>
            </div>
          ),
      },
    ]
      return ( 
            <div className="page-wrapper">
              <Helmet>
                  <title>Performance Appraisal - HRMS Admin Template</title>
                  <meta name="description" content="Login page"/>					
              </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Performance Appraisal</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active">Performance</li>
                      </ul>
                    </div>
                    <div className="col-auto float-right ml-auto">
                      <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_appraisal"><i className="fa fa-plus" /> Add New</a>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="table-responsive">
                    <Table className="table-striped"
                        pagination= { {total : data.length,
                          showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                        style = {{overflowX : 'auto'}}
                        columns={columns}                 
                        // bordered
                        dataSource={data}
                        rowKey={record => record.id}
                        onChange={this.handleTableChange}
                      />
                      {/* <table className="table table-striped custom-table mb-0 datatable">
                        <thead>
                          <tr>
                            <th style={{width: '30px'}}>#</th>
                            <th>Employee</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>Appraisal Date</th>
                            <th>Status</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02} /></a>
                                <a href="/purple/app/profile/employee-profile">John Doe </a>
                              </h2>
                            </td>
                            <td>Web Designer </td>
                            <td>Designing</td>
                            <td>
                              7 May 2019
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                  <i className="fa fa-dot-circle-o text-success" /> Active
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                                </div>
                              </div>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_appraisal"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appraisal"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_05} /></a>
                                <a href="/purple/app/profile/employee-profile">Mike Litorus </a>
                              </h2>
                            </td>
                            <td>IOS Developer </td>
                            <td>IOS</td>
                            <td>
                              7 May 2019
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                  <i className="fa fa-dot-circle-o text-success" /> Active
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                                </div>
                              </div>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_appraisal"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appraisal"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_13} /></a>
                                <a href="/purple/app/profile/employee-profile">Bernardo Galaviz </a>
                              </h2>
                            </td>
                            <td>Web Developer </td>
                            <td>Designing</td>
                            <td>
                              7 May 2019
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                  <i className="fa fa-dot-circle-o text-success" /> Active
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                                </div>
                              </div>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_appraisal"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appraisal"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_12} /></a>
                                <a href="/purple/app/profile/employee-profile">Jeffrey Warden </a>
                              </h2>
                            </td>
                            <td>Web Developer </td>
                            <td>Designing</td>
                            <td>
                              7 May 2019
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                  <i className="fa fa-dot-circle-o text-success" /> Active
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                                </div>
                              </div>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_appraisal"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appraisal"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_11} /></a>
                                <a href="/purple/app/profile/employee-profile">Wilmer Deluna </a>
                              </h2>
                            </td>
                            <td>Team Leader </td>
                            <td>IOS</td>
                            <td>
                              7 May 2019
                            </td>
                            <td>
                              <div className="dropdown action-label">
                                <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                  <i className="fa fa-dot-circle-o text-success" /> Active
                                </a>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
                                </div>
                              </div>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_appraisal"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_appraisal"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Content */}
              {/* Add Performance Appraisal Modal */}
              <div id="add_appraisal" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Give Performance Appraisal</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label className="col-form-label">Employee</label>
                              <select className="select">
                                <option>Select Employee</option>
                                <option>John Doe</option>
                                <option>Mike Litorus</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Select Date <span className="text-danger">*</span></label>
                              <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="card">
                              <div className="card-body">
                                <div className="tab-box">
                                  <div className="row user-tabs">
                                    <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                      <ul className="nav nav-tabs nav-tabs-solid">
                                        <li className="nav-item"><a href="#appr_technical" data-toggle="tab" className="nav-link active">Technical</a></li>
                                        <li className="nav-item"><a href="#appr_organizational" data-toggle="tab" className="nav-link">Organizational</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="tab-content">
                                  <div id="appr_technical" className="pro-overview tab-pane fade show active">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div className="bg-white">
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th colSpan={5}>Technical Competencies</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th colSpan={2}>Indicator</th>
                                                <th colSpan={2}>Expected Value</th>
                                                <th>Set Value</th>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Customer Experience</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td><select name="customer_experience" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select></td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Marketing</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td><select name="marketing" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select></td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Management</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td><select name="management" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select></td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Administration</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td><select name="administration" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select></td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Presentation Skill</td>
                                                <td colSpan={2}>Expert / Leader</td>
                                                <td><select name="presentation_skill" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select></td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Quality Of Work</td>
                                                <td colSpan={2}>Expert / Leader</td>
                                                <td><select name="quality_of_work" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select></td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Efficiency</td>
                                                <td colSpan={2}>Expert / Leader</td>
                                                <td><select name="efficiency" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane fade" id="appr_organizational">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div className="bg-white">
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th colSpan={5}>Organizational Competencies</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th colSpan={2}>Indicator</th>
                                                <th colSpan={2}>Expected Value</th>
                                                <th>Set Value</th>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Integrity</td>
                                                <td colSpan={2}>Beginner</td>
                                                <td>
                                                  <select name="integrity" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Professionalism</td>
                                                <td colSpan={2}>Beginner</td>
                                                <td>
                                                  <select name="professionalism" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Team Work</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td>
                                                  <select name="team_work" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Critical Thinking</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td>
                                                  <select name="critical_thinking" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Conflict Management</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td>
                                                  <select name="conflict_management" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Attendance</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td>
                                                  <select name="attendance" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Ability To Meet Deadline</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td>
                                                  <select name="ability_to_meet_deadline" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
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
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label className="col-form-label">Status</label>
                              <select className="select">
                                <option>Active</option>
                                <option>Inactive</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Add Performance Appraisal Modal */}
              {/* Edit Performance Appraisal Modal */}
              <div id="edit_appraisal" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit Performance Appraisal</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label className="col-form-label">Employee</label>
                              <select className="select">
                                <option>Select Employee</option>
                                <option>John Doe</option>
                                <option >Mike Litorus</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Select Date <span className="text-danger">*</span></label>
                              <div className="cal-icon"><input className="form-control datetimepicker" defaultValue="7/08/2019" type="text" /></div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="card">
                              <div className="card-body">
                                <div className="tab-box">
                                  <div className="row user-tabs">
                                    <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                      <ul className="nav nav-tabs nav-tabs-solid">
                                        <li className="nav-item"><a href="#appr_technical1" data-toggle="tab" className="nav-link active">Technical</a></li>
                                        <li className="nav-item"><a href="#appr_organizational1" data-toggle="tab" className="nav-link">Organizational</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="tab-content">
                                  <div id="appr_technical1" className="pro-overview tab-pane fade show active">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div className="bg-white">
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th colSpan={5}>Technical Competencies</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th colSpan={2}>Indicator</th>
                                                <th colSpan={2}>Expected Value</th>
                                                <th>Set Value</th>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Customer Experience</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td>
                                                  <select name="customer_experience" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Marketing</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td>
                                                  <select name="marketing" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Management</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td>
                                                  <select name="management" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Administration</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td>
                                                  <select name="administration" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Presentation Skill</td>
                                                <td colSpan={2}>Expert / Leader</td>
                                                <td>
                                                  <select name="presentation_skill" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Quality Of Work</td>
                                                <td colSpan={2}>Expert / Leader</td>
                                                <td>
                                                  <select name="quality_of_work" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Efficiency</td>
                                                <td colSpan={2}>Expert / Leader</td>
                                                <td>
                                                  <select name="efficiency" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                    <option value={4}> Expert / Leader</option>
                                                  </select>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane fade" id="appr_organizational1">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div className="bg-white">
                                          <table className="table">
                                            <thead>
                                              <tr>
                                                <th colSpan={5}>Organizational Competencies</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <th colSpan={2}>Indicator</th>
                                                <th colSpan={2}>Expected Value</th>
                                                <th>Set Value</th>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Integrity</td>
                                                <td colSpan={2}>Beginner</td>
                                                <td>
                                                  <select name="integrity" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Professionalism</td>
                                                <td colSpan={2}>Beginner</td>
                                                <td>
                                                  <select name="professionalism" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Team Work</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td>
                                                  <select name="team_work" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Critical Thinking</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td>
                                                  <select name="critical_thinking" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Conflict Management</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td>
                                                  <select name="conflict_management" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Attendance</td>
                                                <td colSpan={2}>Intermediate</td>
                                                <td>
                                                  <select name="attendance" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td scope="row" colSpan={2}>Ability To Meet Deadline</td>
                                                <td colSpan={2}>Advanced</td>
                                                <td>
                                                  <select name="ability_to_meet_deadline" className="form-control">
                                                    <option value>None</option>
                                                    <option value={1}> Beginner</option>
                                                    <option value={2}> Intermediate</option>
                                                    <option value={3}> Advanced</option>
                                                  </select>
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
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label className="col-form-label">Status</label>
                              <select className="select">
                                <option>Active</option>
                                <option>Inactive</option>
                              </select>
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
              {/* /Edit Performance Appraisal Modal */}
              {/* Delete Performance Appraisal Modal */}
              <div className="modal custom-modal fade" id="delete_appraisal" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-header">
                        <h3>Delete Performance Appraisal List</h3>
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
              {/* /Delete Performance Appraisal Modal */}
            </div>
      );
   }
}

export default PerformanceAppraisal;

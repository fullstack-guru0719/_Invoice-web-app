/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02,Avatar_05,Avatar_10,Avatar_11,Avatar_12} from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

class PerformanceIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:Avatar_02,name:"John Doe",designation:"IOS Developer",department:"IOS",creatat:"1 Jan 2013",status:"Active"},
         {id:2,image:Avatar_05,name:"Richard Miles",designation:"Web Designer",department:"Design",creatat:"18 Mar 2014",status:"Active"},
         {id:3,image:Avatar_11,name:"John Smith",designation:"Android Developer",department:"Android",creatat:"1 Apr 2014",status:"Inactive"},
         {id:4,image:Avatar_10,name:"Jeffrey Warden",designation:"Web Designer",department:"Design",creatat:"16 Jun 2013",status:"Active"},
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
        title: 'Added By',
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
        title: 'Create At',
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
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i className="fa fa-pencil m-r-5" /> Edit</a>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                  </div>
            </div>
          ),
      },
    ]
      return (
      <div className="page-wrapper">
        <Helmet>
            <title>Performance Indicator - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Performance Indicator</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Performance</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_indicator"><i className="fa fa-plus" /> Add New</a>
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
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Added By</th>
                    <th>Create At</th>
                    <th>Status</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Web Designer </td>
                    <td>Designing</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02}/></a>
                        <a href="/purple/app/profile/employee-profile">John Doe </a>
                      </h2>
                    </td>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>IOS Developer </td>
                    <td>IOS</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_05} /></a>
                        <a href="/purple/app/profile/employee-profile">Mike Litorus </a>
                      </h2>
                    </td>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Web Designer </td>
                    <td>Designing</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_10} /></a>
                        <a href="/purple/app/profile/employee-profile">John Smith </a>
                      </h2>
                    </td>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Web Designer </td>
                    <td>Designing</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_12} /></a>
                        <a href="/purple/app/profile/employee-profile">Jeffrey Warden </a>
                      </h2>
                    </td>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Web Designer </td>
                    <td>Designing</td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_11} /></a>
                        <a href="/purple/app/profile/employee-profile">Wilmer Deluna </a>
                      </h2>
                    </td>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_indicator"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_indicator"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
      {/* Add Performance Indicator Modal */}
      <div id="add_indicator" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Set New Indicator</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="col-form-label">Designation</label>
                      <select className="select">
                        <option>Select Designation</option>
                        <option>Web Designer</option>
                        <option>IOS Developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Technical</h4>
                    <div className="form-group">
                      <label className="col-form-label">Customer Experience</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Marketing</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Management</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Administration</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Presentation Skill</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Quality Of Work</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Efficiency</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Organizational</h4>
                    <div className="form-group">
                      <label className="col-form-label">Integrity</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Professionalism</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Team Work</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Critical Thinking</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Conflict Management</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Attendance</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Ability To Meet Deadline</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
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
      {/* /Add Performance Indicator Modal */}
      {/* Edit Performance Indicator Modal */}
      <div id="edit_indicator" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Performance Indicator</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="col-form-label">Designation</label>
                      <select className="select">
                        <option>Select Designation</option>
                        <option >Web Designer</option>
                        <option>IOS Developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Technical</h4>
                    <div className="form-group">
                      <label className="col-form-label">Customer Experience</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option >Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Marketing</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option >Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Management</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option >Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Administration</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option >Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Presentation Skill</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Quality Of Work</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Efficiency</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="modal-sub-title">Organizational</h4>
                    <div className="form-group">
                      <label className="col-form-label">Integrity</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Professionalism</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option >Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Team Work</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Critical Thinking</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option >Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Conflict Management</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option >Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Attendance</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option >Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Ability To Meet Deadline</label>
                      <select className="select">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option >Advanced</option>
                        <option>Expert / Leader</option>
                      </select>
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
      {/* /Edit Performance Indicator Modal */}
      {/* Delete Performance Indicator Modal */}
      <div className="modal custom-modal fade" id="delete_indicator" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Performance Indicator List</h3>
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
      {/* /Delete Performance Indicator Modal */}
    </div>
      );
   }
}

export default PerformanceIndicator;

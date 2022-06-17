
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_11, Avatar_09, Avatar_02, Avatar_10, Avatar_05, Avatar_08 } from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:Avatar_02,name:"John Doe",ticketid:"TKT-0001",ticketsubject:"Internet Issue",
         createddate :"5 Jan 2019 07:21 AM",lastreply:"5 Jan 2019 11.12 AM	",priority:"High",status:"New"}
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
        title: 'Ticket Id',
        dataIndex: 'ticketid',
        render: (text, record) => (            
          <a href="/purple/app/employees/ticket-view">#TKT-0001</a>
          ), 
        sorter: (a, b) => a.ticketid.length - b.ticketid.length,
      },
      {
        title: 'Assigned Staff',
        dataIndex: 'name',
        render: (text, record) => (            
            <h2 className="table-avatar">
              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></a>
              <a href="/purple/app/profile/employee-profile">{text}</a>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Created Date',
        dataIndex: 'createddate',
        sorter: (a, b) => a.createddate.length - b.createddate.length,
      },

      {
        title: 'Last Reply',
        dataIndex: 'lastreply', 
        sorter: (a, b) => a.lastreply.length - b.lastreply.length,
      },
      {
        title: 'Priority',
        render: (text, record) => (
          <div className="dropdown action-label">
          <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
          </div>
        </div>
          ),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-dot-circle-o text-danger" /> New 
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Reopened</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> On Hold</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> In Progress</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
              </div>
            </div>
          ),
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
              <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_ticket"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_ticket"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
            </div>
          ),
      },     
  
    ]
      return ( 
          <div className="page-wrapper">
            <Helmet>
                <title>Tickets - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Tickets</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                    <li className="breadcrumb-item active">Tickets</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_ticket"><i className="fa fa-plus" /> Add Ticket</a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                <div className="card-group m-b-30">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">New Tickets</span>
                        </div>
                        <div>
                          <span className="text-success">+10%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">112</h3>
                      <div className="progress mb-2" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">Solved Tickets</span>
                        </div>
                        <div>
                          <span className="text-success">+12.5%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">70</h3>
                      <div className="progress mb-2" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">Open Tickets</span>
                        </div>
                        <div>
                          <span className="text-danger">-2.8%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">100</h3>
                      <div className="progress mb-2" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <span className="d-block">Pending Tickets</span>
                        </div>
                        <div>
                          <span className="text-danger">-75%</span>
                        </div>
                      </div>
                      <h3 className="mb-3">125</h3>
                      <div className="progress mb-2" style={{height: '5px'}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>	
            </div>
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Employee Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option> -- Select -- </option>
                    <option> Pending </option>
                    <option> Approved </option>
                    <option> Returned </option>
                  </select>
                  <label className="focus-label">Status</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option> -- Select -- </option>
                    <option> High </option>
                    <option> Low </option>
                    <option> Medium </option>
                  </select>
                  <label className="focus-label">Priority</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
                <div className="form-group form-focus">
                  <div className="cal-icon">
                    <input className="form-control floating datetimepicker" type="text" />
                  </div>
                  <label className="focus-label">From</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
                <div className="form-group form-focus">
                  <div className="cal-icon">
                    <input className="form-control floating datetimepicker" type="text" />
                  </div>
                  <label className="focus-label">To</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
                <a href="#" className="btn btn-success btn-block"> Search </a>  
              </div>     
            </div>
            {/* /Search Filter */}
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
                        <th>#</th>
                        <th>Ticket Id</th>
                        <th>Ticket Subject</th>
                        <th>Assigned Staff</th>
                        <th>Created Date</th>
                        <th>Last Reply</th>
                        <th>Priority</th>
                        <th className="text-center">Status</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td><a href="/purple/app/employees/ticket-view">#TKT-0001</a></td>
                        <td>Laptop Issue</td>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-xs" href="/purple/app/profile/employee-profile"><img alt="" src={Avatar_10} /></a>
                            <a href="#">John Smith</a>
                          </h2>
                        </td>
                        <td>5 Jan 2019 07:21 AM</td>
                        <td>5 Jan 2019 11.12 AM</td>
                        <td>
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-danger" /> New 
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Reopened</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> On Hold</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> In Progress</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_ticket"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_ticket"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><a href="/purple/app/employees/ticket-view">#TKT-0001</a></td>
                        <td>Internet Issue</td>
                        <td>
                          <h2 className="table-avatar">
                            <a className="avatar avatar-xs" href="/purple/app/profile/employee-profile"><img alt="" src={Avatar_08} /></a>
                            <a href="#">Catherine Manseau</a>
                          </h2>
                        </td>
                        <td>5 Jan 2019 07:21 AM</td>
                        <td>5 Jan 2019 11.12 AM</td>
                        <td>
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-warning" /> Medium </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-info" /> Reopened 
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Reopened</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> On Hold</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> In Progress</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_ticket"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_ticket"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
          {/* Add Ticket Modal */}
          <div id="add_ticket" className="modal custom-modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Ticket</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Subject</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Id</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Assign Staff</label>
                          <select className="select">
                            <option>-</option>
                            <option>Mike Litorus</option>
                            <option>John Smith</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Client</label>
                          <select className="select">
                            <option>-</option>
                            <option>Delta Infotech</option>
                            <option>International Software Inc</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Priority</label>
                          <select className="select">
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>CC</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Assign</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Assignee</label>
                          <div className="project-members">
                            <a title="John Smith" data-placement="top" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_02} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Add Followers</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Followers</label>
                          <div className="project-members">
                            <a title="Richard Miles" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_09} alt="" />
                            </a>
                            <a title="John Smith" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_10} alt="" />
                            </a>
                            <a title="Mike Litorus" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_05} alt="" />
                            </a>
                            <a title="Wilmer Deluna" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_11} alt="" />
                            </a>
                            <span className="all-team">+2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control" defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <label>Upload Files</label>
                          <input className="form-control" type="file" />
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
          {/* /Add Ticket Modal */}
          {/* Edit Ticket Modal */}
          <div id="edit_ticket" className="modal custom-modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Ticket</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Subject</label>
                          <input className="form-control" type="text" defaultValue="Laptop Issue" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Id</label>
                          <input className="form-control" type="text" readOnly defaultValue="TKT-0001" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Assign Staff</label>
                          <select className="select">
                            <option>-</option>
                            <option >Mike Litorus</option>
                            <option>John Smith</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Client</label>
                          <select className="select">
                            <option>-</option>
                            <option>Delta Infotech</option>
                            <option >International Software Inc</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Priority</label>
                          <select className="select">
                            <option>High</option>
                            <option >Medium</option>
                            <option>Low</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>CC</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Assign</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Assignee</label>
                          <div className="project-members">
                            <a title="John Smith" data-placement="top" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_02} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Add Followers</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Ticket Followers</label>
                          <div className="project-members">
                            <a title="Richard Miles" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_09} alt="" />
                            </a>
                            <a title="John Smith" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_10} alt="" />
                            </a>
                            <a title="Mike Litorus" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_05} alt="" />
                            </a>
                            <a title="Wilmer Deluna" data-toggle="tooltip" href="#" className="avatar">
                              <img src={Avatar_11} alt="" />
                            </a>
                            <span className="all-team">+2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control" defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <label>Upload Files</label>
                          <input className="form-control" type="file" />
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
          {/* /Edit Ticket Modal */}
          {/* Delete Ticket Modal */}
          <div className="modal custom-modal fade" id="delete_ticket" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-header">
                    <h3>Delete Ticket</h3>
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
          {/* /Delete Ticket Modal */}
        </div>
      );
   }
}

export default Tickets;

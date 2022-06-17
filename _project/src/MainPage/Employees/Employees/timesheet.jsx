
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {  Avatar_01 ,Avatar_02,Avatar_03,Avatar_04, Avatar_05, Avatar_08, Avatar_09, Avatar_10,
    Avatar_11,Avatar_12,Avatar_13,Avatar_16   } from "../../../Entryfile/imagepath"

    import { Table } from 'antd';
    import 'antd/dist/antd.css';
    import {itemRender,onShowSizeChange} from "../../paginationfunction"
    import "../../antdstyle.css"

class Timesheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",date:"1 Jan 2013",projects:"Video Calling App",assignedhours:"20",hours:'12'
         ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."}, 
         {id:2,image:Avatar_01,name:"Richard Miles",role:"Android Developer",date:"1 Jan 2013",projects:"Project Management",assignedhours:"10",hours:'12'
         ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."},
         ],          
    };
  }

render() {
 const{data} = this.state
      const columns = [
        
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
          title: 'Date',
          dataIndex: 'date',
          sorter: (a, b) => a.date.length - b.date.length,
        },

        {
          title: 'Projects',
          dataIndex: 'projects',
          sorter: (a, b) => a.projects.length - b.projects.length,
        },

        {
          title: 'Assigned Hours',
          dataIndex: 'assignedhours', 
          sorter: (a, b) => a.assignedhours.length - b.assignedhours.length,
        },
      
        {
          title: 'Hours',
          dataIndex: 'hours',
          sorter: (a, b) => a.hours.length - b.hours.length,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          render: (text, record) => (
              <span className="d-none d-sm-table-cell col-md-4">
               {text}
              </span>
            ),
          sorter: (a, b) => a.description.length - b.description.length,
        },
        {
          title: 'Action',
          render: (text, record) => (
              <div className="dropdown dropdown-action text-right">
               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                    </div>
              </div>
            ),
        },       
    
      ]
                        
      return ( 
        <div className="page-wrapper">
            <Helmet>
                <title>Timesheet - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Timesheet</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active">Timesheet</li>
                      </ul>
                    </div>
                    <div className="col-auto float-right ml-auto">
                      <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_todaywork"><i className="fa fa-plus" /> Add Today Work</a>
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
                            <th>Employee</th>
                            <th>Date</th>
                            <th>Projects</th>
                            <th className="text-center">Assigned Hours</th>
                            <th className="text-center">Hours</th>
                            <th className="d-none d-sm-table-cell">Description</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02} /></a>
                                <a href="/purple/app/profile/employee-profile">John Doe <span>Web Designer</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Office Management</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">7</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_09} /></a>
                                <a href="/purple/app/profile/employee-profile">Richard Miles <span>Web Developer</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Project Management</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Video Calling App</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Hospital Administration</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Office Management</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">7</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_12} /></a>
                                <a href="/purple/app/profile/employee-profile">Jeffrey Warden <span>Web Developer</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Project Management</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_13} /></a>
                                <a href="/purple/app/profile/employee-profile">Bernardo Galaviz <span>Web Developer</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Video Calling App</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_01} /></a>
                                <a href="/purple/app/profile/employee-profile">Lesley Grauer <span>Team Leader</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Hospital Administration</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_16} /></a>
                                <a href="/purple/app/profile/employee-profile">Jeffery Lalor <span>Team Leader</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Ware house developement</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">9</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_04} /></a>
                                <a href="/purple/app/profile/employee-profile">Loren Gatlin <span>Android Developer</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Office Management</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_03} /></a>
                                <a href="/purple/app/profile/employee-profile">Tarah Shropshire <span>Android Developer</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Project Management</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_08}/></a>
                                <a href="/purple/app/profile/employee-profile">Catherine Manseau <span>Android Developer</span></a>
                              </h2>
                            </td>
                            <td>8 Mar 2019</td>
                            <td>
                              <h2>Video Calling App</h2>
                            </td>
                            <td className="text-center">20</td>
                            <td className="text-center">12</td>
                            <td className="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_todaywork"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_workdetail"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
              {/* Add Today Work Modal */}
              <div id="add_todaywork" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add Today Work details</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Project <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Office Management</option>
                              <option>Project Management</option>
                              <option>Video Calling App</option>
                              <option>Hospital Administration</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-4">
                            <label>Deadline <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                              <input className="form-control" type="text" defaultValue="5 May 2019" readOnly />
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Total Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={100} readOnly />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Remaining Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={60} readOnly />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Date <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                              <input className="form-control datetimepicker" type="text" />
                            </div>
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Description <span className="text-danger">*</span></label>
                          <textarea rows={4} className="form-control" defaultValue={""} />
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Add Today Work Modal */}
              {/* Edit Today Work Modal */}
              <div id="edit_todaywork" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit Work Details</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Project <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Office Management</option>
                              <option>Project Management</option>
                              <option>Video Calling App</option>
                              <option>Hospital Administration</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-4">
                            <label>Deadline <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                              <input className="form-control" type="text" defaultValue="5 May 2019" readOnly />
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Total Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={100} readOnly />
                          </div>
                          <div className="form-group col-sm-4">
                            <label>Remaining Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={60} readOnly />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label>Date <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                              <input className="form-control datetimepicker" defaultValue="03/03/2019" type="text" />
                            </div>
                          </div>
                          <div className="form-group col-sm-6">
                            <label>Hours <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue={9} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Description <span className="text-danger">*</span></label>
                          <textarea rows={4} className="form-control" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque."} />
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Edit Today Work Modal */}
              {/* Delete Today Work Modal */}
              <div className="modal custom-modal fade" id="delete_workdetail" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-header">
                        <h3>Delete Work Details</h3>
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
              {/* Delete Today Work Modal */}
            </div>
        );
   }
}

export default Timesheet;

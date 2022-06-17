/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_11, Avatar_05, Avatar_10, Avatar_09, Avatar_02, Avatar_21,Avatar_19 } from '../../Entryfile/imagepath';

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",email:"johndoe@example.com",company :"Global Technologies",mobile:'9876543210',joindate:"1 Jan 2013",role:"Client"},
         {id:2,image:Avatar_05,name:"Richard Miles",role:"Web Developer",email:"richardmiles@example.com",company :"Dreamguy's Technologies",mobile:'9876543210',joindate:"18 Mar 2014",role:"Admin"},
         {id:3,image:Avatar_11,name:"John Smith",role:"Android Developer",email:"johnsmith@example.com	",company :"Dreamguy's Technologies",mobile:'9876543210',joindate:"1 Apr 2014",role:"Employee"},
         {id:4,image:Avatar_21,name:"Mike Litorus",role:"IOS Developer",email:"mikelitorus@example.com",company :"Dreamguy's Technologies",mobile:'9876543210',joindate:"1 Apr 2014",role:"Employee"},
         {id:5,image:Avatar_09,name:"Wilmer Deluna",role:"Team Leader",email:"wilmerdeluna@example.com",company :"Dreamguy's Technologies",mobile:'9876543210',joindate:"22 May 2014",role:"Employee"},
         {id:6,image:Avatar_10,name:"Jeffrey Warden",role:"Web Developer",email:"jeffreywarden@example.com",company :"Dreamguy's Technologies",mobile:'9876543210',joindate:"16 Jun 2013",role:"Employee"},
         {id:7,image:Avatar_19,name:"Bernardo Galaviz",role:"Web Developer",email:"bernardogalaviz@example.com",company :"Dreamguy's Technologies",mobile:'9876543210',joindate:"1 Jan 2013",role:"Employee"},
       ],          
    };
  }

   render() {
    const{data} = this.state
    const columns = [
      
      {
        title: 'Name',
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
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
      },

      {
        title: 'Company',
        dataIndex: 'company', 
        sorter: (a, b) => a.company.length - b.company.length,
      },
    
      {
        title: 'Created Date',
        dataIndex: 'joindate',
        sorter: (a, b) => a.joindate.length - b.joindate.length,
      },
      {
        title: 'Role',
        dataIndex: 'role',
        render: (text, record) => (
            <span className={text ==="Admin" ? "badge bg-inverse-danger" :  "badge bg-inverse-success" }
           >{text}</span>
          ),
        sorter: (a, b) => a.role.length - b.role.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
              <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
          ),
      },
    ]
      return ( 
            <div className="page-wrapper">
              <Helmet>
                 <title>Users - HRMS Admin Template</title>
                 <meta name="description" content="Login page"/>					
              </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Users</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active">Users</li>
                      </ul>
                    </div>
                    <div className="col-auto float-right ml-auto">
                      <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_user"><i className="fa fa-plus" /> Add User</a>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                {/* Search Filter */}
                <div className="row filter-row">
                  <div className="col-sm-6 col-md-3">  
                    <div className="form-group form-focus">
                      <input type="text" className="form-control floating" />
                      <label className="focus-label">Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3"> 
                    <div className="form-group form-focus select-focus">
                      <select className="select floating"> 
                        <option>Select Company</option>
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                      </select>
                      <label className="focus-label">Company</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3"> 
                    <div className="form-group form-focus select-focus">
                      <select className="select floating"> 
                        <option>Select Roll</option>
                        <option>Web Developer</option>
                        <option>Web Designer</option>
                        <option>Android Developer</option>
                        <option>Ios Developer</option>
                      </select>
                      <label className="focus-label">Role</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">  
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
                      {/* <table className="table table-striped custom-table datatable">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Created Date</th>
                            <th>Role</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img src={Avatar_21} alt="" /></a>
                                <a href="/purple/app/profile/employee-profile">Daniel Porter <span>Admin</span></a>
                              </h2>
                            </td>
                            <td>danielporter@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-danger">Admin</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02} /></a>
                                <a href="/purple/app/profile/employee-profile">John Doe <span>Web Designer</span></a>
                              </h2>
                            </td>
                            <td>johndoe@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_09} /></a>
                                <a href="/purple/app/profile/employee-profile">Richard Miles <span>Admin</span></a>
                              </h2>
                            </td>
                            <td>richardmiles@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                            <td>johnsmith@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                            <td>mikelitorus@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
                            <td>wilmerdeluna@example.com</td>
                            <td>Dreamguy's Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-success">Employee</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="/purple/app/profile/employee-profile" className="avatar"><img src={Avatar_19} alt="" /></a>
                                <a href="/purple/app/profile/employee-profile">Barry Cuda <span>Global Technologies</span></a>
                              </h2>
                            </td>
                            <td>barrycuda@example.com</td>
                            <td>Global Technologies</td>
                            <td>1 Jan 2013</td>
                            <td>
                              <span className="badge bg-inverse-info">Client</span>
                            </td>
                            <td className="text-right">
                              <div className="dropdown dropdown-action">
                                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_user"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_user"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
              {/* Add User Modal */}
              <div id="add_user" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add User</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>First Name <span className="text-danger">*</span></label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Username <span className="text-danger">*</span></label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Email <span className="text-danger">*</span></label>
                              <input className="form-control" type="email" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Role</label>
                              <select className="select">
                                <option>Admin</option>
                                <option>Client</option>
                                <option>Employee</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Company</label>
                              <select className="select">
                                <option>Global Technologies</option>
                                <option>Delta Infotech</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">  
                            <div className="form-group">
                              <label>Employee ID <span className="text-danger">*</span></label>
                              <input type="text" className="form-control floating" />
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive m-t-15">
                          <table className="table table-striped custom-table">
                            <thead>
                              <tr>
                                <th>Module Permission</th>
                                <th className="text-center">Read</th>
                                <th className="text-center">Write</th>
                                <th className="text-center">Create</th>
                                <th className="text-center">Delete</th>
                                <th className="text-center">Import</th>
                                <th className="text-center">Export</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Employee</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Holidays</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Leaves</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Events</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Add User Modal */}
              {/* Edit User Modal */}
              <div id="edit_user" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit User</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>First Name <span className="text-danger">*</span></label>
                              <input className="form-control" defaultValue="John" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input className="form-control" defaultValue="Doe" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Username <span className="text-danger">*</span></label>
                              <input className="form-control" defaultValue="johndoe" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Email <span className="text-danger">*</span></label>
                              <input className="form-control" defaultValue="johndoe@example.com" type="email" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input className="form-control" type="password" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone </label>
                              <input className="form-control" defaultValue={9876543210} type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Role</label>
                              <select className="select">
                                <option>Admin</option>
                                <option>Client</option>
                                <option >Employee</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Company</label>
                              <select className="select">
                                <option>Global Technologies</option>
                                <option>Delta Infotech</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">  
                            <div className="form-group">
                              <label>Employee ID <span className="text-danger">*</span></label>
                              <input type="text" defaultValue="FT-0001" className="form-control floating" />
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive m-t-15">
                          <table className="table table-striped custom-table">
                            <thead>
                              <tr>
                                <th>Module Permission</th>
                                <th className="text-center">Read</th>
                                <th className="text-center">Write</th>
                                <th className="text-center">Create</th>
                                <th className="text-center">Delete</th>
                                <th className="text-center">Import</th>
                                <th className="text-center">Export</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Employee</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Holidays</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Leaves</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                              <tr>
                                <td>Events</td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                                <td className="text-center">
                                  <input defaultChecked type="checkbox" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Edit User Modal */}
              {/* Delete User Modal */}
              <div className="modal custom-modal fade" id="delete_user" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-header">
                        <h3>Delete User</h3>
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
              {/* /Delete User Modal */}
            </div>

      );
   }
}

export default Users;

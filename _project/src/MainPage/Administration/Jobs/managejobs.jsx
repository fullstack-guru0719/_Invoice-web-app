/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

class Managedjobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,jobtitle:"Web Designer",department:"Development",startdate:"1 Jan 2013",expirydate:"31 May 2019",jobtype:"Full Time",status:"Open",applicants:"3 Candidates"},
         {id:2,jobtitle:"Web Developer",department:"Designing",startdate:"18 Mar 2014",expirydate:"31 May 2019",jobtype:"Part Time",status:"Closed",applicants:"2 Candidates"},
         {id:3,jobtitle:"Android Developer",department:"Android",startdate:"1 Apr 2014",expirydate:"31 May 2019",jobtype:"Internship",status:"Cancelled",applicants:"1 Candidates"},
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
        title: 'Job Title',
        dataIndex: 'jobtitle',
        render: (text, record) => (            
            <a href="/purple/app/administrator/job-details">{text}</a>
          ), 
          sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
      },
    
      {
        title: 'Department',
        dataIndex: 'department',
        sorter: (a, b) => a.department.length - b.department.length,
      },
      {
        title: 'Start Date',
        dataIndex: 'startdate',
        sorter: (a, b) => a.startdate.length - b.startdate.length,
      },
    
      {
        title: 'Expiry Date',
        dataIndex: 'expirydate',
        sorter: (a, b) => a.expirydate.length - b.expirydate.length,
      },
      {
        title: 'Job Type',
        dataIndex: 'jobtype',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
              <i className={text==="Full Time" ? "fa fa-dot-circle-o text-info" : text==="Part Time" ?
               "fa fa-dot-circle-o text-success" : text==="Internship" ? "fa fa-dot-circle-o text-danger" : 
                "fa fa-dot-circle-o text-danger" } /> {text}
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
            </div>
        </div>
          ),
        sorter: (a, b) => a.jobtype.length - b.jobtype.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
          <div className="dropdown action-label text-center">
          <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
            <i className={text==="Open" ? "fa fa-dot-circle-o text-info" : text==="Closed" ?
               "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger" } /> {text}
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
          </div>
        </div>
          ),
        sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Applicants',
        dataIndex: 'applicants',
        render: (text, record) => (
          <a href="/purple/app/administrator/job-applicants" className="btn btn-sm btn-primary">{text}</a>
          ),
        sorter: (a, b) => a.applicants.length - b.applicants.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
              <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
          ),
    
      
      },
      
  
    ]
      return ( 
        <div className="page-wrapper">
        <Helmet>
            <title>Jobs - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Jobs</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Jobs</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_job"><i className="fa fa-plus" /> Add Job</a>
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
                    <th>#</th>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>Expire Date</th>
                    <th className="text-center">Job Type</th>
                    <th className="text-center">Status</th>
                    <th>Applicants</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><a href="/purple/app/administrator/job-details">Web Developer</a></td>
                    <td>Development</td>
                    <td>3 Mar 2019</td>
                    <td>31 May 2019</td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-danger" /> Full Time
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-danger" /> Open
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                        </div>
                      </div>
                    </td>
                    <td><a href="/purple/app/administrator/job-applicants" className="btn btn-sm btn-primary">3 Candidates</a></td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><a href="/purple/app/administrator/job-details">Web Designer</a></td>
                    <td>Designing</td>
                    <td>3 Mar 2019</td>
                    <td>31 May 2019</td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-success" /> Part Time
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-success" /> Closed
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                        </div>
                      </div>
                    </td>
                    <td><a href="/purple/app/administrator/job-applicants" className="btn btn-sm btn-primary">2 Candidates</a></td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><a href="/purple/app/administrator/job-details">Android Developer</a></td>
                    <td>Android</td>
                    <td>3 Mar 2019</td>
                    <td>31 May 2019</td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-danger" /> Internship
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Full Time</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Part Time</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Internship</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Temporary</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Other</a>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-danger" /> Cancelled
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Open</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Closed</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Cancelled</a>
                        </div>
                      </div>
                    </td>
                    <td><a href="/purple/app/administrator/job-applicants" className="btn btn-sm btn-primary">1 Candidates</a></td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_job"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_job"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
      {/* Add Job Modal */}
      <div id="add_job" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Job</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <select className="select">
                        <option>-</option>
                        <option>Web Development</option>
                        <option>Application Development</option>
                        <option>IT Management</option>
                        <option>Accounts Management</option>
                        <option>Support Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Location</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No of Vacancies</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Experience</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Age</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Type</label>
                      <select className="select">
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Temporary</option>
                        <option>Remote</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="select">
                        <option>Open</option>
                        <option>Closed</option>
                        <option>Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <input type="text" className="form-control datetimepicker" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Expired Date</label>
                      <input type="text" className="form-control datetimepicker" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
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
      {/* /Add Job Modal */}
      {/* Edit Job Modal */}
      <div id="edit_job" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Job</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input className="form-control" type="text" defaultValue="Web Developer" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Department</label>
                      <select className="select">
                        <option>-</option>
                        <option >Web Development</option>
                        <option>Application Development</option>
                        <option>IT Management</option>
                        <option>Accounts Management</option>
                        <option>Support Management</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Location</label>
                      <input className="form-control" type="text" defaultValue="California" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>No of Vacancies</label>
                      <input className="form-control" type="text" defaultValue={5} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Experience</label>
                      <input className="form-control" type="text" defaultValue="2 Years" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Age</label>
                      <input className="form-control" type="text" defaultValue="-" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary From</label>
                      <input type="text" className="form-control" defaultValue="32k" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary To</label>
                      <input type="text" className="form-control" defaultValue="38k" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Type</label>
                      <select className="select">
                        <option >Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Temporary</option>
                        <option>Remote</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="select">
                        <option >Open</option>
                        <option>Closed</option>
                        <option>Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <input type="text" className="form-control datetimepicker" defaultValue="3 Mar 2019" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Expired Date</label>
                      <input type="text" className="form-control datetimepicker" defaultValue="31 May 2019" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea className="form-control" defaultValue={""} />
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
      {/* /Edit Job Modal */}
      {/* Delete Job Modal */}
      <div className="modal custom-modal fade" id="delete_job" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Job</h3>
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
      {/* /Delete Job Modal */}
    </div>
      );
   }
}

export default Managedjobs;


import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {  Avatar_09 } from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

class Leaves extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:Avatar_09,name:"Richard Miles",leavetype:"Casual Leave",from:"8 Mar 2019",to:'9 Mar 2019'
         ,noofdays:"2 days",reason:"Going to Hospital",status:"New" },
         {id:2,image:Avatar_09,name:"Richard Miles",leavetype:"Casual Leave",from:"30 Jan 2019",to:'30 Jan 2019'
         ,noofdays:"Second Half",reason:"Going to Hospital",status:"New" },
         {id:3,image:Avatar_09,name:"Richard Miles",leavetype:"Casual Leave",from:"13 Jan 2019",to:'14 Jan 2019'
         ,noofdays:"2 days",reason:"Going to Hospital",status:"Approved" },
         {id:4,image:Avatar_09,name:"Richard Miles",leavetype:"Casual Leave",from:"10 Jan 2019",to:'10 Jan 2019'
         ,noofdays:"First Half",reason:"Going to Hospital",status:"Declined" },
         {id:5,image:Avatar_09,name:"Richard Miles",leavetype:"Hospitalisation",from:"15 Jan 2019",to:'25 Jan 2019'
         ,noofdays:"10 days",reason:"Going to Hospital",status:"Approved" },
         {id:6,image:Avatar_09,name:"Richard Miles",leavetype:"LOP",from:"24 Feb 2019",to:'25 Feb 2019'
         ,noofdays:"2 days",reason:"Personnal",status:"Approved" },
         {id:7,image:Avatar_09,name:"Richard Miles",leavetype:"Medical Leave",from:"27 Feb 2019",to:'27 Feb 2019'
         ,noofdays:"1 days",reason:"Going to Hospital",status:"Approved" },
         {id:8,image:Avatar_09,name:"Richard Miles",leavetype:"Paternity Leave",from:"13 Feb 2019",to:'17 Feb 2019'
         ,noofdays:"5 days",reason:"Going to Hospital",status:"Declined" },
        ],          
    };
  }
  			
render() {
 const{data} = this.state
      const columns = [
        {
          title: 'Leave Type',
          dataIndex: 'leavetype',
          sorter: (a, b) => a.leavetype.length - b.leavetype.length,
        },

        {
          title: 'From',
          dataIndex: 'from',
          sorter: (a, b) => a.from.length - b.from.length,
        },
        {
          title: 'To',
          dataIndex: 'to',
          sorter: (a, b) => a.to.length - b.to.length,
        },

        {
          title: 'No Of Days',
          dataIndex: 'noofdays', 
          sorter: (a, b) => a.noofdays.length - b.noofdays.length,
        },
      
        {
          title: 'Reason',
          dataIndex: 'reason',
          sorter: (a, b) => a.reason.length - b.reason.length,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text, record) => (
            <div className="action-label text-center">
              <a className="btn btn-white btn-sm btn-rounded" href="">
                <i className={text==="New" ? "fa fa-dot-circle-o text-purple" : text === "Pending" ?
              "fa fa-dot-circle-o text-info" : text === "Approved" ? "fa fa-dot-circle-o text-success" 
              :"fa fa-dot-circle-o text-danger" } /> {text}
              </a>
            </div>
            ),
        },
        {
          title: 'Approved By',
          dataIndex: 'name',
          render: (text, record) => (            
              <h2 className="table-avatar">
                <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></a>
                <a href="/purple/app/profile/employee-profile">{text} </a>
              </h2>
            ), 
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: 'Action',
          render: (text, record) => (
              <div className="dropdown dropdown-action text-right">
                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
              </div>
            ),
      
        
        },
        
    
      ]
      return (         
      <div className="page-wrapper">
        <Helmet>
            <title>Leaves - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Leaves</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Leaves</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_leave"><i className="fa fa-plus" /> Add Leave</a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Leave Statistics */}
        <div className="row">
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Annual Leave</h6>
              <h4>12</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Medical Leave</h6>
              <h4>3</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Other Leave</h6>
              <h4>4</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stats-info">
              <h6>Remaining Leave</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>
        {/* /Leave Statistics */}
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
                    <th>Leave Type</th>
                    <th>From</th>
                    <th>To</th>
                    <th>No of Days</th>
                    <th>Reason</th>
                    <th className="text-center">Status</th>
                    <th>Approved by</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Casual Leave</td>
                    <td>8 Mar 2019</td>
                    <td>9 Mar 2019</td>
                    <td>2 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-purple" /> New
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Medical Leave</td>
                    <td>27 Feb 2019</td>
                    <td>27 Feb 2019</td>
                    <td>1 day</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-success" /> Approved
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>LOP</td>
                    <td>24 Feb 2019</td>
                    <td>25 Feb 2019</td>
                    <td>2 days</td>
                    <td>Personnal</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-success" /> Approved
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Paternity Leave</td>
                    <td>13 Feb 2019</td>
                    <td>17 Feb 2019</td>
                    <td>5 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-danger" /> Declined
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Casual Leave</td>
                    <td>30 Jan 2019</td>
                    <td>30 Jan 2019</td>
                    <td>Second Half</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-purple" /> New
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Hospitalisation</td>
                    <td>15 Jan 2019</td>
                    <td>25 Jan 2019</td>
                    <td>10 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-success" /> Approved
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Casual Leave</td>
                    <td>13 Jan 2019</td>
                    <td>14 Jan 2019</td>
                    <td>2 days</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-success" /> Approved
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Casual Leave</td>
                    <td>10 Jan 2019</td>
                    <td>10 Jan 2019</td>
                    <td>First Half</td>
                    <td>Going to Hospital</td>
                    <td className="text-center">
                      <div className="action-label">
                        <a className="btn btn-white btn-sm btn-rounded" href="">
                          <i className="fa fa-dot-circle-o text-danger" /> Declined
                        </a>
                      </div>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a href="/purple/app/profile/employee-profile" className="avatar avatar-xs"><img src={Avatar_09} alt="" /></a>
                        <a href="#">Richard Miles</a>
                      </h2>
                    </td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_leave"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_approve"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
      {/* Add Leave Modal */}
      <div id="add_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Leave</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Leave Type <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                    <option>Medical Leave</option>
                    <option>Loss of Pay</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>From <span className="text-danger">*</span></label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label>To <span className="text-danger">*</span></label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Number of days <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly type="text" />
                </div>
                <div className="form-group">
                  <label>Remaining Leaves <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly defaultValue={12} type="text" />
                </div>
                <div className="form-group">
                  <label>Leave Reason <span className="text-danger">*</span></label>
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
      {/* /Add Leave Modal */}
      {/* Edit Leave Modal */}
      <div id="edit_leave" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Leave</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Leave Type <span className="text-danger">*</span></label>
                  <select className="select">
                    <option>Select Leave Type</option>
                    <option>Casual Leave 12 Days</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>From <span className="text-danger">*</span></label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" defaultValue="01-01-2019" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label>To <span className="text-danger">*</span></label>
                  <div className="cal-icon">
                    <input className="form-control datetimepicker" defaultValue="01-01-2019" type="text" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Number of days <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly type="text" defaultValue={2} />
                </div>
                <div className="form-group">
                  <label>Remaining Leaves <span className="text-danger">*</span></label>
                  <input className="form-control" readOnly defaultValue={12} type="text" />
                </div>
                <div className="form-group">
                  <label>Leave Reason <span className="text-danger">*</span></label>
                  <textarea rows={4} className="form-control" defaultValue={"Going to hospital"} />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Leave Modal */}
      {/* Delete Leave Modal */}
      <div className="modal custom-modal fade" id="delete_approve" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Leave</h3>
                <p>Are you sure want to Cancel this leave?</p>
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
      {/* /Delete Leave Modal */}
    </div>
        );
   }
}

export default Leaves;

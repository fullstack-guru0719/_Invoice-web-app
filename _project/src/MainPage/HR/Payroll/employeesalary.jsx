
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02, Avatar_09, Avatar_10, Avatar_05, Avatar_11, Avatar_12, Avatar_13,
   Avatar_01, Avatar_16, Avatar_04, Avatar_03} from "../../../Entryfile/imagepath"

   import { Table } from 'antd';
   import 'antd/dist/antd.css';
   import {itemRender,onShowSizeChange} from "../../paginationfunction"
   import "../../antdstyle.css"

class EmployeeSalary extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data : [
             {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",employee_id:"FT-0001",email:"johndoe@example.com",salary:'73550',joindate:"1 Jan 2013",roles:"Software Engineer"},
             {id:2,image:Avatar_05,name:"Richard Miles",role:"Web Developer",employee_id:"FT-0002",email:"richardmiles@example.com",salary:'59698',joindate:"18 Mar 2014",roles:"Web Developer"},
             {id:3,image:Avatar_11,name:"John Smith",role:"Android Developer",employee_id:"FT-0003",email:"johnsmith@example.com	",salary:'73550',joindate:"1 Apr 2014",roles:"Web Designer"},
             {id:4,image:Avatar_12,name:"Mike Litorus",role:"IOS Developer",employee_id:"FT-0004",email:"mikelitorus@example.com",salary:'72000',joindate:"1 Apr 2014",roles:"Team Leader"},
             {id:5,image:Avatar_09,name:"Wilmer Deluna",role:"Team Leader",employee_id:"FT-0005",email:"wilmerdeluna@example.com",salary:'59698',joindate:"22 May 2014",roles:"Android Developer"},
             {id:6,image:Avatar_10,name:"Jeffrey Warden",role:"Web Developer",employee_id:"FT-0006",email:"jeffreywarden@example.com",salary:'38400',joindate:"16 Jun 2013",roles:"IOS Developer"},
             {id:7,image:Avatar_13,name:"Bernardo Galaviz",role:"Web Developer",employee_id:"FT-0007",email:"bernardogalaviz@example.com",salary:'55000',joindate:"1 Jan 2013",roles:"Software Engineer"},
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
              title: 'Employee ID',
              dataIndex: 'employee_id',
              sorter: (a, b) => a.employee_id.length - b.employee_id.length,
            },

            {
              title: 'Email',
              dataIndex: 'email',
              sorter: (a, b) => a.email.length - b.email.length,
            },
          
            {
              title: 'Join Date',
              dataIndex: 'joindate',
              sorter: (a, b) => a.joindate.length - b.joindate.length,
            },
            {
              title: 'Role',
              dataIndex: 'roles',
              render: (text, record) => (
                <div className="dropdown">
                <a href="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">{text} </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Software Engineer</a>
                  <a className="dropdown-item" href="#">Software Tester</a>
                  <a className="dropdown-item" href="#">Frontend Developer</a>
                  <a className="dropdown-item" href="#">UI/UX Developer</a>
                </div>
              </div>
                ),
            },
            {
              title: 'Salary',
              dataIndex: 'salary', 
              render: (text, record) => (
              <span>${text}</span>
                ),
              sorter: (a, b) => a.salary.length - b.salary.length,
            },
            {
              title: 'Payslip',
              render: (text, record) => (
                <a className="btn btn-sm btn-primary" href="/purple/app/payroll/salary-view">Generate Slip</a>
                ),
            },
            {
              title: 'Action',
              render: (text, record) => (
                  <div className="dropdown dropdown-action text-right">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_salary"><i className="fa fa-pencil m-r-5" /> Edit</a>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_salary"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                      </div>
                  </div>
                ),
            },        
          ]
      return ( 
        <div className="page-wrapper">
            <Helmet>
                <title>Salary - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">Employee Salary</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active">Salary</li>
                      </ul>
                    </div>
                    <div className="col-auto float-right ml-auto">
                      <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_salary"><i className="fa fa-plus" /> Add Salary</a>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
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
                        <option value> -- Select -- </option>
                        <option value>Employee</option>
                        <option value={1}>Manager</option>
                      </select>
                      <label className="focus-label">Role</label>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12"> 
                    <div className="form-group form-focus select-focus">
                      <select className="select floating"> 
                        <option> -- Select -- </option>
                        <option> Pending </option>
                        <option> Approved </option>
                        <option> Rejected </option>
                      </select>
                      <label className="focus-label">Leave Status</label>
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
               
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Content */}
              {/* Add Salary Modal */}
              <div id="add_salary" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add Staff Salary</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row"> 
                          <div className="col-sm-6"> 
                            <div className="form-group">
                              <label>Select Staff</label>
                              <select className="select"> 
                                <option>John Doe</option>
                                <option>Richard Miles</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6"> 
                            <label>Net Salary</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="row"> 
                          <div className="col-sm-6"> 
                            <h4 className="text-primary">Earnings</h4>
                            <div className="form-group">
                              <label>Basic</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>DA(40%)</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>HRA(15%)</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Conveyance</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Allowance</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Medical  Allowance</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Others</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="add-more">
                              <a href="#"><i className="fa fa-plus-circle" /> Add More</a>
                            </div>
                          </div>
                          <div className="col-sm-6">  
                            <h4 className="text-primary">Deductions</h4>
                            <div className="form-group">
                              <label>TDS</label>
                              <input className="form-control" type="text" />
                            </div> 
                            <div className="form-group">
                              <label>ESI</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>PF</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Leave</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Prof. Tax</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Labour Welfare</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Others</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="add-more">
                              <a href="#"><i className="fa fa-plus-circle" /> Add More</a>
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
              {/* /Add Salary Modal */}
              {/* Edit Salary Modal */}
              <div id="edit_salary" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Edit Staff Salary</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="row"> 
                          <div className="col-sm-6"> 
                            <div className="form-group">
                              <label>Select Staff</label>
                              <select className="select"> 
                                <option>John Doe</option>
                                <option>Richard Miles</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6"> 
                            <label>Net Salary</label>
                            <input className="form-control" type="text" defaultValue="$4000" />
                          </div>
                        </div>
                        <div className="row"> 
                          <div className="col-sm-6"> 
                            <h4 className="text-primary">Earnings</h4>
                            <div className="form-group">
                              <label>Basic</label>
                              <input className="form-control" type="text" defaultValue="$6500" />
                            </div>
                            <div className="form-group">
                              <label>DA(40%)</label>
                              <input className="form-control" type="text" defaultValue="$2000" />
                            </div>
                            <div className="form-group">
                              <label>HRA(15%)</label>
                              <input className="form-control" type="text" defaultValue="$700" />
                            </div>
                            <div className="form-group">
                              <label>Conveyance</label>
                              <input className="form-control" type="text" defaultValue="$70" />
                            </div>
                            <div className="form-group">
                              <label>Allowance</label>
                              <input className="form-control" type="text" defaultValue="$30" />
                            </div>
                            <div className="form-group">
                              <label>Medical  Allowance</label>
                              <input className="form-control" type="text" defaultValue="$20" />
                            </div>
                            <div className="form-group">
                              <label>Others</label>
                              <input className="form-control" type="text" />
                            </div>  
                          </div>
                          <div className="col-sm-6">  
                            <h4 className="text-primary">Deductions</h4>
                            <div className="form-group">
                              <label>TDS</label>
                              <input className="form-control" type="text" defaultValue="$300" />
                            </div> 
                            <div className="form-group">
                              <label>ESI</label>
                              <input className="form-control" type="text" defaultValue="$20" />
                            </div>
                            <div className="form-group">
                              <label>PF</label>
                              <input className="form-control" type="text" defaultValue="$20" />
                            </div>
                            <div className="form-group">
                              <label>Leave</label>
                              <input className="form-control" type="text" defaultValue="$250" />
                            </div>
                            <div className="form-group">
                              <label>Prof. Tax</label>
                              <input className="form-control" type="text" defaultValue="$110" />
                            </div>
                            <div className="form-group">
                              <label>Labour Welfare</label>
                              <input className="form-control" type="text" defaultValue="$10" />
                            </div>
                            <div className="form-group">
                              <label>Fund</label>
                              <input className="form-control" type="text" defaultValue="$40" />
                            </div>
                            <div className="form-group">
                              <label>Others</label>
                              <input className="form-control" type="text" defaultValue="$15" />
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
              {/* /Edit Salary Modal */}
              {/* Delete Salary Modal */}
              <div className="modal custom-modal fade" id="delete_salary" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="form-header">
                        <h3>Delete Salary</h3>
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
              {/* /Delete Salary Modal */}
            </div>
      );
   }
}

export default EmployeeSalary;

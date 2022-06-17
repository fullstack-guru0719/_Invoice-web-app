
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

import { Avatar_02,Avatar_05,Avatar_11, Avatar_12,Avatar_09,Avatar_10, Avatar_13 } from "../../../Entryfile/imagepath"


class Employeeslist extends Component {
      constructor(props) {
        super(props);
        this.state = {
           data : [
             {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",employee_id:"FT-0001",email:"johndoe@example.com",mobile:'9876543210',joindate:"1 Jan 2013"},
             {id:2,image:Avatar_05,name:"Richard Miles",role:"Web Developer",employee_id:"FT-0002",email:"richardmiles@example.com",mobile:'9876543210',joindate:"18 Mar 2014"},
             {id:3,image:Avatar_11,name:"John Smith",role:"Android Developer",employee_id:"FT-0003",email:"johnsmith@example.com	",mobile:'9876543210',joindate:"1 Apr 2014"},
             {id:4,image:Avatar_12,name:"Mike Litorus",role:"IOS Developer",employee_id:"FT-0004",email:"mikelitorus@example.com",mobile:'9876543210',joindate:"1 Apr 2014"},
             {id:5,image:Avatar_09,name:"Wilmer Deluna",role:"Team Leader",employee_id:"FT-0005",email:"wilmerdeluna@example.com",mobile:'9876543210',joindate:"22 May 2014"},
             {id:6,image:Avatar_10,name:"Jeffrey Warden",role:"Web Developer",employee_id:"FT-0006",email:"jeffreywarden@example.com",mobile:'9876543210',joindate:"16 Jun 2013"},
             {id:7,image:Avatar_13,name:"Bernardo Galaviz",role:"Web Developer",employee_id:"FT-0007",email:"bernardogalaviz@example.com",mobile:'9876543210',joindate:"1 Jan 2013"},
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
              title: 'Mobile',
              dataIndex: 'mobile', 
              sorter: (a, b) => a.mobile.length - b.mobile.length,
            },
          
            {
              title: 'Join Date',
              dataIndex: 'joindate',
              sorter: (a, b) => a.joindate.length - b.joindate.length,
            },
            {
              title: 'Role',
              render: (text, record) => (
                <div className="dropdown">
                <a href="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Web Developer </a>
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
              title: 'Action',
              render: (text, record) => (
                  <div className="dropdown dropdown-action text-right">
                    <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_employee"><i className="fa fa-pencil m-r-5" /> Edit</a>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_employee"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                    </div>
                  </div>
                ),
          
            
            },
            
        
          ]
      return ( 
         <div className="page-wrapper">
            <Helmet>
                <title>Employeeslist - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
         {/* Page Content */}
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row align-items-center">
               <div className="col">
                 <h3 className="page-title">Employee</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                   <li className="breadcrumb-item active">Employee</li>
                 </ul>
               </div>
               <div className="col-auto float-right ml-auto">
                 <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_employee"><i className="fa fa-plus" /> Add Employee</a>
                 <div className="view-icons">
                   <a href="/purple/app/employee/allemployees" className="grid-view btn btn-link"><i className="fa fa-th" /></a>
                   <a href="/purple/app/employee/employees-list" className="list-view btn btn-link active"><i className="fa fa-bars" /></a>
                 </div>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           {/* Search Filter */}
           <div className="row filter-row">
             <div className="col-sm-6 col-md-3">  
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Employee ID</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">  
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Employee Name</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3"> 
               <div className="form-group form-focus select-focus">
                 <select className="select floating"> 
                   <option>Select Designation</option>
                   <option>Web Developer</option>
                   <option>Web Designer</option>
                   <option>Android Developer</option>
                   <option>Ios Developer</option>
                 </select>
                 <label className="focus-label">Designation</label>
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
               </div>
             </div>
           </div>
         </div>
         {/* /Page Content */}
         {/* Add Employee Modal */}
         <div id="add_employee" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Employee</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Username <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Email <span className="text-danger">*</span></label>
                         <input className="form-control" type="email" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-sm-6">  
                       <div className="form-group">
                         <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                         <input type="text" className="form-control" />
                       </div>
                     </div>
                     <div className="col-sm-6">  
                       <div className="form-group">
                         <label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
                         <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Company</label>
                         <select className="select">
                           <option value>Global Technologies</option>
                           <option value={1}>Delta Infotech</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Department <span className="text-danger">*</span></label>
                         <select className="select">
                           <option>Select Department</option>
                           <option>Web Development</option>
                           <option>IT Management</option>
                           <option>Marketing</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Designation <span className="text-danger">*</span></label>
                         <select className="select">
                           <option>Select Designation</option>
                           <option>Web Designer</option>
                           <option>Web Developer</option>
                           <option>Android Developer</option>
                         </select>
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
                         <tr key={1}>
                           <td>Holidays</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={2}>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={3}>
                           <td>Clients</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={4}>
                           <td>Projects</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={5}>
                           <td>Tasks</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={6}>
                           <td>Chats</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={7}>
                           <td>Assets</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={8}>
                           <td>Timing Sheets</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
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
         {/* /Add Employee Modal */}
         {/* Edit Employee Modal */}
         <div id="edit_employee" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Employee</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                         <input className="form-control" defaultValue="John" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input className="form-control" defaultValue="Doe" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Username <span className="text-danger">*</span></label>
                         <input className="form-control" defaultValue="johndoe" type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Email <span className="text-danger">*</span></label>
                         <input className="form-control" defaultValue="johndoe@example.com" type="email" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input className="form-control" defaultValue="johndoe" type="password" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input className="form-control" defaultValue="johndoe" type="password" />
                       </div>
                     </div>
                     <div className="col-sm-6">  
                       <div className="form-group">
                         <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                         <input type="text" defaultValue="FT-0001" readOnly className="form-control floating" />
                       </div>
                     </div>
                     <div className="col-sm-6">  
                       <div className="form-group">
                         <label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
                         <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input className="form-control" defaultValue={9876543210} type="text" />
                       </div>
                     </div>
                     <div className="col-sm-6">
                       <div className="form-group">
                         <label className="col-form-label">Company</label>
                         <select className="select">
                           <option>Global Technologies</option>
                           <option>Delta Infotech</option>
                           <option >International Software Inc</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Department <span className="text-danger">*</span></label>
                         <select className="select">
                           <option>Select Department</option>
                           <option>Web Development</option>
                           <option>IT Management</option>
                           <option>Marketing</option>
                         </select>
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label>Designation <span className="text-danger">*</span></label>
                         <select className="select">
                           <option>Select Designation</option>
                           <option>Web Designer</option>
                           <option>Web Developer</option>
                           <option>Android Developer</option>
                         </select>
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
                         <tr key={1}>
                           <td>Holidays</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={2}>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={3}>
                           <td>Clients</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={4}>
                           <td>Projects</td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={5}>
                           <td>Tasks</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={6}>
                           <td>Chats</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={7}>
                           <td>Assets</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
                           </td>
                         </tr>
                         <tr key={8}>
                           <td>Timing Sheets</td>
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
                             <input type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input type="checkbox" />
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
         {/* /Edit Employee Modal */}
         {/* Delete Employee Modal */}
         <div className="modal custom-modal fade" id="delete_employee" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Employee</h3>
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
         {/* /Delete Employee Modal */}
       </div>
        );
   }
}

export default Employeeslist;

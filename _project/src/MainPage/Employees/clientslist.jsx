
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_19, Avatar_29, Avatar_07, Avatar_06, Avatar_14, Avatar_18, Avatar_28, Avatar_22 } from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,image:Avatar_07,name:"John Doe",client_id:"CLT-0001",contactperson:"Barry Cuda",
         email :"barrycuda@example.com",mobile:"9876543210",status:"Active"}
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
              <a href="/purple/app/profile/employee-profile">{text}</a>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Client ID',
        dataIndex: 'client_id',
        sorter: (a, b) => a.employee_id.length - b.employee_id.length,
      },
    
      {
        title: 'Contact Person',
        dataIndex: 'contactperson',
        sorter: (a, b) => a.contactperson.length - b.contactperson.length,
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
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
          <div className="dropdown">
              <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <i className={text==="Active" ? "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger"} /> {text} </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
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
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
              </div>
            </div>
          ),
      },     
  
    ]
      return ( 
         <div className="page-wrapper">
         <Helmet>
             <title>Clients - HRMS Admin Template</title>
             <meta name="description" content="Login page"/>					
         </Helmet>
         {/* Page Content */}
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row align-items-center">
               <div className="col">
                 <h3 className="page-title">Clients</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                   <li className="breadcrumb-item active">Clients</li>
                 </ul>
               </div>
               <div className="col-auto float-right ml-auto">
                 <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_client"><i className="fa fa-plus" /> Add Client</a>
                 <div className="view-icons">
                   <a href="/purple/app/employees/clients" className="grid-view btn btn-link"><i className="fa fa-th" /></a>
                   <a href="/purple/app/employees/clients-list" className="list-view btn btn-link active"><i className="fa fa-bars" /></a>
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
                 <label className="focus-label">Client ID</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">  
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Client Name</label>
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
               <a href="#" className="btn btn-success btn-block"> Search </a>  
             </div>     
           </div>
           {/* Search Filter */}
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
                       <th>Client ID</th>
                       <th>Contact Person</th>
                       <th>Email</th>
                       <th>Mobile</th>
                       <th>Status</th>
                       <th className="text-right">Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_19} alt="" /></a>
                           <a href="/purple/app/profile/client-profile">Global Technologies</a>
                         </h2>
                       </td>
                       <td>CLT-0001</td>
                       <td>Barry Cuda</td>
                       <td>barrycuda@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_29} alt="" /></a>
                           <a href="/purple/app/profile/client-profile">Delta Infotech</a>
                         </h2>
                       </td>
                       <td>CLT-0002</td>
                       <td>Tressa Wexler</td>
                       <td>tressawexler@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> Inactive </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_07} /></a>
                           <a href="/purple/app/profile/client-profile">Cream Inc</a>
                         </h2>
                       </td>
                       <td>CLT-0003</td>
                       <td>Ruby Bartlett</td>
                       <td>rubybartlett@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img alt="" src={Avatar_06} /></a>
                           <a href="/purple/app/profile/client-profile">Wellware Company</a>
                         </h2>
                       </td>
                       <td>CLT-0004</td>
                       <td>Misty Tison</td>
                       <td>mistytison@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_14} alt="" /></a>
                           <a href="/purple/app/profile/client-profile">Mustang Technologies</a>
                         </h2>
                       </td>
                       <td>CLT-0005</td>
                       <td>Daniel Deacon</td>
                       <td>danieldeacon@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_18} alt="" /></a>
                           <a href="/purple/app/profile/client-profile">International Software Inc</a>
                         </h2>
                       </td>
                       <td>CLT-0006</td>
                       <td>Walter Weaver</td>
                       <td>walterweaver@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_28} alt="" /></a>
                           <a href="/purple/app/profile/client-profile">Mercury Software Inc</a>
                         </h2>
                       </td>
                       <td>CLT-0007</td>
                       <td>Amanda Warren</td>
                       <td>amandawarren@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                           </div>
                         </div>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a href="/purple/app/profile/client-profile" className="avatar"><img src={Avatar_22} alt="" /></a>
                           <a href="/purple/app/profile/client-profile">Carlson Tech</a>
                         </h2>
                       </td>
                       <td>CLT-0008</td>
                       <td>Betty Carlson</td>
                       <td>bettycarlson@example.com</td>
                       <td>9876543210</td>
                       <td>
                         <div className="dropdown action-label">
                           <a href="#" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> Inactive </a>
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
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_client"><i className="fa fa-pencil m-r-5" /> Edit</a>
                             <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_client"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
         {/* Add Client Modal */}
         <div id="add_client" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Client</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Username <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Email <span className="text-danger">*</span></label>
                         <input className="form-control floating" type="email" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input className="form-control" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">  
                       <div className="form-group">
                         <label className="col-form-label">Client ID <span className="text-danger">*</span></label>
                         <input className="form-control floating" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input className="form-control" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Company Name</label>
                         <input className="form-control" type="text" />
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
                           <td>Projects</td>
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
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Chat</td>
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
                           <td>Estimates</td>
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
                           <td>Invoices</td>
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
         {/* /Add Client Modal */}
         {/* Edit Client Modal */}
         <div id="edit_client" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Client</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="row">
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                         <input className="form-control" defaultValue="Barry" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Last Name</label>
                         <input className="form-control" defaultValue="Cuda" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Username <span className="text-danger">*</span></label>
                         <input className="form-control" defaultValue="barrycuda" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Email <span className="text-danger">*</span></label>
                         <input className="form-control floating" defaultValue="barrycuda@example.com" type="email" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Password</label>
                         <input className="form-control" defaultValue="barrycuda" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Confirm Password</label>
                         <input className="form-control" defaultValue="barrycuda" type="password" />
                       </div>
                     </div>
                     <div className="col-md-6">  
                       <div className="form-group">
                         <label className="col-form-label">Client ID <span className="text-danger">*</span></label>
                         <input className="form-control floating" defaultValue="CLT-0001" type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Phone </label>
                         <input className="form-control" defaultValue={9876543210} type="text" />
                       </div>
                     </div>
                     <div className="col-md-6">
                       <div className="form-group">
                         <label className="col-form-label">Company Name</label>
                         <input className="form-control" type="text" defaultValue="Global Technologies" />
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
                           <td>Projects</td>
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
                             <input defaultChecked type="checkbox" />
                           </td>
                           <td className="text-center">
                             <input defaultChecked type="checkbox" />
                           </td>
                         </tr>
                         <tr>
                           <td>Chat</td>
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
                           <td>Estimates</td>
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
                           <td>Invoices</td>
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
         {/* /Edit Client Modal */}
         {/* Delete Client Modal */}
         <div className="modal custom-modal fade" id="delete_client" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Client</h3>
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
         {/* /Delete Client Modal */}
       </div>
      );
   }
}

export default Clients;

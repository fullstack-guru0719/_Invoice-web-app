/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02} from "../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Termination extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
        {id:1,image:Avatar_02,name:"John Doe",department:"Web Development",reason:"Lorem ipsum dollar",noticedate :"09 Jan 2019",terminationtype:"Misconduct",terminationdate:"09 Jan 2019"}
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
        title: 'Terminated Employee',
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
        title: 'Department',
        dataIndex: 'department',
        sorter: (a, b) => a.department.length - b.department.length,
      },
      {
        title: 'Termination Type',
        dataIndex: 'terminationtype',
        sorter: (a, b) => a.terminationtype.length - b.terminationtype.length,
      },
      {
        title: 'Termination Date',
        dataIndex: 'terminationdate',
        sorter: (a, b) => a.terminationdate.length - b.terminationdate.length,
      },

      {
        title: 'Reason',
        dataIndex: 'reason', 
        sorter: (a, b) => a.reason.length - b.reason.length,
      },
    
      {
        title: 'Notice Date',
        dataIndex: 'noticedate',
        sorter: (a, b) => a.noticedate.length - b.noticedate.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_termination"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_termination"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
            </div>
          ),
      },     
  
    ]
      return ( 
             <div className="page-wrapper">
             <Helmet>
                 <title>Termination - HRMS Admin Template</title>
                 <meta name="description" content="Login page"/>					
             </Helmet>
             {/* Page Content */}
             <div className="content container-fluid">
               {/* Page Header */}
               <div className="page-header">
                 <div className="row align-items-center">
                   <div className="col">
                     <h3 className="page-title">Termination</h3>
                     <ul className="breadcrumb">
                       <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                       <li className="breadcrumb-item active">Termination</li>
                     </ul>
                   </div>
                   <div className="col-auto float-right ml-auto">
                     <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_termination"><i className="fa fa-plus" /> Add Termination</a>
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
                           <th>Terminated Employee </th>
                           <th>Department</th>
                           <th>Termination Type </th>
                           <th>Termination Date </th>
                           <th>Reason</th>
                           <th>Notice Date </th>
                           <th className="text-right">Action</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>1</td>
                           <td>
                             <h2 className="table-avatar blue-link">
                               <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02} /></a>
                               <a href="/purple/app/profile/employee-profile">John Doe</a>
                             </h2>
                           </td>
                           <td>Web Development</td>
                           <td>Misconduct</td>
                           <td>28 Feb 2019</td>
                           <td>Lorem Ipsum Dollar</td>
                           <td>28 Feb 2019</td>
                           <td className="text-right">
                             <div className="dropdown dropdown-action">
                               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                               <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_termination"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                 <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_termination"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
             {/* Add Termination Modal */}
             <div id="add_termination" className="modal custom-modal fade" role="dialog">
               <div className="modal-dialog modal-dialog-centered" role="document">
                 <div className="modal-content">
                   <div className="modal-header">
                     <h5 className="modal-title">Add Termination</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">×</span>
                     </button>
                   </div>
                   <div className="modal-body">
                     <form>
                       <div className="form-group">
                         <label>Terminated Employee <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" />
                       </div>
                       <div className="form-group">
                         <label>Termination Type <span className="text-danger">*</span></label>
                         <div className="add-group-btn">
                           <select className="select">
                             <option>Misconduct</option>
                             <option>Others</option>
                           </select>
                           <a className="btn btn-primary" href=""><i className="fa fa-plus" /> Add</a>
                         </div>
                       </div>
                       <div className="form-group">
                         <label>Termination Date <span className="text-danger">*</span></label>
                         <div className="cal-icon">
                           <input type="text" className="form-control datetimepicker" />
                         </div>
                       </div>
                       <div className="form-group">
                         <label>Reason <span className="text-danger">*</span></label>
                         <textarea className="form-control" rows={4} defaultValue={""} />
                       </div>
                       <div className="form-group">
                         <label>Notice Date <span className="text-danger">*</span></label>
                         <div className="cal-icon">
                           <input type="text" className="form-control datetimepicker" />
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
             {/* /Add Termination Modal */}
             {/* Edit Termination Modal */}
             <div id="edit_termination" className="modal custom-modal fade" role="dialog">
               <div className="modal-dialog modal-dialog-centered" role="document">
                 <div className="modal-content">
                   <div className="modal-header">
                     <h5 className="modal-title">Edit Termination</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">×</span>
                     </button>
                   </div>
                   <div className="modal-body">
                     <form>
                       <div className="form-group">
                         <label>Terminated Employee <span className="text-danger">*</span></label>
                         <input className="form-control" type="text" defaultValue="John Doe" />
                       </div>
                       <div className="form-group">
                         <label>Termination Type <span className="text-danger">*</span></label>
                         <div className="add-group-btn">
                           <select className="select">
                             <option>Misconduct</option>
                             <option>Others</option>
                           </select>
                           <a className="btn btn-primary" href=""><i className="fa fa-plus" /> Add</a>
                         </div>
                       </div>
                       <div className="form-group">
                         <label>Termination Date <span className="text-danger">*</span></label>
                         <div className="cal-icon">
                           <input type="text" className="form-control datetimepicker" defaultValue="28/02/2019" />
                         </div>
                       </div>
                       <div className="form-group">
                         <label>Reason <span className="text-danger">*</span></label>
                         <textarea className="form-control" rows={4} defaultValue={""} />
                       </div>
                       <div className="form-group">
                         <label>Notice Date <span className="text-danger">*</span></label>
                         <div className="cal-icon">
                           <input type="text" className="form-control datetimepicker" defaultValue="28/02/2019" />
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
             {/* /Edit Termination Modal */}
             {/* Delete Termination Modal */}
             <div className="modal custom-modal fade" id="delete_termination" role="dialog">
               <div className="modal-dialog modal-dialog-centered">
                 <div className="modal-content">
                   <div className="modal-body">
                     <div className="form-header">
                       <h3>Delete Termination</h3>
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
             {/* /Delete Termination Modal */}
           </div>
      );
   }
}

export default Termination;


import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,policyname:"John Doe",description:"Lorem ipsum dollar",department:"IOS",creatat:"1 Jan 2013",status:"Active"},
         {id:2,policyname:"Richard Miles",description:"Lorem ipsum dollar",department:"Design",creatat:"18 Mar 2014",status:"Active"},
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
        title: 'Policy Name',
        dataIndex: 'policyname', 
        sorter: (a, b) => a.policyname.length - b.policyname.length,
      }, 
      {
        title: 'Department',
        dataIndex: 'department', 
        sorter: (a, b) => a.department.length - b.department.length,
      },        
      {
        title: 'Description',
        dataIndex: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
      },
      {
        title: 'Created',
        dataIndex: 'creatat',
        sorter: (a, b) => a.creatat.length - b.creatat.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
               <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#"><i className="fa fa-download m-r-5" /> Download</a>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_policy"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_policy"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
            </div>
          ),
      },
    ]
      return ( 
      <div className="page-wrapper">
        <Helmet>
            <title>Policies - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Policies</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                  <li className="breadcrumb-item active">Policies</li>
                </ul>
              </div>
              <div className="col-auto float-right ml-auto">
                <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_policy"><i className="fa fa-plus" /> Add Policy</a>
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
                      <th>Policy Name </th>
                      <th>Department </th>
                      <th>Description </th>
                      <th>Created </th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Leave Policy</td>
                      <td>All Departments</td>
                      <td>Lorem ipsum dollar</td>
                      <td>19 Feb 2019</td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i className="fa fa-download m-r-5" /> Download</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_policy"><i className="fa fa-pencil m-r-5" /> Edit</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_policy"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Permission Policy</td>
                      <td>Marketing</td>
                      <td>Lorem ipsum dollar</td>
                      <td>20 Feb 2019</td>
                      <td className="text-right">
                        <div className="dropdown dropdown-action">
                          <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i className="fa fa-download m-r-5" /> Download</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_policy"><i className="fa fa-pencil m-r-5" /> Edit</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_policy"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
        {/* Add Policy Modal */}
        <div id="add_policy" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Policy</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Policy Name <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Description <span className="text-danger">*</span></label>
                    <textarea className="form-control" rows={4} defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Department</label>
                    <select className="select">
                      <option>All Departments</option>
                      <option>Web Development</option>
                      <option>Marketing</option>
                      <option>IT Management</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Upload Policy <span className="text-danger">*</span></label>
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="policy_upload" />
                      <label className="custom-file-label" htmlFor="policy_upload">Choose file</label>
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
        {/* /Add Policy Modal */}
        {/* Edit Policy Modal */}
        <div id="edit_policy" className="modal custom-modal fade" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Policy</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Policy Name <span className="text-danger">*</span></label>
                    <input className="form-control" type="text" defaultValue="Leave Policy" />
                  </div>
                  <div className="form-group">
                    <label>Description <span className="text-danger">*</span></label>
                    <textarea className="form-control" rows={4} defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Department</label>
                    <select className="select">
                      <option>All Departments</option>
                      <option>Web Development</option>
                      <option>Marketing</option>
                      <option>IT Management</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Upload Policy <span className="text-danger">*</span></label>
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="edit_policy_upload" />
                      <label className="custom-file-label" htmlFor="edit_policy_upload">Choose file</label>
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
        {/* /Edit Policy Modal */}
        {/* Delete Policy Modal */}
        <div className="modal custom-modal fade" id="delete_policy" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Policy</h3>
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
        {/* /Delete Policy Modal */}
      </div>
      );
   }
}

export default Policies;

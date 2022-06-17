/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

class AppliedCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,name:"John Doe",email:"johndoe@example.com",mobile:'9876543210',applydate:"1 Jan 2013",status:"New"},
         {id:2,name:"Richard Miles",email:"richardmiles@example.com",mobile:'9876543210',applydate:"18 Mar 2014",status:"Hired"},
         
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
        title: 'Name',
        dataIndex: 'name',
          sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
      },
      {
        title: 'Phone',
        dataIndex: 'mobile',
        sorter: (a, b) => a.mobile.length - b.mobile.length,
      },
      {
        title: 'Apply Date',
        dataIndex: 'applydate',
        sorter: (a, b) => a.applydate.length - b.applydate.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-center">
               <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                  <i className={text==="New" ? "fa fa-dot-circle-o text-info" : text==="Hired" ?
                    "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-danger" } /> {text}
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> New</a>
                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Hired</a>
                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Rejected</a>
                  <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Interviewed</a>
                </div>
            </div>
          ),
          sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Resume',
        render: (text, record) => (
          <a href="#" className="btn btn-sm btn-primary"><i className="fa fa-download" /> Download</a>
          ),
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
                <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#"><i className="fa fa-clock-o m-r-5" /> Schedule Interview</a>
                </div>
            </div>
          ),
      }     
  
    ]
      return ( 
            
      <div className="page-wrapper">
      <Helmet>
         <title>Jobs Applicants - HRMS Admin Template</title>
         <meta name="description" content="Login page"/>					
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Job Applicants</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Job Applicants</li>
              </ul>
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Apply Date</th>
                    <th className="text-center">Status</th>
                    <th>Resume</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>johndoe@example.com</td>
                    <td>9876543210</td>
                    <td>9 Feb 2019</td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-info" /> New
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> New</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Hired</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Rejected</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Interviewed</a>
                        </div>
                      </div>
                    </td>
                    <td><a href="#" className="btn btn-sm btn-primary"><i className="fa fa-download" /> Download</a></td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-clock-o m-r-5" /> Schedule Interview</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Maria Sam</td>
                    <td>mariasam@example.com</td>
                    <td>9876543210</td>
                    <td>21 Feb 2019</td>
                    <td className="text-center">
                      <div className="dropdown action-label">
                        <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-dot-circle-o text-success" /> Hired
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> New</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Hired</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Rejected</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Interviewed</a>
                        </div>
                      </div>
                    </td>
                    <td><a href="#" className="btn btn-sm btn-primary"><i className="fa fa-download" /> Download</a></td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fa fa-clock-o m-r-5" /> Schedule Interview</a>
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
    </div>
      );
   }
}

export default AppliedCandidate;


import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../paginationfunction"
import "../antdstyle.css"

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,assetuser:"Bernardo Galaviz",assetname:"Dell Laptop",assetid:"AST-0001",purchasedate:"5 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"1215",status:"Pending"},
         {id:2,assetuser:"Catherine Manseau",assetname:"Canon Portable Printer",assetid:"AST-0002",purchasedate:"5 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"1215",status:"Pending"},
         {id:3,assetuser:"Jeffery Lalor",assetname:"Dell Laptop",assetid:"AST-0003",purchasedate:"5 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"1215",status:"Pending"},
         {id:4,assetuser:"Jeffrey Warden",assetname:"Seagate Harddisk",assetid:"AST-0004",purchasedate:"5 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"300",status:"Pending"},
         {id:5,assetuser:"John Due",assetname:"Canon Portable Printer",assetid:"AST-0005",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"300",status:"Approved"},
         {id:6,assetuser:"John Smith",assetname:"Seagate Harddisk",assetid:"AST-0006",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"300",status:"Approved"},
         {id:7,assetuser:"Lesley Grauer",assetname:"Dell Laptop",assetid:"AST-0007",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"300",status:"Approved"},
         {id:8,assetuser:"Loren Gatlin",assetname:"Seagate Harddisk",assetid:"AST-0008",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"2500",status:"Approved"},
         {id:9,assetuser:"Mike Litorus",assetname:"Canon Portable Printere",assetid:"AST-0009",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"2500",status:"Returned"},
         {id:10,assetuser:"Richard Miles",assetname:"Dell Laptop",assetid:"AST-00010",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"2500",status:"Returned"},
         {id:11,assetuser:"Tarah Shropshire",assetname:"Seagate Harddisk",assetid:"AST-00011",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"2500",status:"Returned"},
         {id:12,assetuser:"Wilmer Deluna",assetname:"Canon Portable Printer",assetid:"AST-00012",purchasedate:"14 Jan 2019",warranty :"12 Months",warrantyend:"1 Jan 2013",amount:"2500",status:"Returned"},
       ],          
    };
  }
   render() {
    const{data} = this.state
    const columns = [
      
      {
        title: 'Asset User',
        dataIndex: 'assetuser',
        sorter: (a, b) => a.assetuser.length - b.assetuser.length,
      },
      {
        title: 'Asset Name',
        dataIndex: 'assetname',
        render: (text, record) => (            
        <strong>{text}</strong>
          ), 
        sorter: (a, b) => a.assetname.length - b.assetname.length,
      },
      {
        title: 'Asset Id',
        dataIndex: 'assetid',
        sorter: (a, b) => a.assetid.length - b.assetid.length,
      },
      {
        title: 'Purchase Date',
        dataIndex: 'purchasedate',
        sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
      },

      {
        title: 'Warranty',
        dataIndex: 'warranty', 
        sorter: (a, b) => a.warranty.length - b.warranty.length,
      },
    
      {
        title: 'Warranty End',
        dataIndex: 'warrantyend',
        sorter: (a, b) => a.warrantyend.length - b.warrantyend.length,
      },

      {
        title: 'Amount',
        dataIndex: 'amount', 
        render: (text, record) => (            
          <span>$ {text}</span>
          ), 
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: 'Status',
        dataIndex: 'status', 
        render: (text, record) => (
          <div className="dropdown action-label text-center">
          <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
            <i className={text === "Pending" ?"fa fa-dot-circle-o text-danger" : text === "Approved" ?
            "fa fa-dot-circle-o text-success" : "fa fa-dot-circle-o text-info"} /> {text}
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
            <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
          </div>
        </div>
          ),
          sorter: (a, b) => a.status.length - b.status.length,
      },
      {
        title: 'Action',
        render: (text, record) => (
            <div className="dropdown dropdown-action text-right">
              <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
            </div>
          ),
    
      
      },
      
  
    ]
      return ( 
          <div className="page-wrapper">
            <Helmet>
               <title>Assets - HRMS Admin Template</title>
               <meta name="description" content="Login page"/>					
            </Helmet>
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Assets</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                    <li className="breadcrumb-item active">Assets</li>
                  </ul>
                </div>
                <div className="col-auto float-right ml-auto">
                  <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_asset"><i className="fa fa-plus" /> Add Asset</a>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div className="row filter-row">
              <div className="col-sm-6 col-md-3">  
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" />
                  <label className="focus-label">Employee Name</label>
                </div>
              </div>
              <div className="col-sm-6 col-md-3"> 
                <div className="form-group form-focus select-focus">
                  <select className="select floating"> 
                    <option value> -- Select -- </option>
                    <option value={0}> Pending </option>
                    <option value={1}> Approved </option>
                    <option value={2}> Returned </option>
                  </select>
                  <label className="focus-label">Status</label>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">  
                <div className="row">  
                  <div className="col-md-6 col-sm-6">  
                    <div className="form-group form-focus">
                      <div className="cal-icon">
                        <input className="form-control floating datetimepicker" type="text" />
                      </div>
                      <label className="focus-label">From</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">  
                    <div className="form-group form-focus">
                      <div className="cal-icon">
                        <input className="form-control floating datetimepicker" type="text" />
                      </div>
                      <label className="focus-label">To</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-2">  
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
                  {/* <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th>Asset User</th>
                        <th>Asset Name</th>
                        <th>Asset Id</th>
                        <th>Purchase Date</th>
                        <th>Warrenty</th>
                        <th>Warrenty End</th>
                        <th>Amount</th>
                        <th className="text-center">Status</th>
                        <th className="text-right" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Richard Miles</td>
                        <td>
                          <strong>Dell Laptop</strong>
                        </td>
                        <td>#AST-0001</td>
                        <td>5 Jan 2019</td>
                        <td>12 Months</td>
                        <td>5 Jan 2019</td>
                        <td>$1215</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-danger" /> Pending
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>John Doe</td>
                        <td>
                          <strong>Seagate Harddisk</strong>
                        </td>
                        <td>#AST-0002</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$300</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-success" /> Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>John Smith</td>
                        <td>
                          <strong>Canon Portable Printer</strong>
                        </td>
                        <td>#AST-0003</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$2500</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-info" /> Returned
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Mike Litorus</td>
                        <td>
                          <strong>Dell Laptop</strong>
                        </td>
                        <td>#AST-0004</td>
                        <td>5 Jan 2019</td>
                        <td>12 Months</td>
                        <td>5 Jan 2019</td>
                        <td>$1215</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-danger" /> Pending
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Wilmer Deluna</td>
                        <td>
                          <strong>Seagate Harddisk</strong>
                        </td>
                        <td>#AST-0005</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$300</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-success" /> Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Jeffrey Warden</td>
                        <td>
                          <strong>Canon Portable Printer</strong>
                        </td>
                        <td>#AST-0006</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$2500</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-info" /> Returned
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Bernardo Galaviz</td>
                        <td>
                          <strong>Dell Laptop</strong>
                        </td>
                        <td>#AST-0007</td>
                        <td>5 Jan 2019</td>
                        <td>12 Months</td>
                        <td>5 Jan 2019</td>
                        <td>$1215</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-danger" /> Pending
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Lesley Grauer</td>
                        <td>
                          <strong>Seagate Harddisk</strong>
                        </td>
                        <td>#AST-0008</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$300</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-success" /> Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Jeffery Lalor</td>
                        <td>
                          <strong>Canon Portable Printer</strong>
                        </td>
                        <td>#AST-0009</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$2500</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-info" /> Returned
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Loren Gatlin</td>
                        <td>
                          <strong>Dell Laptop</strong>
                        </td>
                        <td>#AST-0010</td>
                        <td>5 Jan 2019</td>
                        <td>12 Months</td>
                        <td>5 Jan 2019</td>
                        <td>$1215</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-danger" /> Pending
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Tarah Shropshire</td>
                        <td>
                          <strong>Seagate Harddisk</strong>
                        </td>
                        <td>#AST-0011</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$300</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-success" /> Approved
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Catherine Manseau</td>
                        <td>
                          <strong>Canon Portable Printer</strong>
                        </td>
                        <td>#AST-0012</td>
                        <td>14 Jan 2019</td>
                        <td>12 Months</td>
                        <td>14 Jan 2019</td>
                        <td>$2500</td>
                        <td className="text-center">
                          <div className="dropdown action-label">
                            <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                              <i className="fa fa-dot-circle-o text-info" /> Returned
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Pending</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Approved</a>
                              <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-info" /> Returned</a>
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown dropdown-action">
                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_asset"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
          {/* Add Asset Modal */}
          <div id="add_asset" className="modal custom-modal fade" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Asset</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Asset Name</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Asset Id</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Purchase Date</label>
                          <input className="form-control datetimepicker" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Purchase From</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Manufacturer</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Model</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Serial Number</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Supplier</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Condition</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Warranty</label>
                          <input className="form-control" type="text" placeholder="In Months" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Value</label>
                          <input placeholder="$1800" className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Asset User</label>
                          <select className="select">
                            <option>John Doe</option>
                            <option>Richard Miles</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Status</label>
                          <select className="select">
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Deployed</option>
                            <option>Damaged</option>
                          </select>
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
          {/* /Add Asset Modal */}
          {/* Edit Asset Modal */}
          <div id="edit_asset" className="modal custom-modal fade" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Asset</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Asset Name</label>
                          <input className="form-control" type="text" defaultValue="Dell Laptop" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Asset Id</label>
                          <input className="form-control" type="text" defaultValue="#AST-0001" readOnly />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Purchase Date</label>
                          <input className="form-control datetimepicker" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Purchase From</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Manufacturer</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Model</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Serial Number</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Supplier</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Condition</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Warranty</label>
                          <input className="form-control" type="text" placeholder="In Months" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Value</label>
                          <input placeholder="$1800" className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Asset User</label>
                          <select className="select">
                            <option>John Doe</option>
                            <option>Richard Miles</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea className="form-control" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Status</label>
                          <select className="select">
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Deployed</option>
                            <option>Damaged</option>
                          </select>
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
          {/* Edit Asset Modal */}
          {/* Delete Asset Modal */}
          <div className="modal custom-modal fade" id="delete_asset" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-header">
                    <h3>Delete Asset</h3>
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
          {/* /Delete Asset Modal */}
        </div>
           
      );
   }
}

export default Assets;

/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_01,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_11,Avatar_12,Avatar_13,Avatar_16} from "../../../Entryfile/imagepath"

import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"

class TrainingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data : [
         {id:1,trainingtype:'Node Training',image:Avatar_02,name:"John Doe",description:"Lorem ipsum dollar",timeduration:"7 May 2019 - 10 May 2019",status :"Active",cost:'400'},
         {id:2,trainingtype:"Git Training",image:Avatar_05,name:"Richard Miles",description:"Lorem ipsum dollar",timeduration:"7 May 2019 - 10 May 2019",status :"Active",cost:'400'},
         {id:3,trainingtype:"Swift Training",image:Avatar_11,name:"John Smith",description:"Lorem ipsum dollar",timeduration:"7 May 2019 - 10 May 2019",status :"Active",cost:'400'},
         {id:4,trainingtype:"Html Training",image:Avatar_10,name:"Mike Litorus",description:"Lorem ipsum dollar",timeduration:"7 May 2019 - 10 May 2019",status :"Inactive",cost:'400'},
         {id:5,trainingtype:"Laravel Training",image:Avatar_09,name:"Wilmer Deluna",description:"Lorem ipsum dollar",timeduration:"7 May 2019 - 10 May 2019",status :"Inactive",cost:'800'},
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
        title: 'Traning Type',
        dataIndex: 'trainingtype',
          sorter: (a, b) => a.trainingtype.length - b.trainingtype.length,
      },
      {
        title: 'Trainer',
        dataIndex: 'name',
        render: (text, record) => (            
            <h2 className="table-avatar">
              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></a>
              <a href="/purple/app/profile/employee-profile">{text} <span>{record.name}</span></a>
            </h2>
          ), 
          sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: 'Employee',
        dataIndex: 'employee',
        render: (text, record) => (
          <ul className="team-members">
          <li>
            <a href="#" title="Bernardo Galaviz" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
          </li>
          <li>
            <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
          </li>
          <li className="dropdown avatar-dropdown">
            <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="avatar-group">
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_02} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_09} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_10} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_05} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_11} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_12} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_13} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_01} />
                </a>
                <a className="avatar avatar-xs" href="#">
                  <img alt="" src={Avatar_16} />
                </a>
              </div>
              <div className="avatar-pagination">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li> 
        </ul>
          ),
        sorter: (a, b) => a.employee.length - b.employee.length,
      },
      {
        title: 'Time Duration',
        dataIndex: 'timeduration',
        sorter: (a, b) => a.timeduration.length - b.timeduration.length,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
      },
      {
        title: 'Cost',
        dataIndex: 'cost',
        render: (text, record) => (
        <span>$ {text}</span>
          ),
        sorter: (a, b) => a.cost.length - b.cost.length,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: (text, record) => (
          <div className="dropdown action-label">
              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className={text==="Inactive" ?"fa fa-dot-circle-o text-danger" : "fa fa-dot-circle-o text-success"} /> {text}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Active</a>
                <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> Inactive</a>
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
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_training"><i className="fa fa-pencil m-r-5" /> Edit</a>
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_training"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                </div>
            </div>
          ),
      },
    ]
      return ( 
            <div className="page-wrapper">
            <Helmet>
                <title>Training - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Training</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item active">Training</li>
                    </ul>
                  </div>
                  <div className="col-auto float-right ml-auto">
                    <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_training"><i className="fa fa-plus" /> Add New </a>
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
                          <th>Training Type</th>
                          <th>Trainer</th>
                          <th>Employee</th>
                          <th>Time Duration</th>
                          <th>Description </th>
                          <th>Cost </th>
                          <th>Status </th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Git Training</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02} /></a>
                              <a href="/purple/app/profile/employee-profile">John Doe </a>
                            </h2>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a href="#" title="Bernardo Galaviz" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_02} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_09} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_10} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_05} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_11} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_12} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_13} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_01} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_16} />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                      </li>
                                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li> 
                            </ul>
                          </td>
                          <td>7 May 2019 - 10 May 2019</td>
                          <td>Lorem ipsum dollar</td>
                          <td>$400</td>
                          <td>
                            <div className="dropdown action-label">
                              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-dot-circle-o text-success" /> Active
                              </a>
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
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_training"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_training"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Swift Training</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_09} /></a>
                              <a href="/purple/app/profile/employee-profile">Richard Miles</a>
                            </h2>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_02} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_09} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_10} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_05} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_11} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_12} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_13} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_01} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_16} />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                      </li>
                                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li> 
                            </ul>
                          </td>
                          <td>7 May 2019 - 10 May 2019</td>
                          <td>Lorem ipsum dollar</td>
                          <td>$800</td>
                          <td>
                            <div className="dropdown action-label">
                              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-dot-circle-o text-danger" /> Inactive
                              </a>
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
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_training"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_training"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Node Training</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_02} /></a>
                              <a href="/purple/app/profile/employee-profile">John Doe </a>
                            </h2>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a href="#" title="Bernardo Galaviz" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_02} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_09} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_10} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_05} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_11} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_12} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_13} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_01} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_16} />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                      </li>
                                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li> 
                            </ul>
                          </td>
                          <td>7 May 2019 - 10 May 2019</td>
                          <td>Lorem ipsum dollar</td>
                          <td>$400</td>
                          <td>
                            <div className="dropdown action-label">
                              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-dot-circle-o text-success" /> Active
                              </a>
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
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_training"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_training"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Angular Training</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_05} /></a>
                              <a href="/purple/app/profile/employee-profile">Mike Litorus </a>
                            </h2>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a href="#" title="Bernardo Galaviz" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_02} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_09} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_10} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_05} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_11} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_12} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_13} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_01} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_16} />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                      </li>
                                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li> 
                            </ul>
                          </td>
                          <td>7 May 2019 - 10 May 2019</td>
                          <td>Lorem ipsum dollar</td>
                          <td>$400</td>
                          <td>
                            <div className="dropdown action-label">
                              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-dot-circle-o text-success" /> Active
                              </a>
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
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_training"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_training"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Git Training</td>
                          <td>
                            <h2 className="table-avatar">
                              <a href="/purple/app/profile/employee-profile" className="avatar"><img alt="" src={Avatar_11} /></a>
                              <a href="/purple/app/profile/employee-profile">Wilmer Deluna </a>
                            </h2>
                          </td>
                          <td>
                            <ul className="team-members">
                              <li>
                                <a href="#" title="Bernardo Galaviz" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li className="dropdown avatar-dropdown">
                                <a href="#" className="all-users dropdown-toggle" data-toggle="dropdown" aria-expanded="false">+15</a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <div className="avatar-group">
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_02} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_09} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_10} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_05} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_11} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_12} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_13} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_01} />
                                    </a>
                                    <a className="avatar avatar-xs" href="#">
                                      <img alt="" src={Avatar_16} />
                                    </a>
                                  </div>
                                  <div className="avatar-pagination">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                          <span aria-hidden="true">«</span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                      </li>
                                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                                      <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                          <span aria-hidden="true">»</span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li> 
                            </ul>
                          </td>
                          <td>7 May 2019 - 10 May 2019</td>
                          <td>Lorem ipsum dollar</td>
                          <td>$400</td>
                          <td>
                            <div className="dropdown action-label">
                              <a className="btn btn-white btn-sm btn-rounded dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-dot-circle-o text-success" /> Active
                              </a>
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
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_training"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_training"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
            {/* Add Training List Modal */}
            <div id="add_training" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add New Training</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Training Type</label>
                            <select className="select">
                              <option>Node Training</option>
                              <option>Swift Training</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Trainer</label>
                            <select className="select">
                              <option>Mike Litorus </option>
                              <option>John Doe</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Employees</label>
                            <select className="select">
                              <option>Bernardo Galaviz</option>
                              <option>Jeffrey Warden</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Training Cost <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Start Date <span className="text-danger">*</span></label>
                            <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>End Date <span className="text-danger">*</span></label>
                            <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Description <span className="text-danger">*</span></label>
                            <textarea className="form-control" rows={4} defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label className="col-form-label">Status</label>
                            <select className="select">
                              <option>Active</option>
                              <option>Inactive</option>
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
            {/* /Add Training List Modal */}
            {/* Edit Training List Modal */}
            <div id="edit_training" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Training List</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Training Type</label>
                            <select className="select">
                              <option >Node Training</option>
                              <option>Swift Training</option>
                              <option>Git Training</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Trainer</label>
                            <select className="select">
                              <option>Mike Litorus </option>
                              <option >John Doe</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Employees</label>
                            <select className="select">
                              <option>Bernardo Galaviz</option>
                              <option >Jeffrey Warden</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-form-label">Training Cost <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" defaultValue="$400" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Start Date <span className="text-danger">*</span></label>
                            <div className="cal-icon"><input className="form-control datetimepicker" defaultValue="07-08-2019" type="text" /></div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>End Date <span className="text-danger">*</span></label>
                            <div className="cal-icon"><input className="form-control datetimepicker" defaultValue="10-08-2019" type="text" /></div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Description <span className="text-danger">*</span></label>
                            <textarea className="form-control" rows={4} defaultValue={"Lorem ipsum ismap"} />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label className="col-form-label">Status</label>
                            <select className="select">
                              <option >Active</option>
                              <option>Inactive</option>
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
            {/* /Edit Training List Modal */}
            {/* Delete Training List Modal */}
            <div className="modal custom-modal fade" id="delete_training" role="dialog">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-header">
                      <h3>Delete Training List</h3>
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
            {/* /Delete Training List Modal */}
          </div>
      );
   }
}

export default TrainingList;

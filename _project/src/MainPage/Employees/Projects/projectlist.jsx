
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_16,Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_11,Avatar_12,Avatar_13,
    Avatar_01} from "../../../Entryfile/imagepath"
    
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

import "../../index.css"

class Projects extends Component {
  onImageUpload = (fileList) => {

    const reader = new FileReader();
    reader.onloadend = () => {
      ReactSummernote.insertImage(reader.result);
    }
    reader.readAsDataURL(fileList[0]);
  
  }
   render() {
      return (         
      <div className="page-wrapper">
        <Helmet>
            <title>Projects - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Projects</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Projects</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#create_project"><i className="fa fa-plus" /> Create Project</a>
              <div className="view-icons">
                <a href="/purple/app/projects/project_dashboard" className="grid-view btn btn-link"><i className="fa fa-th" /></a>
                <a href="/purple/app/projects/projects-list" className="list-view btn btn-link active"><i className="fa fa-bars" /></a>
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
              <label className="focus-label">Project Name</label>
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
                <option>Select Roll</option>
                <option>Web Developer</option>
                <option>Web Designer</option>
                <option>Android Developer</option>
                <option>Ios Developer</option>
              </select>
              <label className="focus-label">Role</label>
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
              <table className="table table-striped custom-table datatable">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Project Id</th>
                    <th>Leader</th>
                    <th>Team</th>
                    <th>Deadline</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Office Management</a>
                    </td>
                    <td>PRO-0001</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members text-nowrap">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
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
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Project Management</a>
                    </td>
                    <td>PRO-0002</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-warning" /> Medium </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> Inactive </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Video Calling App</a>
                    </td>
                    <td>PRO-0003</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Low </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Hospital Administration</a>
                    </td>
                    <td>PRO-0004</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Office Management</a>
                    </td>
                    <td>PRO-0005</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Project Management</a>
                    </td>
                    <td>PRO-0006</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Video Calling App</a>
                    </td>
                    <td>PRO-0007</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Hospital Administration</a>
                    </td>
                    <td>PRO-0008</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Office Management</a>
                    </td>
                    <td>PRO-0009</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Project Management</a>
                    </td>
                    <td>PRO-0010</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="/purple/app/projects/projects-view">Video Calling App</a>
                    </td>
                    <td>PRO-0011</td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul className="team-members">
                        <li>
                          <a href="#" title="John Doe" data-toggle="tooltip"><img alt="" src={Avatar_02} /></a>
                        </li>
                        <li>
                          <a href="#" title="Richard Miles" data-toggle="tooltip"><img alt="" src={Avatar_09} /></a>
                        </li>
                        <li>
                          <a href="#" title="John Smith" data-toggle="tooltip"><img alt="" src={Avatar_10} /></a>
                        </li>
                        <li>
                          <a href="#" title="Mike Litorus" data-toggle="tooltip"><img alt="" src={Avatar_05} /></a>
                        </li>
                        <li>
                          <a href="#" className="all-users">+15</a>
                        </li>
                      </ul>
                    </td>
                    <td>17 Apr 2019 </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-danger" /> High </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-danger" /> High</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-warning" /> Medium</a>
                          <a className="dropdown-item" href="#"><i className="fa fa-dot-circle-o text-success" /> Low</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown action-label">
                        <a href className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-dot-circle-o text-success" /> Active </a>
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
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_project"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_project"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Create Project Modal */}
      <div id="create_project" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Project Name</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Client</label>
                      <select className="select">
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <div className="cal-icon">
                        <input className="form-control datetimepicker" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <div className="cal-icon">
                        <input className="form-control datetimepicker" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Rate</label>
                      <input placeholder="$50" className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>&nbsp;</label>
                      <select className="select">
                        <option>Hourly</option>
                        <option>Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Project Leader</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Leader</label>
                      <div className="project-members">
                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor" className="avatar">
                          <img src={Avatar_16} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Team</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Members</label>
                      <div className="project-members">
                        <a href="#" data-toggle="tooltip" title="John Doe" className="avatar">
                          <img src={Avatar_16} alt="" />
                        </a>
                        <a href="#" data-toggle="tooltip" title="Richard Miles" className="avatar">
                          <img src={Avatar_09} alt="" />
                        </a>
                        <a href="#" data-toggle="tooltip" title="John Smith" className="avatar">
                          <img src={Avatar_10} alt="" />
                        </a>
                        <a href="#" data-toggle="tooltip" title="Mike Litorus" className="avatar">
                          <img src={Avatar_05} alt="" />
                        </a>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <ReactSummernote
                      value="Default value"
                      options={{
                        lang: 'ru-RU',
                        height: 350,
                        dialogsInBody: true,
                        toolbar: [
                          ['style', ['style']],
                          ['font', ['bold', 'underline', 'clear']],
                          ['fontname', ['fontname']],
                          ['para', ['ul', 'ol', 'paragraph']],
                          ['table', ['table']],
                          ['insert', ['link', 'picture', 'video']],
                          ['view', ['fullscreen', 'codeview']]
                        ]
                      }}
                      onChange={this.onChange}
                      onImageUpload={this.onImageUpload}
                    />
                  {/* <textarea rows={4} className="form-control summernote" placeholder="Enter your message here" defaultValue={""} /> */}
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Create Project Modal */}
      {/* Edit Project Modal */}
      <div id="edit_project" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Project</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Project Name</label>
                      <input className="form-control" defaultValue="Project Management" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Client</label>
                      <select className="select">
                        <option>Global Technologies</option>
                        <option>Delta Infotech</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Date</label>
                      <div className="cal-icon">
                        <input className="form-control datetimepicker" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>End Date</label>
                      <div className="cal-icon">
                        <input className="form-control datetimepicker" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>Rate</label>
                      <input placeholder="$50" className="form-control" defaultValue="$5000" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="form-group">
                      <label>&nbsp;</label>
                      <select className="select">
                        <option>Hourly</option>
                        <option >Fixed</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Priority</label>
                      <select className="select">
                        <option >High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Project Leader</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Leader</label>
                      <div className="project-members">
                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor" className="avatar">
                          <img src={Avatar_16} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Add Team</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Team Members</label>
                      <div className="project-members">
                        <a href="#" data-toggle="tooltip" title="John Doe" className="avatar">
                          <img src={Avatar_16} alt="" />
                        </a>
                        <a href="#" data-toggle="tooltip" title="Richard Miles" className="avatar">
                          <img src={Avatar_09} alt="" />
                        </a>
                        <a href="#" data-toggle="tooltip" title="John Smith" className="avatar">
                          <img src={Avatar_10} alt="" />
                        </a>
                        <a href="#" data-toggle="tooltip" title="Mike Litorus" className="avatar">
                          <img src={Avatar_05} alt="" />
                        </a>
                        <span className="all-team">+2</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea rows={4} className="form-control" placeholder="Enter your message here" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Upload Files</label>
                  <input className="form-control" type="file" />
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Project Modal */}
      {/* Delete Project Modal */}
      <div className="modal custom-modal fade" id="delete_project" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Project</h3>
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
      {/* /Delete Project Modal */}
    </div>
      );
   }
}

export default Projects;

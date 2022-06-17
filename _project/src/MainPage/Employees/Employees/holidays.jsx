
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_11, Avatar_09, Avatar_02, Avatar_10, Avatar_05, Avatar_08 } from "../../../Entryfile/imagepath"

class Holidays extends Component {
   render() {
      return (
        
      <div className="page-wrapper"> 
      <Helmet>
          <title>Holidays - HRMS Admin Template</title>
          <meta name="description" content="Login page"/>					
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Holidays 2019</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Holidays</li>
              </ul>
            </div>
            <div className="col-auto float-right ml-auto">
              <a href="#" className="btn add-btn" data-toggle="modal" data-target="#add_holiday"><i className="fa fa-plus" /> Add Holiday</a>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title </th>
                    <th>Holiday Date</th>
                    <th>Day</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="holiday-completed">
                    <td>1</td>
                    <td>New Year</td>
                    <td>1 Jan 2019</td>
                    <td>Sunday</td>
                    <td />
                  </tr>
                  <tr className="holiday-completed">
                    <td>2</td>
                    <td>Good Friday</td>
                    <td>14 Apr 2019</td>
                    <td>Friday</td>
                    <td />
                  </tr>
                  <tr className="holiday-completed">
                    <td>3</td>
                    <td>May Day</td>
                    <td>1 May 2019</td>
                    <td>Monday</td>
                    <td className="text-center">
                    </td>
                  </tr>
                  <tr className="holiday-completed">
                    <td>4</td>
                    <td>Memorial Day</td>
                    <td>28 May 2019</td>
                    <td>Monday</td>
                    <td className="text-center">
                    </td>
                  </tr>
                  <tr className="holiday-completed">
                    <td>5</td>
                    <td>Ramzon</td>
                    <td>26 Jun 2019</td>
                    <td>Monday</td>
                    <td />
                  </tr>
                  <tr className="holiday-upcoming">
                    <td>6</td>
                    <td>Bakrid</td>
                    <td>2 Sep 2019</td>
                    <td>Saturday</td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_holiday"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="holiday-upcoming">
                    <td>7</td>
                    <td>Deepavali</td>
                    <td>18 Oct 2019</td>
                    <td>Wednesday</td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_holiday"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="holiday-upcoming">
                    <td>8</td>
                    <td>Christmas</td>
                    <td>25 Dec 2019</td>
                    <td>Monday</td>
                    <td className="text-right">
                      <div className="dropdown dropdown-action">
                        <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_holiday"><i className="fa fa-pencil m-r-5" /> Edit</a>
                          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_holiday"><i className="fa fa-trash-o m-r-5" /> Delete</a>
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
      {/* Add Holiday Modal */}
      <div className="modal custom-modal fade" id="add_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Holiday</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Holiday Name <span className="text-danger">*</span></label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Holiday Date <span className="text-danger">*</span></label>
                  <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Holiday Modal */}
      {/* Edit Holiday Modal */}
      <div className="modal custom-modal fade" id="edit_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Holiday</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Holiday Name <span className="text-danger">*</span></label>
                  <input className="form-control" defaultValue="New Year" type="text" />
                </div>
                <div className="form-group">
                  <label>Holiday Date <span className="text-danger">*</span></label>
                  <div className="cal-icon"><input className="form-control datetimepicker" defaultValue="01-01-2019" type="text" /></div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Holiday Modal */}
      {/* Delete Holiday Modal */}
      <div className="modal custom-modal fade" id="delete_holiday" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Holiday</h3>
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
      {/* /Delete Holiday Modal */}
    </div>
        );
   }
}

export default Holidays;

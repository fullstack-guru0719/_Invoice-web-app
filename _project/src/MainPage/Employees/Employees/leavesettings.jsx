
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_02 } from "../../../Entryfile/imagepath"

class LeaveSettings extends Component {
   render() {
      return (         
      <div className="page-wrapper">
        <Helmet>
            <title>Leave Settings - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Leave Settings</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Leave Settings</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            {/* Annual Leave */}
            <div className="card leave-box" id="leave_annual">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Annual 											
                  <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_annual" defaultChecked />
                    <label className="onoffswitch-label" htmlFor="switch_annual">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  {/* Annual Days Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input type="text" className="form-control" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Annual Days Leave */}
                  {/* Carry Forward */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Carry forward</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="carry_no" defaultValue="option1" disabled />
                            <label className="form-check-label" htmlFor="carry_no">No</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="carry_yes" defaultValue="option2" disabled />
                            <label className="form-check-label" htmlFor="carry_yes">Yes</label>
                          </div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Max</span>
                            </div>
                            <input type="text" className="form-control" disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                  {/* /Carry Forward */}
                  {/* Earned Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Earned leave</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="earned_no" defaultValue="option1" disabled />
                            <label className="form-check-label" htmlFor="earned_no">No</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="earned_yes" defaultValue="option2" disabled />
                            <label className="form-check-label" htmlFor="earned_yes">Yes</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                  {/* /Earned Leave */}
                </div>
                {/* Custom Policy */}
                <div className="custom-policy">
                  <div className="leave-header">
                    <div className="title">Custom policy</div>
                    <div className="leave-action">
                      <button className="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#add_custom_policy"><i className="fa fa-plus" /> Add custom policy</button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap leave-table mb-0">
                      <thead>
                        <tr>
                          <th className="l-name">Name</th>
                          <th className="l-days">Days</th>
                          <th className="l-assignee">Assignee</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 Year Service </td>
                          <td>5</td>
                          <td>
                            <a href="#" className="avatar"><img alt="" src={Avatar_02} /></a>
                            <a href="#">John Doe</a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_custom_policy"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_custom_policy"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /Custom Policy */}
              </div>
            </div>
            {/* /Annual Leave */}
            {/* Sick Leave */}
            <div className="card leave-box" id="leave_sick">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Sick 											
                  <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_sick" defaultChecked />
                    <label className="onoffswitch-label" htmlFor="switch_sick">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input type="text" className="form-control" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Sick Leave */}
            {/* Hospitalisation Leave */}
            <div className="card leave-box" id="leave_hospitalisation">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Hospitalisation 											
                  <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_hospitalisation" />
                    <label className="onoffswitch-label" htmlFor="switch_hospitalisation">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  {/* Annual Days Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input type="text" className="form-control" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                  {/* /Annual Days Leave */}
                </div>
                {/* Custom Policy */}
                <div className="custom-policy">
                  <div className="leave-header">
                    <div className="title">Custom policy</div>
                    <div className="leave-action">
                      <button className="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#add_custom_policy"><i className="fa fa-plus" /> Add custom policy</button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap leave-table mb-0">
                      <thead>
                        <tr>
                          <th className="l-name">Name</th>
                          <th className="l-days">Days</th>
                          <th className="l-assignee">Assignee</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 Year Service </td>
                          <td>5</td>
                          <td>
                            <a href="#" className="avatar"><img alt="" src={Avatar_02} /></a>
                            <a href="#">John Doe</a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /Custom Policy */}
              </div>
            </div>
            {/* /Hospitalisation Leave */}
            {/* Maternity Leave */}
            <div className="card leave-box" id="leave_maternity">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Maternity  <span className="subtitle">Assigned to female only</span>
                  <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_maternity" defaultChecked />
                    <label className="onoffswitch-label" htmlFor="switch_maternity">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input type="text" className="form-control" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Maternity Leave */}
            {/* Paternity Leave */}
            <div className="card leave-box" id="leave_paternity">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Paternity  <span className="subtitle">Assigned to male only</span>
                  <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_paternity" />
                    <label className="onoffswitch-label" htmlFor="switch_paternity">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input type="text" className="form-control" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Paternity Leave */}
            {/* Custom Create Leave */}
            <div className="card leave-box mb-0" id="leave_custom01">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  LOP 											
                  <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_custom01" defaultChecked />
                    <label className="onoffswitch-label" htmlFor="switch_custom01">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                  <button className="btn btn-danger leave-delete-btn" type="button">Delete</button>
                </div>
                <div className="leave-item">
                  {/* Annual Days Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input type="text" className="form-control" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Annual Days Leave */}
                  {/* Carry Forward */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Carry forward</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="carryForward" id="carry_no_01" defaultValue="option1" disabled />
                            <label className="form-check-label" htmlFor="carry_no_01">No</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="carryForward" id="carry_yes_01" defaultValue="option2" disabled />
                            <label className="form-check-label" htmlFor="carry_yes_01">Yes</label>
                          </div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Max</span>
                            </div>
                            <input type="text" className="form-control" disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                  {/* /Carry Forward */}
                  {/* Earned Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Earned leave</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" disabled />
                            <label className="form-check-label" htmlFor="inlineRadio1">No</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" disabled />
                            <label className="form-check-label" htmlFor="inlineRadio2">Yes</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">
                        Edit
                      </button>
                    </div>
                  </div>
                  {/* /Earned Leave */}
                </div>
                {/* Custom Policy */}
                <div className="custom-policy">
                  <div className="leave-header">
                    <div className="title">Custom policy</div>
                    <div className="leave-action">
                      <button className="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#add_custom_policy"><i className="fa fa-plus" /> Add custom policy</button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap leave-table mb-0">
                      <thead>
                        <tr>
                          <th className="l-name">Name</th>
                          <th className="l-days">Days</th>
                          <th className="l-assignee">Assignee</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 Year Service </td>
                          <td>5</td>
                          <td>
                            <a href="#" className="avatar"><img alt="" src={Avatar_02} /></a>
                            <a href="#">John Doe</a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item" data-toggle="modal" data-target="#edit_custom_policy"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                <a href="#" className="dropdown-item" data-toggle="modal" data-target="#delete_custom_policy"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /Custom Policy */}
              </div>
            </div>
            {/* /Custom Create Leave */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Custom Policy Modal */}
      <div id="add_custom_policy" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Custom Policy</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Policy Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Days <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group leave-duallist">
                  <label>Add employee</label>
                  <div className="row">
                    <div className="col-lg-5 col-sm-5">
                      <select name="customleave_from" id="customleave_select" className="form-control" size={5} multiple="multiple">
                        <option value={1}>Bernardo Galaviz </option>
                        <option value={2}>Jeffrey Warden</option>
                        <option value={2}>John Doe</option>
                        <option value={2}>John Smith</option>
                        <option value={3}>Mike Litorus</option>
                      </select>
                    </div>
                    <div className="multiselect-controls col-lg-2 col-sm-2">
                      <button type="button" id="customleave_select_rightAll" className="btn btn-block btn-white"><i className="fa fa-forward" /></button>
                      <button type="button" id="customleave_select_rightSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-right" /></button>
                      <button type="button" id="customleave_select_leftSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-left" /></button>
                      <button type="button" id="customleave_select_leftAll" className="btn btn-block btn-white"><i className="fa fa-backward" /></button>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                      <select name="customleave_to" id="customleave_select_to" className="form-control" size={8} multiple="multiple" />
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
      {/* /Add Custom Policy Modal */}
      {/* Edit Custom Policy Modal */}
      <div id="edit_custom_policy" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Custom Policy</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Policy Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" defaultValue="LOP" />
                </div>
                <div className="form-group">
                  <label>Days <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" defaultValue={4} />
                </div>
                <div className="form-group leave-duallist">
                  <label>Add employee</label>
                  <div className="row">
                    <div className="col-lg-5 col-sm-5">
                      <select name="edit_customleave_from" id="edit_customleave_select" className="form-control" size={5} multiple="multiple">
                        <option value={1}>Bernardo Galaviz </option>
                        <option value={2}>Jeffrey Warden</option>
                        <option value={2}>John Doe</option>
                        <option value={2}>John Smith</option>
                        <option value={3}>Mike Litorus</option>
                      </select>
                    </div>
                    <div className="multiselect-controls col-lg-2 col-sm-2">
                      <button type="button" id="edit_customleave_select_rightAll" className="btn btn-block btn-white"><i className="fa fa-forward" /></button>
                      <button type="button" id="edit_customleave_select_rightSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-right" /></button>
                      <button type="button" id="edit_customleave_select_leftSelected" className="btn btn-block btn-white"><i className="fa fa-chevron-left" /></button>
                      <button type="button" id="edit_customleave_select_leftAll" className="btn btn-block btn-white"><i className="fa fa-backward" /></button>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                      <select name="customleave_to" id="edit_customleave_select_to" className="form-control" size={8} multiple="multiple" />
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
      {/* /Edit Custom Policy Modal */}
      {/* Delete Custom Policy Modal */}
      <div className="modal custom-modal fade" id="delete_custom_policy" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Custom Policy</h3>
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
      {/* /Delete Custom Policy Modal */}
    </div>
        );
   }
}

export default LeaveSettings;

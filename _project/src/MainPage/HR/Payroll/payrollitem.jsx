
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class PayrollItems extends Component {
   render() {
      return ( 
         <div className="page-wrapper">
         <Helmet>
             <title>Payroll Items - HRMS Admin Template</title>
             <meta name="description" content="Login page"/>					
         </Helmet>
         {/* Page Content */}
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row align-items-center">
               <div className="col">
                 <h3 className="page-title">Payroll Items</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                   <li className="breadcrumb-item active">Payroll Items</li>
                 </ul>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           {/* Page Tab */}
           <div className="page-menu">
             <div className="row">
               <div className="col-sm-12">
                 <ul className="nav nav-tabs nav-tabs-bottom">
                   <li className="nav-item">
                     <a className="nav-link active" data-toggle="tab" href="#tab_additions">Additions</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" data-toggle="tab" href="#tab_overtime">Overtime</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link" data-toggle="tab" href="#tab_deductions">Deductions</a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           {/* /Page Tab */}
           {/* Tab Content */}
           <div className="tab-content">
             {/* Additions Tab */}
             <div className="tab-pane show active" id="tab_additions">
               {/* Add Addition Button */}
               <div className="text-right mb-4 clearfix">
                 <button className="btn btn-primary add-btn" type="button" data-toggle="modal" data-target="#add_addition"><i className="fa fa-plus" /> Add Addition</button>
               </div>
               {/* /Add Addition Button */}
               {/* Payroll Additions Table */}
               <div className="payroll-table card">
                 <div className="table-responsive">
                   <table className="table table-hover table-radius">
                     <thead>
                       <tr>
                         <th>Name</th>
                         <th>Category</th>
                         <th>Default/Unit Amount</th>
                         <th className="text-right">Action</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <th>Leave balance amount</th>
                         <td>Monthly remuneration</td>
                         <td>$5</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_addition"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_addition"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <th>Arrears of salary</th>
                         <td>Additional remuneration</td>
                         <td>$8</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_addition"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_addition"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <th>Gratuity</th>
                         <td>Monthly remuneration</td>
                         <td>$20</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_addition"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_addition"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
               {/* /Payroll Additions Table */}
             </div>
             {/* Additions Tab */}
             {/* Overtime Tab */}
             <div className="tab-pane" id="tab_overtime">
               {/* Add Overtime Button */}
               <div className="text-right mb-4 clearfix">
                 <button className="btn btn-primary add-btn" type="button" data-toggle="modal" data-target="#add_overtime"><i className="fa fa-plus" /> Add Overtime</button>
               </div>
               {/* /Add Overtime Button */}
               {/* Payroll Overtime Table */}
               <div className="payroll-table card">
                 <div className="table-responsive">
                   <table className="table table-hover table-radius">
                     <thead>
                       <tr>
                         <th>Name</th>
                         <th>Rate</th>
                         <th className="text-right">Action</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <th>Normal day OT 1.5x</th>
                         <td>Hourly 1.5</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_overtime"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_overtime"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <th>Public holiday OT 3.0x</th>
                         <td>Hourly 3</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_overtime"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_overtime"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <th>Rest day OT 2.0x</th>
                         <td>Hourly 2</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_overtime"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_overtime"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
               {/* /Payroll Overtime Table */}
             </div>
             {/* /Overtime Tab */}
             {/* Deductions Tab */}
             <div className="tab-pane" id="tab_deductions">
               {/* Add Deductions Button */}
               <div className="text-right mb-4 clearfix">
                 <button className="btn btn-primary add-btn" type="button" data-toggle="modal" data-target="#add_deduction"><i className="fa fa-plus" /> Add Deduction</button>
               </div>
               {/* /Add Deductions Button */}
               {/* Payroll Deduction Table */}
               <div className="payroll-table card">
                 <div className="table-responsive">
                   <table className="table table-hover table-radius">
                     <thead>
                       <tr>
                         <th>Name</th>
                         <th>Default/Unit Amount</th>
                         <th className="text-right">Action</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <th>Absent amount</th>
                         <td>$12</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_deduction"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_deduction"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <th>Advance</th>
                         <td>$7</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_deduction"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_deduction"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <th>Unpaid leave</th>
                         <td>$3</td>
                         <td className="text-right">
                           <div className="dropdown dropdown-action">
                             <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
                             <div className="dropdown-menu dropdown-menu-right">
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#edit_deduction"><i className="fa fa-pencil m-r-5" /> Edit</a>
                               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_deduction"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                             </div>
                           </div>
                         </td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
               {/* /Payroll Deduction Table */}
             </div>
             {/* /Deductions Tab */}
           </div>
           {/* Tab Content */}
         </div>
         {/* /Page Content */}
         {/* Add Addition Modal */}
         <div id="add_addition" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Addition</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="form-group">
                     <label>Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="form-group">
                     <label>Category <span className="text-danger">*</span></label>
                     <select className="select">
                       <option>Select a category</option>
                       <option>Monthly remuneration</option>
                       <option>Additional remuneration</option>
                     </select>
                   </div>
                   <div className="form-group">
                     <label className="d-block">Unit calculation</label>
                     <div className="status-toggle">
                       <input type="checkbox" id="unit_calculation" className="check" />
                       <label htmlFor="unit_calculation" className="checktoggle">checkbox</label>
                     </div>
                   </div>
                   <div className="form-group">
                     <label>Unit Amount</label>
                     <div className="input-group">
                       <div className="input-group-prepend">
                         <span className="input-group-text">$</span>
                       </div>
                       <input type="text" className="form-control" />
                       <div className="input-group-append">
                         <span className="input-group-text">.00</span>
                       </div>
                     </div>
                   </div>
                   <div className="form-group">
                     <label className="d-block">Assignee</label>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="addition_assignee" id="addition_no_emp" defaultValue="option1" defaultChecked />
                       <label className="form-check-label" htmlFor="addition_no_emp">
                         No assignee
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="addition_assignee" id="addition_all_emp" defaultValue="option2" />
                       <label className="form-check-label" htmlFor="addition_all_emp">
                         All employees
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="addition_assignee" id="addition_single_emp" defaultValue="option3" />
                       <label className="form-check-label" htmlFor="addition_single_emp">
                         Select Employee
                       </label>
                     </div>
                     <div className="form-group">
                       <select className="select">
                         <option>-</option>
                         <option>Select All</option>
                         <option>John Doe</option>
                         <option>Richard Miles</option>
                       </select>
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
         {/* /Add Addition Modal */}
         {/* Edit Addition Modal */}
         <div id="edit_addition" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Addition</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="form-group">
                     <label>Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="form-group">
                     <label>Category <span className="text-danger">*</span></label>
                     <select className="select">
                       <option>Select a category</option>
                       <option>Monthly remuneration</option>
                       <option>Additional remuneration</option>
                     </select>
                   </div>
                   <div className="form-group">
                     <label className="d-block">Unit calculation</label>
                     <div className="status-toggle">
                       <input type="checkbox" id="edit_unit_calculation" className="check" />
                       <label htmlFor="edit_unit_calculation" className="checktoggle">checkbox</label>
                     </div>
                   </div>
                   <div className="form-group">
                     <label>Unit Amount</label>
                     <div className="input-group">
                       <div className="input-group-prepend">
                         <span className="input-group-text">$</span>
                       </div>
                       <input type="text" className="form-control" />
                       <div className="input-group-append">
                         <span className="input-group-text">.00</span>
                       </div>
                     </div>
                   </div>
                   <div className="form-group">
                     <label className="d-block">Assignee</label>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="edit_addition_assignee" id="edit_addition_no_emp" defaultValue="option1" defaultChecked />
                       <label className="form-check-label" htmlFor="edit_addition_no_emp">
                         No assignee
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="edit_addition_assignee" id="edit_addition_all_emp" defaultValue="option2" />
                       <label className="form-check-label" htmlFor="edit_addition_all_emp">
                         All employees
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="edit_addition_assignee" id="edit_addition_single_emp" defaultValue="option3" />
                       <label className="form-check-label" htmlFor="edit_addition_single_emp">
                         Select Employee
                       </label>
                     </div>
                     <div className="form-group">
                       <select className="select">
                         <option>-</option>
                         <option>Select All</option>
                         <option>John Doe</option>
                         <option>Richard Miles</option>
                       </select>
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
         {/* /Edit Addition Modal */}
         {/* Delete Addition Modal */}
         <div className="modal custom-modal fade" id="delete_addition" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Addition</h3>
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
         {/* /Delete Addition Modal */}
         {/* Add Overtime Modal */}
         <div id="add_overtime" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Overtime</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="form-group">
                     <label>Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="form-group">
                     <label>Rate Type <span className="text-danger">*</span></label>
                     <select className="select">
                       <option>-</option>
                       <option>Daily Rate</option>
                       <option>Hourly Rate</option>
                     </select>
                   </div>
                   <div className="form-group">
                     <label>Rate <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Submit</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Add Overtime Modal */}
         {/* Edit Overtime Modal */}
         <div id="edit_overtime" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Overtime</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="form-group">
                     <label>Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="form-group">
                     <label>Rate Type <span className="text-danger">*</span></label>
                     <select className="select">
                       <option>-</option>
                       <option>Daily Rate</option>
                       <option>Hourly Rate</option>
                     </select>
                   </div>
                   <div className="form-group">
                     <label>Rate <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="submit-section">
                     <button className="btn btn-primary submit-btn">Save</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
         {/* /Edit Overtime Modal */}
         {/* Delete Overtime Modal */}
         <div className="modal custom-modal fade" id="delete_overtime" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Overtime</h3>
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
         {/* /Delete Overtime Modal */}
         {/* Add Deduction Modal */}
         <div id="add_deduction" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Add Deduction</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="form-group">
                     <label>Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="form-group">
                     <label className="d-block">Unit calculation</label>
                     <div className="status-toggle">
                       <input type="checkbox" id="unit_calculation_deduction" className="check" />
                       <label htmlFor="unit_calculation_deduction" className="checktoggle">checkbox</label>
                     </div>
                   </div>
                   <div className="form-group">
                     <label>Unit Amount</label>
                     <div className="input-group">
                       <div className="input-group-prepend">
                         <span className="input-group-text">$</span>
                       </div>
                       <input type="text" className="form-control" />
                       <div className="input-group-append">
                         <span className="input-group-text">.00</span>
                       </div>
                     </div>
                   </div>
                   <div className="form-group">
                     <label className="d-block">Assignee</label>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="deduction_assignee" id="deduction_no_emp" defaultValue="option1" defaultChecked />
                       <label className="form-check-label" htmlFor="deduction_no_emp">
                         No assignee
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="deduction_assignee" id="deduction_all_emp" defaultValue="option2" />
                       <label className="form-check-label" htmlFor="deduction_all_emp">
                         All employees
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="deduction_assignee" id="deduction_single_emp" defaultValue="option3" />
                       <label className="form-check-label" htmlFor="deduction_single_emp">
                         Select Employee
                       </label>
                     </div>
                     <div className="form-group">
                       <select className="select">
                         <option>-</option>
                         <option>Select All</option>
                         <option>John Doe</option>
                         <option>Richard Miles</option>
                       </select>
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
         {/* /Add Deduction Modal */}
         {/* Edit Deduction Modal */}
         <div id="edit_deduction" className="modal custom-modal fade" role="dialog">
           <div className="modal-dialog modal-dialog-centered" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Edit Deduction</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">×</span>
                 </button>
               </div>
               <div className="modal-body">
                 <form>
                   <div className="form-group">
                     <label>Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" />
                   </div>
                   <div className="form-group">
                     <label className="d-block">Unit calculation</label>
                     <div className="status-toggle">
                       <input type="checkbox" id="edit_unit_calculation_deduction" className="check" />
                       <label htmlFor="edit_unit_calculation_deduction" className="checktoggle">checkbox</label>
                     </div>
                   </div>
                   <div className="form-group">
                     <label>Unit Amount</label>
                     <div className="input-group">
                       <div className="input-group-prepend">
                         <span className="input-group-text">$</span>
                       </div>
                       <input type="text" className="form-control" />
                       <div className="input-group-append">
                         <span className="input-group-text">.00</span>
                       </div>
                     </div>
                   </div>
                   <div className="form-group">
                     <label className="d-block">Assignee</label>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="edit_deduction_assignee" id="edit_deduction_no_emp" defaultValue="option1" defaultChecked />
                       <label className="form-check-label" htmlFor="edit_deduction_no_emp">
                         No assignee
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="edit_deduction_assignee" id="edit_deduction_all_emp" defaultValue="option2" />
                       <label className="form-check-label" htmlFor="edit_deduction_all_emp">
                         All employees
                       </label>
                     </div>
                     <div className="form-check form-check-inline">
                       <input className="form-check-input" type="radio" name="edit_deduction_assignee" id="edit_deduction_single_emp" defaultValue="option3" />
                       <label className="form-check-label" htmlFor="edit_deduction_single_emp">
                         Select Employee
                       </label>
                     </div>
                     <div className="form-group">
                       <select className="select">
                         <option>-</option>
                         <option>Select All</option>
                         <option>John Doe</option>
                         <option>Richard Miles</option>
                       </select>
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
         {/* /Edit Addition Modal */}
         {/* Delete Deduction Modal */}
         <div className="modal custom-modal fade" id="delete_deduction" role="dialog">
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-body">
                 <div className="form-header">
                   <h3>Delete Deduction</h3>
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
         {/* /Delete Deduction Modal */}
       </div>
      );
   }
}

export default PayrollItems;

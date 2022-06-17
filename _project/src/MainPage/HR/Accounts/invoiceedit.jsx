
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class EditInvoice extends Component {
   render() {
      return ( 
        <div className="page-wrapper">
              <Helmet>
                  <title>Edit Invoice - HRMS Admin Template</title>
                  <meta name="description" content="Login page"/>					
              </Helmet>
              {/* Page Content */}
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="page-title">Edit Invoice</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                        <li className="breadcrumb-item active">Edit Invoice</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                  <div className="col-md-12">
                    <form>
                      <div className="row">
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Client <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Please Select</option>
                              <option selected>Barry Cuda</option>
                              <option>Tressa Wexler</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Project <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Select Project</option>
                              <option selected>Office Management</option>
                              <option>Project Management</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="email" defaultValue="barrycuda@example.com" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Tax</label>
                            <select className="select">
                              <option>Select Tax</option>
                              <option>VAT</option>
                              <option selected>GST</option>
                              <option>No Tax</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Client Address</label>
                            <textarea className="form-control" rows={3} defaultValue={"5754 Airport Rd, Coosada, AL, 36020"} />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Billing Address</label>
                            <textarea className="form-control" rows={3} defaultValue={"5754 Airport Rd, Coosada, AL, 36020"} />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Invoice date <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                              <input className="form-control datetimepicker" type="text" defaultValue="2019/05/20" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Due Date <span className="text-danger">*</span></label>
                            <div className="cal-icon">
                              <input className="form-control datetimepicker" type="text" defaultValue="2019/05/27" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <div className="table-responsive">
                            <table className="table table-hover table-white">
                              <thead>
                                <tr>
                                  <th style={{width: '20px'}}>#</th>
                                  <th className="col-sm-2">Item</th>
                                  <th className="col-md-6">Description</th>
                                  <th style={{width: '100px'}}>Unit Cost</th>
                                  <th style={{width: '80px'}}>Qty</th>
                                  <th>Amount</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <input className="form-control" type="text" defaultValue="Vehicle Module" style={{minWidth: '150px'}} />
                                  </td>
                                  <td>
                                    <input className="form-control" type="text" defaultValue="Create, edit delete functionlity" style={{minWidth: '150px'}} />
                                  </td>
                                  <td>
                                    <input className="form-control" style={{width: '100px'}} type="text" defaultValue={112} />
                                  </td>
                                  <td>
                                    <input className="form-control" style={{width: '80px'}} type="text" defaultValue={1} />
                                  </td>
                                  <td>
                                    <input className="form-control" readOnly style={{width: '120px'}} type="text" defaultValue={112} />
                                  </td>
                                  <td><a href="javascript:void(0)" className="text-success font-18" title="Add"><i className="fa fa-plus" /></a></td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <input className="form-control" type="text" defaultValue="Vehicle Module" style={{minWidth: '150px'}} />
                                  </td>
                                  <td>
                                    <input className="form-control" type="text" defaultValue="Create, edit delete functionlity" style={{minWidth: '150px'}} />
                                  </td>
                                  <td>
                                    <input className="form-control" style={{width: '100px'}} type="text" defaultValue={112} />
                                  </td>
                                  <td>
                                    <input className="form-control" style={{width: '80px'}} type="text" defaultValue={1} />
                                  </td>
                                  <td>
                                    <input className="form-control" readOnly style={{width: '120px'}} type="text" defaultValue={112} />
                                  </td>
                                  <td><a href="javascript:void(0)" className="text-danger font-18" title="Remove"><i className="fa fa-trash-o" /></a></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="table-responsive">
                            <table className="table table-hover table-white">
                              <tbody>
                                <tr>
                                  <td />
                                  <td />
                                  <td />
                                  <td />
                                  <td className="text-right">Total</td>
                                  <td style={{textAlign: 'right', width: '230px'}}>112</td>
                                </tr>
                                <tr>
                                  <td colSpan={5} style={{textAlign: 'right'}}>Tax</td>
                                  <td style={{textAlign: 'right', width: '230px'}}>
                                    <input className="form-control text-right" defaultValue={0} readOnly type="text" />
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={5} style={{textAlign: 'right'}}>
                                    Discount %
                                  </td>
                                  <td style={{textAlign: 'right', width: '230px'}}>
                                    <input className="form-control text-right" defaultValue={0} type="text" />
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={5} style={{textAlign: 'right', fontWeight: 'bold'}}>
                                    Grand Total
                                  </td>
                                  <td style={{textAlign: 'right', fontWeight: 'bold', fontSize: '16px', width: '230px'}}>
                                    $ 112
                                  </td>
                                </tr>
                              </tbody>
                            </table>                               
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Other Information</label>
                                <textarea className="form-control" rows={4} defaultValue={""} />
                              </div>
                            </div>
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
              {/* /Page Content */}
            </div>
      );
   }
}

export default EditInvoice;

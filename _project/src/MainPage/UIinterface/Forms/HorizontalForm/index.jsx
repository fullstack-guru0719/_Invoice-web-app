/**
 * Form Elemets
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class FormElements extends Component {
	
	render() {
		return (
            <div className="page-wrapper">
			<Helmet>
				  <title>Horizontal Form - HRMS Admin Template</title>
				  <meta name="description" content="Login page"/>					
			</Helmet>
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Horizontal Form</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                  <li className="breadcrumb-item active">Horizontal Form</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Form</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">First Name</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Last Name</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Email Address</label>
                      <div className="col-lg-9">
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Username</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Password</label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Repeat Password</label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h4 className="card-title mb-0">Address Form</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Address 1</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Address 2</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">City</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">State</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Country</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label">Postal Code</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Two Column Horizontal Form</h4>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Personal Information</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">First Name</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Last Name</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Gender</label>
                          <div className="col-lg-9">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="gender" id="gender_male" defaultValue="option1" defaultChecked />
                              <label className="form-check-label" htmlFor="gender_male">
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="gender" id="gender_female" defaultValue="option2" />
                              <label className="form-check-label" htmlFor="gender_female">
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Blood Group</label>
                          <div className="col-lg-9">
                            <select className="select">
                              <option>Select</option>
                              <option value={1}>A+</option>
                              <option value={2}>O+</option>
                              <option value={3}>B+</option>
                              <option value={4}>AB+</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Username</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Email</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Password</label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Repeat Password</label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="card-title">Address</h4>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Address Line 1</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Address Line 2</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">State</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">City</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Country</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Postal Code</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Two Column Horizontal Form</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <h4 className="card-title">Personal Details</h4>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">First Name</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Last Name</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Password</label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">State</label>
                          <div className="col-lg-9">
                            <select className="select">
                              <option>Select State</option>
                              <option value={1}>California</option>
                              <option value={2}>Texas</option>
                              <option value={3}>Florida</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">About</label>
                          <div className="col-lg-9">
                            <textarea rows={4} cols={5} className="form-control" placeholder="Enter message" defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <h4 className="card-title">Personal details</h4>
                        <div className="row">
                          <label className="col-lg-3 col-form-label">Name</label>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" placeholder="First Name" className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" placeholder="Last Name" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Email</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Phone</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">Address</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control m-b-20" />
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <select className="select">
                                    <option>Select Country</option>
                                    <option value={1}>USA</option>
                                    <option value={2}>France</option>
                                    <option value={3}>India</option>
                                    <option value={4}>Spain</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <input type="text" placeholder="ZIP code" className="form-control" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="text" placeholder="State/Province" className="form-control" />
                                </div>
                                <div className="form-group">
                                  <input type="text" placeholder="City" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>			
      </div>
		);
	}
}

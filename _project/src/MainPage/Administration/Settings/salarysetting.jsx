/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class SalarySettings extends Component {

   render() {
     
      return ( 
        <div className="page-wrapper">
        <Helmet>
            <title>Salary Settings - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Salary Settings</h3>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <form>
                {/* DA and HRA Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    DA and HRA 											
                    <div className="onoffswitch">
                      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_hra" defaultChecked />
                      <label className="onoffswitch-label" htmlFor="switch_hra">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>DA (%)</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>HRA (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /DA and HRA Settings */}
                {/* Provident Fund Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    Provident Fund Settings 											
                    <div className="onoffswitch">
                      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_pf" defaultChecked />
                      <label className="onoffswitch-label" htmlFor="switch_pf">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Employee Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Organization Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Provident Fund Settings */}
                {/* ESI Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    ESI Settings 											
                    <div className="onoffswitch">
                      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_esi" />
                      <label className="onoffswitch-label" htmlFor="switch_esi">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Employee Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Organization Share (%)</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /ESI Settings */}
                {/* TDS Settings */}
                <div className="settings-widget">
                  <div className="h3 card-title with-switch">
                    TDS&nbsp; <small className="form-text text-muted">Annual Salary</small>
                    <div className="onoffswitch">
                      <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="switch_tds" />
                      <label className="onoffswitch-label" htmlFor="switch_tds">
                        <span className="onoffswitch-inner" />
                        <span className="onoffswitch-switch" />
                      </label>
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Salary From</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Salary To</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>%</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label className="d-none d-sm-block">&nbsp;</label>
                        <button className="btn btn-danger btn-block set-btn" type="button"><i className="fa fa-trash-o" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Salary From</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label>Salary To</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label>%</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group">
                        <label className="d-none d-sm-block">&nbsp;</label>
                        <button className="btn btn-danger btn-block set-btn" type="button"><i className="fa fa-trash-o" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-sm-2 ml-auto">
                      <div className="form-group">
                        <button className="btn btn-primary btn-block" type="button"><i className="fa fa-plus" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /TDS Settings */}
                {/* Submit Button */}
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">Save</button>
                </div>
                {/* /Submit Button */}
              </form>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      );
   }
}

export default SalarySettings;

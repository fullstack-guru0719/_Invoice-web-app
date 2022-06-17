/**
 * Form Elemets
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import InputMask from 'react-input-mask';

export default class FormElements extends Component {
	
	render() {
		return (
            <div className="page-wrapper">
			<Helmet>
				  <title>Form Mask - HRMS Admin Template</title>
				  <meta name="description" content="Login page"/>					
			</Helmet>
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Form Mask</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item active">Form Mask</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card mb-0">
                    <div className="card-header">
                      <h4 className="card-title mb-0">Form Mask</h4>
                      <p className="card-text">Input masks can be used to force the user to enter data conform a specific format. Unlike validation, the user can't enter any other key than the ones specified by the mask.</p>
                    </div>
                    <div className="card-body">
                      <form action="#">
                        <div className="form-group">
                          <label>Phone</label>
                          <InputMask className="form-control" mask="(999) 999-9999" ></InputMask>
                          <span className="form-text text-muted">(999) 999-9999</span>
                        </div>
                        <div className="form-group">
                          <label>Date</label>
                          <InputMask className="form-control" mask="99/99/9999" ></InputMask>
                          <span className="form-text text-muted">dd/mm/yyyy</span>
                        </div>
                        <div className="form-group">
                          <label>SSN field 1</label>
                          <InputMask className="form-control" mask="999-99-9999" ></InputMask>
                          <span className="form-text text-muted">e.g "999-99-9999"</span>
                        </div>
                        <div className="form-group">
                          <label>Phone field + ext.</label>
                          <InputMask className="form-control" mask="(999) 999-9999? x99999" ></InputMask>
                          <span className="form-text text-muted">+40 999 999 999</span>
                        </div>
                        <div className="form-group">
                          <label>Product Key</label>
                          <InputMask className="form-control" mask="a*-999-a999" ></InputMask>
                          <span className="form-text text-muted">e.g a*-999-a999</span>
                        </div>
                        <div className="form-group">
                          <label>Currency</label>
                          <InputMask className="form-control" mask="999,999,999.99" ></InputMask>
                          <span className="form-text text-muted">$ 999,999,999.99</span>
                        </div>
                        <div className="form-group">
                          <label>Eye Script</label>
                          <InputMask className="form-control" mask="~9.99 ~9.99 999" ></InputMask>
                          <span className="form-text text-muted">~9.99 ~9.99 999</span>
                        </div>
                        <div className="form-group">
                          <label>Percent</label>
                          <InputMask className="form-control" mask="99%" ></InputMask>
                          <span className="form-text text-muted">e.g "99%"</span>
                        </div>
                        <div className="form-group mb-0">
                          <label>Credit Card Number</label>
                          <InputMask className="form-control" mask="9999 9999 9999 9999" ></InputMask>
                          <span className="form-text text-muted">e.g "999.999.999.9999"</span>
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

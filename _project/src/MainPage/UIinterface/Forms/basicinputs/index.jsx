/**
 * Form Elemets
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class FormElements extends Component {
	state = {
		dataSource: [],
	};

	handleUpdateInput = (value) => {
		this.setState({
			dataSource: [
				value,
				value + value,
				value + value + value,
			],
		});
	};

	render() {
		return (
			<div className="page-wrapper">
			<Helmet>
				  <title>Form Basic Input - HRMS Admin Template</title>
				  <meta name="description" content="Login page"/>					
			</Helmet>
        <	div className="content container-fluid">
			{/* Page Header */}
			<div className="page-header">
				<div className="row">
				<div className="col">
					<h3 className="page-title">Basic Inputs</h3>
					<ul className="breadcrumb">
					<li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
					<li className="breadcrumb-item active">Basic Inputs</li>
					</ul>
				</div>
				</div>
			</div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Basic Inputs</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Text Input</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Password</label>
                      <div className="col-md-10">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Disabled Input</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" disabled="disabled" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Readonly Input</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" defaultValue="readonly" readOnly="readonly" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Placeholder</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="Placeholder" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">File Input</label>
                      <div className="col-md-10">
                        <input className="form-control" type="file" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Default Select</label>
                      <div className="col-md-10">
                        <select className="form-control">
                          <option>-- Select --</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Radio</label>
                      <div className="col-md-10">
                        <div className="radio">
                          <label>
                            <input type="radio" name="radio" /> Option 1
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="radio" /> Option 2
                          </label>
                        </div>
                        <div className="radio">
                          <label>
                            <input type="radio" name="radio" /> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Checkbox</label>
                      <div className="col-md-10">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox" /> Option 1
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox" /> Option 2
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox" /> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Textarea</label>
                      <div className="col-md-10">
                        <textarea rows={5} cols={5} className="form-control" placeholder="Enter text here" defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-form-label col-md-2">Input Addons</label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input className="form-control" type="text" />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Button</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-header">
                  <h4 className="card-title mb-0">Input Sizes</h4>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Large Input</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control form-control-lg" placeholder=".form-control-lg" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Default Input</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control" placeholder=".form-control" />
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <label className="col-form-label col-md-2">Small Input</label>
                      <div className="col-md-10">
                        <input type="text" className="form-control form-control-sm" placeholder=".form-control-sm" />
                      </div>
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

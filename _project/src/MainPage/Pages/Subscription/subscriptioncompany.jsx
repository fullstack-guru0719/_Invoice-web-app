/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class SubscriptionCompany extends Component {
  render() {
    return (
           
			<div className="page-wrapper">
				 <Helmet>
              <title>Subscription - HRMS admin Template</title>
              <meta name="description" content="Reactify Blank Page" />
            </Helmet>
			{/* Page Content */}
			<div className="content container-fluid">
			  {/* Page Header */}
			  <div className="page-header">
				<div className="row">
				  <div className="col-sm-8 col-4">
					<h3 className="page-title">Subscriptions</h3>
					<ul className="breadcrumb">
					  <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
					  <li className="breadcrumb-item active">Subscriptions</li>
					</ul>
				  </div>
				</div>
			  </div>
			  {/* /Page Header */}
			  <div className="row">
				<div className="col-lg-10 mx-auto">
				  {/* Plan Tab */}
				  <div className="row justify-content-center mb-4">
					<div className="col-auto">
					  <nav className="nav btn-group">
						<a href="#monthly" className="btn btn-outline-secondary active show" data-toggle="tab">Monthly Plan</a>
						<a href="#annual" className="btn btn-outline-secondary" data-toggle="tab">Annual Plan</a>
					  </nav>
					</div>
				  </div>
				  {/* /Plan Tab */}
				  {/* Plan Tab Content */}
				  <div className="tab-content">
					{/* Monthly Tab */}
					<div className="tab-pane fade active show" id="monthly">
					  <div className="row mb-30 equal-height-cards">
						<div className="col-md-4">
						  <div className="card pricing-box">
							<div className="card-body d-flex flex-column">
							  <div className="mb-4">
								<h3>Free</h3>
								<span className="display-4">$0</span>
							  </div>
							  <ul>
								<li><i className="fa fa-check" /> <b>1 User</b></li>
								<li><i className="fa fa-check" /> 5 Projects </li>
								<li><i className="fa fa-check" /> 5 GB Storage</li>
								<li><i className="fa fa-check" /> Unlimited Message</li>
							  </ul>
							  <a href="#" className="btn btn-lg btn-success mt-auto">Current Plan</a>
							</div>
						  </div>
						</div>
						<div className="col-md-4">
						  <div className="card pricing-box">
							<div className="card-body d-flex flex-column">
							  <div className="mb-4">
								<h3>Professional</h3>
								<span className="display-4">$21</span>
								<span>/mo</span>
							  </div>
							  <ul>
								<li><i className="fa fa-check" /> <b>30 Users</b></li>
								<li><i className="fa fa-check" /> 50 Projects</li>
								<li><i className="fa fa-check" /> 100 GB Storage</li>
								<li><i className="fa fa-check" /> Unlimited Message</li>
								<li><i className="fa fa-check" /> 24/7 Customer Support</li>
							  </ul>
							  <a href="#" className="btn btn-lg btn-outline-secondary mt-auto">Upgrade</a>
							</div>
						  </div>
						</div>
						<div className="col-md-4">
						  <div className="card pricing-box">
							<div className="card-body d-flex flex-column">
							  <div className="mb-4">
								<h3>Enterprise</h3>
								<span className="display-4">$38</span>
								<span>/mo</span>
							  </div>
							  <ul>
								<li><i className="fa fa-check" /> <b>Unlimited Users </b></li>
								<li><i className="fa fa-check" /> Unlimited Projects</li>
								<li><i className="fa fa-check" /> 500 GB Storage</li>
								<li><i className="fa fa-check" /> Unlimited Message</li>
								<li><i className="fa fa-check" /> Voice and Video Call</li>
								<li><i className="fa fa-check" /> 24/7 Customer Support</li>
							  </ul>
							  <a href="#" className="btn btn-lg btn-outline-secondary mt-auto">Upgrade</a>
							</div>
						  </div>
						</div>
					  </div>
					</div>
					{/* /Monthly Tab */}
					{/* Yearly Tab */}
					<div className="tab-pane fade" id="annual">
					  <div className="row mb-30 equal-height-cards">
						<div className="col-md-4">
						  <div className="card pricing-box">
							<div className="card-body d-flex flex-column">
							  <div className="mb-4">
								<h3>Free</h3>
								<span className="display-4">$0</span>
							  </div>
							  <ul>
								<li><i className="fa fa-check" /> <b>1 User</b></li>
								<li><i className="fa fa-check" /> 5 Projects </li>
								<li><i className="fa fa-check" /> 5 GB Storage</li>
							  </ul>
							  <a href="#" className="btn btn-lg btn-outline-secondary mt-auto">Upgrade</a>
							</div>
						  </div>
						</div>
						<div className="col-md-4">
						  <div className="card pricing-box">
							<div className="card-body d-flex flex-column">
							  <div className="mb-4">
								<h3>Professional</h3>
								<span className="display-4">$199</span>
								<span>/mo</span>
							  </div>
							  <ul>
								<li><i className="fa fa-check" /> <b>30 Users</b></li>
								<li><i className="fa fa-check" /> 50 Projects</li>
								<li><i className="fa fa-check" /> 100 GB Storage</li>
								<li><i className="fa fa-check" /> Unlimited Message</li>
								<li><i className="fa fa-check" /> 24/7 Customer Support</li>
							  </ul>
							  <a href="#" className="btn btn-lg btn-outline-secondary mt-auto">Upgrade</a>
							</div>
						  </div>
						</div>
						<div className="col-md-4">
						  <div className="card pricing-box">
							<div className="card-body d-flex flex-column">
							  <div className="mb-4">
								<h3>Enterprise</h3>
								<span className="display-4">$399</span>
								<span>/mo</span>
							  </div>
							  <ul>
								<li><i className="fa fa-check" /> <b>Unlimited Users </b></li>
								<li><i className="fa fa-check" /> Unlimited Projects</li>
								<li><i className="fa fa-check" /> 500 GB Storage</li>
								<li><i className="fa fa-check" /> Unlimited Message</li>
								<li><i className="fa fa-check" /> Voice and Video Call</li>
								<li><i className="fa fa-check" /> 24/7 Customer Support</li>
							  </ul>
							  <a href="#" className="btn btn-lg btn-outline-secondary mt-auto">Upgrade</a>
							</div>
						  </div>
						</div>
					  </div>
					</div>
					{/* Yearly Tab */}
				  </div>
				  {/* /Plan Tab Content */}
				  {/* Plan Details */}
				  <div className="row">
					<div className="col-md-12">
					  <div className="card card-table mb-0">
						<div className="card-header">
						  <h4 className="card-title mb-0">Plan Transactions</h4>
						</div>
						<div className="card-body">
						  <div className="table-responsive">
							<table className="table table-hover table-center mb-0">
							  <thead>
								<tr>
								  <th>Plan</th>
								  <th>Users</th>
								  <th>Plan Duration</th>
								  <th>Start Date</th>
								  <th>End Date</th>
								  <th>Amount</th>
								  <th>Update Plan</th>
								</tr>
							  </thead>
							  <tbody>
								<tr>
								  <td>Free Trial</td>
								  <td>30 Users</td>
								  <td>1 Month</td>
								  <td>9 Nov 2019</td>
								  <td>8 Dec 2019</td>
								  <td>$200.00</td>
								  <td><a className="btn btn-primary btn-sm" href="">Change Plan</a></td>
								</tr>
							  </tbody>
							</table>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				  {/* /Plan Details */}
				</div>
			  </div>
			</div>
			{/* /Page Content */}
		  </div>
       
    );
  }
}

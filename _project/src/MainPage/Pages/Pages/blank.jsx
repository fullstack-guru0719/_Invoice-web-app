/**
 * Blank Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class Blank extends Component {
	render() {
		return (
				
				   <div className="page-wrapper">
					   <Helmet>
							<title>Blank - HRMS admin Template</title>
							<meta name="description" content="Reactify Blank Page" />
						</Helmet>
				   {/* Page Content */}
				   <div className="content container-fluid">
					 {/* Page Header */}
					 <div className="page-header">
					   <div className="row">
						 <div className="col-sm-12">
						   <h3 className="page-title">Blank Page</h3>
						   <ul className="breadcrumb">
							 <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
							 <li className="breadcrumb-item active">Blank Page</li>
						   </ul>
						 </div>
					   </div>
					 </div>
					 {/* /Page Header */}
					 {/* Content Starts */}
					 Content Starts Here
					 {/* /Content End */}
				   </div>
				   {/* /Page Content */}
				 </div>
				
		);
	}
}

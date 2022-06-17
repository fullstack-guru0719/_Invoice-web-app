/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import emailService from "../../router_service/emailService";

import Header from './header';
import SidebarContent from './emailsidebar';

class EmailLayout extends Component {
	render() {
		const { match } = this.props;
		return (
			<div className="main-wrapper">
				<Header/>
				<div>
					{emailService && emailService.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>				
				<SidebarContent/>
			</div>
		);
	}
}
export default withRouter(EmailLayout);
/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import settingservice from "../../router_service/settingservice";

import Header from './header';
import SidebarContent from './settingsidebar';

class SettingsLayout extends Component {
	render() {
		const { match } = this.props;
		return (
			<div className="main-wrapper">
				<Header/>
				<div>
					{settingservice && settingservice.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>				
				<SidebarContent/>
			</div>
		);
	}
}
export default withRouter(SettingsLayout);
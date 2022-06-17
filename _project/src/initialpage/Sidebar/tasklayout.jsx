/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import taskservice from "../../router_service/taskservice";

import Header from './header';
import SidebarContent from './tasksidebar';

class Tasklayout extends Component {
	render() {
		const { match } = this.props;
		return (
			<div className="main-wrapper">
				<Header/>
				<div>
					{taskservice && taskservice.map((route,key)=>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>				
				<SidebarContent/>
			</div>
		);
	}
}
export default withRouter(Tasklayout);
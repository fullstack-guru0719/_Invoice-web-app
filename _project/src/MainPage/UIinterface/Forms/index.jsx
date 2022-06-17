/**
 * Forms Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Basicinputs from "./basicinputs"
import Inputgrp from "./Inputgroups"
import HorizontalForm from "./HorizontalForm"
import VerticalForm from "./VerticalForm"
import Formmask from "./Formmask"
import Formvalidation from "./Formvalidation"

const Forms = ({ match }) => (
		
		<Switch>
			<Redirect exact from={`${match.url}/`} to={`${match.url}/basicinputs`} />
			<Route path={`${match.url}/basicinputs`} component={Basicinputs} />
			<Route path={`${match.url}/inputgroups`} component={Inputgrp} />
			<Route path={`${match.url}/horizontalform`} component={HorizontalForm} />
			<Route path={`${match.url}/verticalform`} component={VerticalForm} />
			<Route path={`${match.url}/formmask`} component={Formmask} />
			<Route path={`${match.url}/formvalidation`} component={Formvalidation} />
		</Switch>
);

export default Forms;

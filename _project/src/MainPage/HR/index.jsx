/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Policies from './policies';

const ReportsRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/policies`} />
      <Route path={`${match.url}/policies`} component={Policies} />
   </Switch>
);

export default ReportsRoute;

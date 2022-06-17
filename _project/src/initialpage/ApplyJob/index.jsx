/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import JobsList from './JobsList';
import Jobdetails from './jobdetails';

const JobRoute = ({ match }) => (
   <div className="dashboard-wrapper">
      <Switch>
         <Redirect exact from={`${match.url}/`} to={`${match.url}/joblist`} />
         <Route path={`${match.url}/joblist`} component={JobsList} />
         <Route path={`${match.url}/jobdetail`} component={Jobdetails} />
      </Switch>
   </div>
);

export default JobRoute;

/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Users from "./users"
import Activities from "./activities"
import Assets from "./assets"
import knowledgebase from "./knowledgebase"
import knowledgebaseview from "./knowledgebase-view"
import Jobs from "./Jobs/managejobs"
import jobApplicants from "./Jobs/appliedcandidate"
import jobdetails from "./Jobs/jobdetails"


const Uiinterfaceroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/users`} />
        <Route path={`${match.url}/users`} component={Users} />
        <Route path={`${match.url}/activities`} component={Activities} />
        <Route path={`${match.url}/assets`} component={Assets} />
        <Route path={`${match.url}/knowledgebase`} component={knowledgebase} />
        <Route path={`${match.url}/knowledgebase-view`} component={knowledgebaseview} />
        <Route path={`${match.url}/jobs`} component={Jobs} />
        <Route path={`${match.url}/job-details`} component={jobdetails} />
        <Route path={`${match.url}/job-applicants`} component={jobApplicants} />
    </Switch>
);

export default Uiinterfaceroute;

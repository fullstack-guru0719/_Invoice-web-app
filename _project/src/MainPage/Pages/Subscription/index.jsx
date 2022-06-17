/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import subscriptionadmin from "./subscriptionadmin"
import subscriptioncompany from "./subscriptioncompany"
import Subscribedcompanies from "./Subscribedcompanies"


const subscriptionroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/subscriptionadmin`} />
        <Route path={`${match.url}/subscriptionadmin`} component={subscriptionadmin} />
        <Route path={`${match.url}/subscriptioncompany`} component={subscriptioncompany} />
        <Route path={`${match.url}/subscribedcompanies`} component={Subscribedcompanies} />
    </Switch>
);

export default subscriptionroute;

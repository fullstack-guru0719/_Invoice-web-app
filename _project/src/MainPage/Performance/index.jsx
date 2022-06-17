/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Promotion from "./promotion"
import Resignation from "./resignation"
import Termination from "./termination"

const Performanceroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/promotion`} />
        <Route path={`${match.url}/promotion`} component={Promotion} />
        <Route path={`${match.url}/resignation`} component={Resignation} />
        <Route path={`${match.url}/termination`} component={Termination} />
    </Switch>
);

export default Performanceroute;

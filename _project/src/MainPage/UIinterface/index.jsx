/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Forms from "./Forms"
import Tables from "./Tables"


const Uiinterfaceroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`} />
        <Route path={`${match.url}/forms`} component={Forms} />
        <Route path={`${match.url}/tables`} component={Tables} />
    </Switch>
);

export default Uiinterfaceroute;

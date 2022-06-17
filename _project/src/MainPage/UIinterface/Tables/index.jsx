/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import basictable from "./basic"
import datatable from "./data-table"


const Pages = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/basic`} />
        <Route path={`${match.url}/basic`} component={basictable} />
        <Route path={`${match.url}/data-table`} component={datatable} />
    </Switch>
);

export default Pages;

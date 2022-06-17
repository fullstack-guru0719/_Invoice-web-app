/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import GoalList from "./goallist"
import GoalType from "./goaltype"

const Goalroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/goal-tracking`} />
        <Route path={`${match.url}/goal-tracking`} component={GoalList} />
        <Route path={`${match.url}/goal-type`} component={GoalType} />
    </Switch>
);

export default Goalroute;

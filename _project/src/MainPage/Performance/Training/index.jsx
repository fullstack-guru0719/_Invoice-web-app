/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Trainers from "./trainers"
import Traininglist from "./traininglist"
import Trainingtype from "./trainingtype"

const Trainingroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/training-list`} />
        <Route path={`${match.url}/trainer`} component={Trainers} />
        <Route path={`${match.url}/training-list`} component={Traininglist} />
        <Route path={`${match.url}/training-type`} component={Trainingtype} />
    </Switch>
);

export default Trainingroute;

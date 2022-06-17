/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Blank from "./blank"
import Faq from "./faq"
import Privacypolicy from "./privacypolicy"
import Search from "./search"
import Terms from "./terms"


const Uiinterfaceroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/search`} />
        <Route path={`${match.url}/search`} component={Search} />
        <Route path={`${match.url}/blank`} component={Blank} />
        <Route path={`${match.url}/faq`} component={Faq} />
        <Route path={`${match.url}/privacypolicy`} component={Privacypolicy} />
        <Route path={`${match.url}/terms`} component={Terms} />
    </Switch>
);

export default Uiinterfaceroute;

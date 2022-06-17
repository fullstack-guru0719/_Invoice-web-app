/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ExpenseReport from './expensereport';
import Invoicereport from './invoicereport';

const ReportsRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/expense-reports`} />
      <Route path={`${match.url}/expense-reports`} component={ExpenseReport} />
      <Route path={`${match.url}/invoice-reports`} component={Invoicereport} />
   </Switch>
);

export default ReportsRoute;

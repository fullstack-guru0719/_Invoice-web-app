/**
 * Crm Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AllEmployees from './allemployees';
import AllEmployeesList from './employeeslist';
import Holidays from './holidays';
import LeaveAdmin from './leave_admin';
import LeaveEmployee from './leaveemployee';
import Leavesetting from './leavesettings';
import AttendanceAdmin from './attendanceadmin';
import AttendanceEmployee from './attendanceemployee';
import Department from './department';
import Designation from './designation';
import Timesheet from './timesheet';
import Overtime from './overtime';

const EmployeesRoute = ({ match }) => (
   <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/allemployees`} />
      <Route path={`${match.url}/allemployees`} component={AllEmployees} />
      <Route path={`${match.url}/employees-list`} component={AllEmployeesList} />
      <Route path={`${match.url}/holidays`} component={Holidays} />
      <Route path={`${match.url}/leaves-admin`} component={LeaveAdmin} />
      <Route path={`${match.url}/leaves-employee`} component={LeaveEmployee} />
      <Route path={`${match.url}/leave-settings`} component={Leavesetting} />
      <Route path={`${match.url}/attendance-admin`} component={AttendanceAdmin} />
      <Route path={`${match.url}/attendance-employee`} component={AttendanceEmployee} />
      <Route path={`${match.url}/departments`} component={Department} />
      <Route path={`${match.url}/designations`} component={Designation} />
      <Route path={`${match.url}/timesheet`} component={Timesheet} />
      <Route path={`${match.url}/overtime`} component={Overtime} />
   </Switch>
);

export default EmployeesRoute;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import App from '../initialpage/App';
import config from 'config';
// import history from '../helpers/history'

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'font-awesome/css/font-awesome.min.css';
// import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../assets/css/font-awesome.min.css';
import '../assets/css/line-awesome.min.css';


// import "../assets/plugins/fontawesome/css/fontawesome.min.css"
// import "../assets/plugins/fontawesome/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Style File
import '../assets/js/bootstrap.min.js';
import '../assets/css/select2.min.css';

import '../assets/css/style.css';
import '../assets/js/popper.min.js';
import '../assets/js/app.js';
import '../assets/js/select2.min.js';
import '../assets/js/jquery-3.2.1.min.js';

import '../assets/js/jquery.slimscroll.min.js';

import "../assets/js/bootstrap-datetimepicker.min.js"
import "../assets/js/jquery-ui.min.js"
import "../assets/js/task.js"
import "../assets/js/multiselect.min.js"
import "../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css"

// const getBasename = path => path.substr(0, path.lastIndexOf('/')); 
// console.log('sreevidsf '+" "+getBasename)
// basename={`${config.publicPath}`}
const MainApp = () => (
   <Router basename={`${config.publicPath}`}>
      <Switch>
         <Route path="/" component={App} />
      </Switch>
      {/* <App /> */}
   </Router>
);

export default MainApp;
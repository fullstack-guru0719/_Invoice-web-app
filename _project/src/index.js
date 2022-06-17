import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'

import Main from "./Pages/Main";

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
    module.hot.accept();
}
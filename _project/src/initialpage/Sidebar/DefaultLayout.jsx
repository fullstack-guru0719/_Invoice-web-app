/**
 * App Routes
 */
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// router service
import routerService from "../../router_service";

import Header from "./header.jsx";
import SidebarContent from "./sidebar";

class DefaultLayout extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <div className="main-wrapper">
          <Header />
          <div>
            {routerService &&
              routerService.map((route, key) => (
                <Route
                  key={key}
                  path={`${match.url}/${route.path}`}
                  component={route.component}
                />
              ))}
          </div>
          <SidebarContent />
        </div>
      </Switch>
    );
  }
}
export default withRouter(DefaultLayout);

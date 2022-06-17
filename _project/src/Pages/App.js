import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config';
import routes from './Routes'

export default function App() {
    return (
        <Switch>
            {routes && routes.map((route, key) =>
                <Route key={key} path={`${route.path}`} component={route.component} />
            )}
        </Switch>
    )
}
import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

import NewsApp from './newsApp'
// testing

const App = () => (
    <div id="app">
        <div className="navBar">
            <NavLink exact className="nav-item" activeStyle={{ fontWeight: 'bold' }} to='/'>Away Screen</NavLink>
            <NavLink className="nav-item" activeStyle={{ fontWeight: 'bold' }} to='/greenscreen'>Green Screen</NavLink>
        </div>

        <Switch>
            <Route path="/" component={NewsApp} />
            <Route path="/greenscreen" component={NewsApp} />
        </Switch>
    </div>
)

export default App;
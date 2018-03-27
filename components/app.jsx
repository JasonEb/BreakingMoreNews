import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewsApp from './newsApp'
// testing

const App = () => (
    <div id="app">
        <Switch>
            <Route component={NewsApp} />
            <Route path="/greenscreen" component={NewsApp} />
        </Switch>
    </div>
)

export default App;
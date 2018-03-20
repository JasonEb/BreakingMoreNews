import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewsApp from './newsApp'

// testing
import LiveBox from './liveBox'
import Header from './header'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={NewsApp} />
            <Route path="/livebox" component={LiveBox} />
            <Route path="/header" component={Header} />
        </Switch>
    </div>
)

export default App;
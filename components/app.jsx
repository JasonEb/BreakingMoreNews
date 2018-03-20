import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewsApp from './newsApp'

// testing
import LiveBox from './liveBox'
import Header from './header'
import Background from './background'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={NewsApp} />
            <Route path="/livebox" component={LiveBox} />
            <Route path="/header" component={Header} />
            <Route path="/background" component={Background} />
        </Switch>
    </div>
)

export default App;
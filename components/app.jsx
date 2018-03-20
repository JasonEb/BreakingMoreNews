import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewsApp from './newsApp'

// testing
import LiveBox from './liveBox'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={NewsApp} />
            <Route exact path="/livebox" component={LiveBox} />
        </Switch>
    </div>
)

export default App;
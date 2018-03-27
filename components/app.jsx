import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewsApp from './newsApp'

// testing
import BottomDisplay from './bottomDisplay'
import Background from './background'
const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={NewsApp} />
            <Route path="/bottomDisplay" component={BottomDisplay} />
            <Route path="/background" component={Background} />
        </Switch>
    </div>
)

export default App;
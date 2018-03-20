import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NewsApp from './newsApp'

// testing
import BottomDisplay from './bottomDisplay'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={NewsApp} />
            <Route path="/bottomDisplay" component={BottomDisplay} />
        </Switch>
    </div>
)

export default App;
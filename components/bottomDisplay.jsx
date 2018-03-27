import React from 'react'

import Header from './header'
import Description from './description'
import CurrentTime from './currentTime'
import Ticker from './ticker'

class BottomDisplay extends React.Component {
    render() {
        return <div id="bottom_display">
            <Header />
            <Description />
            <div className="ticker_container">
                <CurrentTime />
                <Ticker />
            </div>
        </div>
    }
}

export default BottomDisplay
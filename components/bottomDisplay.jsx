import React from 'react'

import Header from './header'
import Description from './description'
import CurrentTime from './currentTime'

class BottomDisplay extends React.Component {
    render() {
        return <div id="bottom_display">
            <Header />
            <Description />
            <CurrentTime />
        </div>
    }
}

export default BottomDisplay
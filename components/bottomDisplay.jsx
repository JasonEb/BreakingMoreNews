import React from 'react'

import Header from './header'
import Description from './description'

class BottomDisplay extends React.Component {
    render() {
        return <div id="bottom_display">
            <Header />
            <Description />
        </div>
    }
}

export default BottomDisplay
import React from 'react';

import LiveBox from './liveBox'
import Header from './header'
import Background from './background'

class NewsApp extends React.Component {
    render() {
        return (
            <div id="app">
                <LiveBox />
            </div>
        )
    }
}

export default NewsApp
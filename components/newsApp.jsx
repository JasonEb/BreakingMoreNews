import React from 'react';

import LiveBox from './liveBox'
import BottomDisplay from './bottomDisplay'
import Background from './background'

class NewsApp extends React.Component {
    render() {
        return (
            <div id="app">
                <LiveBox />
                <BottomDisplay />
            </div>
        )
    }
}

export default NewsApp
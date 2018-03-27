import React from 'react';

import LiveBox from './liveBox'
import BottomDisplay from './bottomDisplay'
import Background from './background'

class NewsApp extends React.Component {
    render() {
        return (
            <Background>
                <LiveBox />
                <BottomDisplay />
            </Background>
        )
    }
}

export default NewsApp
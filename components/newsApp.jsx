import React from 'react';
import LiveBox from './liveBox'

class NewsApp extends React.Component {
    render() {
        return (
            <div className="main">
                <LiveBox />
            </div>
        )
    }
}

export default NewsApp
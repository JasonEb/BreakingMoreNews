import React from 'react'

class CurrentTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        this.tick = this.tick.bind(this)
        this.tickId = 0
    }
    tick(){
        this.setState({ date: new Date() })
    }

    componentWillUnmount(){
        clearInterval(this.tickId)
    }
    componentDidMount() {
        this.tickId = setInterval( this.tick , 1000*60)
    }
    render() {
        let {date} = this.state
        let hour = date.getHours()
        let minutes = date.getMinutes()
        minutes = minutes < 10 ? "0" + minutes : minutes

        return <div id="current_time">
            {hour}<span className="colon_blinker">:</span>{minutes}
        </div>
    }
}

export default CurrentTime
import React from 'react'
import { withRouter } from 'react-router'

class Background extends React.Component {
    constructor(props) {
        super(props)
        this.state = { imageUrl: "../assets/HugoBehindBars.jpg", format: "default", backgroundColor: 'green' }
    }
    render() {
        let {imageUrl, backgroundColor} = this.state
        let {pathname} = this.props.location
        let style = {
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }
        // look at path url to determine image or green screen
        if (pathname === '/greenscreen') {
            style["backgroundColor"] = backgroundColor
        } else {
            style["backgroundImage"] = `url(${imageUrl})`
        }

        return(
            <div id="background" style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Background);
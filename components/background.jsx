import React from 'react'

class Background extends React.Component {
    constructor(props) {
        super(props)
        this.state = { imageUrl: "../assets/HugoBehindBars.jpg" }
    }
    render() {
        let {imageUrl} = this.state
        let style = {
            backgroundImage: `url(${imageUrl})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }

        return(
            <div id="background" style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default Background;
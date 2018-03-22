import React, { Component } from 'react';
import ContentEditable from 'react-simple-contenteditable';

class Ticker extends React.Component {
    constructor(props){
        super(props)
        this.defaultText = 'CONTROVERSIAL TWEET HISTORY ENDS HUGO "HUGS" GONZALEZ CAREER'
        this.state = { text: this.defaultText }
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onBlur(){
        if( this.state.text.trim() === "" ){
            this.setState({text: this.defaultText })
        }
    }
    handleChange (ev, value) {
        this.setState({text: value})
    }
    render() {
        return (
            <ContentEditable id="ticker"
                html={this.state.text}
                tagName="marquee"
                onChange={ this.handleChange }
                contentEditable="plaintext-only"
                spellCheck="false"
                scrolldelay="0"
                direction="left"
                onBlur={this.onBlur}
        />
        )
    }
}

export default Ticker